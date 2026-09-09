"use client";

import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

// The echo trails the real stroke by an offset that drifts slowly instead of
// being re-rolled per point, so it reads as a second wobbling line rather than
// a burst of spikes off the original.
const ECHO_MAX_OFFSET = 6;
const ECHO_DRIFT = 1.1;

function clamp(value: number, limit: number) {
  return Math.max(-limit, Math.min(limit, value));
}

export function InkAndStatic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const lastPoint = useRef<Point | null>(null);
  const lastEcho = useRef<Point | null>(null);
  const echoOffset = useRef<Point>({ x: 0, y: 0 });
  const [isEmpty, setIsEmpty] = useState(true);

  // Match the backing bitmap to the element's real size and pixel density, so
  // canvas coordinates line up 1:1 with pointer coordinates.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = window.devicePixelRatio || 1;
      const width = Math.round(rect.width * dpr);
      const height = Math.round(rect.height * dpr);
      if (canvas.width === width && canvas.height === height) return;

      const previous = document.createElement("canvas");
      previous.width = canvas.width;
      previous.height = canvas.height;
      previous.getContext("2d")?.drawImage(canvas, 0, 0);

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      if (previous.width && previous.height) {
        ctx.drawImage(previous, 0, 0, rect.width, rect.height);
      }
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  function getPoint(e: React.PointerEvent<HTMLCanvasElement>): Point {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function drawSegment(from: Point, to: Point, echoFrom: Point, echoTo: Point) {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = "rgba(74, 76, 232, 0.55)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(echoFrom.x, echoFrom.y);
    ctx.lineTo(echoTo.x, echoTo.y);
    ctx.stroke();

    ctx.strokeStyle = "#1a1613";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  function nextEcho(point: Point): Point {
    echoOffset.current = {
      x: clamp(echoOffset.current.x + (Math.random() - 0.5) * ECHO_DRIFT, ECHO_MAX_OFFSET),
      y: clamp(echoOffset.current.y + (Math.random() - 0.5) * ECHO_DRIFT, ECHO_MAX_OFFSET),
    };
    return { x: point.x + echoOffset.current.x, y: point.y + echoOffset.current.y };
  }

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    // Capturing keeps a stroke alive if the pointer leaves the canvas mid-drag,
    // but it must never be the reason drawing fails to start.
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // no active pointer to capture; carry on
    }
    drawing.current = true;

    const point = getPoint(e);
    echoOffset.current = {
      x: (Math.random() - 0.5) * ECHO_MAX_OFFSET,
      y: (Math.random() - 0.5) * ECHO_MAX_OFFSET,
    };
    lastPoint.current = point;
    lastEcho.current = { x: point.x + echoOffset.current.x, y: point.y + echoOffset.current.y };
    setIsEmpty(false);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current || !lastPoint.current || !lastEcho.current) return;

    const point = getPoint(e);
    const echo = nextEcho(point);
    drawSegment(lastPoint.current, point, lastEcho.current, echo);
    lastPoint.current = point;
    lastEcho.current = echo;
  }

  function handlePointerUp(e: React.PointerEvent<HTMLCanvasElement>) {
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // nothing to release
    }
    drawing.current = false;
    lastPoint.current = null;
    lastEcho.current = null;
  }

  function handleClear() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    setIsEmpty(true);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[5/3] w-full">
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="h-full w-full touch-none rounded-sm border border-line bg-paper-alt"
        />
        {isEmpty && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-body text-xs uppercase tracking-wide text-ink-soft">
            Draw here. Your line gets a clumsy twin.
          </span>
        )}
      </div>
      <button
        type="button"
        onClick={handleClear}
        className="w-fit font-body text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-accent-red"
      >
        Clear
      </button>
    </div>
  );
}
