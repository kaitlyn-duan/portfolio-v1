"use client";

import { useRef, useState } from "react";

const ECHO_JITTER = 10;

export function InkAndStatic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  function getPoint(e: React.PointerEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function drawSegment(from: { x: number; y: number }, to: { x: number; y: number }) {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = "#1a1613";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();

    const echoFrom = {
      x: from.x + (Math.random() - 0.5) * ECHO_JITTER,
      y: from.y + (Math.random() - 0.5) * ECHO_JITTER,
    };
    const echoTo = {
      x: to.x + (Math.random() - 0.5) * ECHO_JITTER,
      y: to.y + (Math.random() - 0.5) * ECHO_JITTER,
    };
    ctx.strokeStyle = "rgba(74, 76, 232, 0.55)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(echoFrom.x, echoFrom.y);
    ctx.lineTo(echoTo.x, echoTo.y);
    ctx.stroke();
  }

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    drawing.current = true;
    lastPoint.current = getPoint(e);
    setIsEmpty(false);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current || !lastPoint.current) return;
    const point = getPoint(e);
    drawSegment(lastPoint.current, point);
    lastPoint.current = point;
  }

  function handlePointerUp() {
    drawing.current = false;
    lastPoint.current = null;
  }

  function handleClear() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setIsEmpty(true);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={600}
          height={360}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="w-full touch-none rounded-sm border border-line bg-paper-alt"
        />
        {isEmpty && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-wide text-ink-soft">
            Draw here — every stroke gets a digital echo
          </span>
        )}
      </div>
      <button
        type="button"
        onClick={handleClear}
        className="w-fit font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-accent-red"
      >
        Clear
      </button>
    </div>
  );
}
