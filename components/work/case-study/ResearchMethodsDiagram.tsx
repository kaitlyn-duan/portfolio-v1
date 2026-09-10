"use client";

import { motion } from "motion/react";

const CX = 95;
const CY = 60;
const TICK_X = 20;
const TEXT_X = 2;

function dotFor(radius: number, dy: number) {
  const dx = -Math.sqrt(Math.max(radius * radius - dy * dy, 0));
  return { x: CX + dx, y: CY + dy };
}

type RingDef = {
  id: string;
  label: string;
  radius: number;
  innerRadius: number;
  tickY: number;
  dotDy: number;
  stat: string;
  statLabel: string;
  fill: string;
  stroke: string;
};

const RING_DEFS: RingDef[] = [
  {
    id: "audit",
    label: "Competitor audit",
    radius: 50,
    innerRadius: 37.5,
    tickY: 108,
    dotDy: 23,
    stat: "5",
    statLabel: "Platforms",
    fill: "#f5f5f6",
    stroke: "#c7c7cc",
  },
  {
    id: "tickets",
    label: "Support tickets",
    radius: 37.5,
    innerRadius: 24,
    tickY: 76,
    dotDy: 8,
    stat: "120+",
    statLabel: "Tickets",
    fill: "#e6e6e9",
    stroke: "#aeaeb4",
  },
  {
    id: "interviews",
    label: "Interviews",
    radius: 24,
    innerRadius: 13.5,
    tickY: 44,
    dotDy: -2,
    stat: "4",
    statLabel: "Managers",
    fill: "#d6d6db",
    stroke: "#95959c",
  },
  {
    id: "shadowing",
    label: "Shadowing",
    radius: 13.5,
    innerRadius: 0,
    tickY: 12,
    dotDy: -6,
    stat: "2",
    statLabel: "Restaurants",
    fill: "#c5c5cc",
    stroke: "#7c7c85",
  },
];

const RINGS = RING_DEFS.map((ring) => ({
  ...ring,
  dot: dotFor(ring.radius, ring.dotDy),
  labelY: ring.innerRadius === 0 ? CY : CY + (ring.radius + ring.innerRadius) / 2,
}));

const EASE = [0.22, 1, 0.36, 1] as const;

export function ResearchMethodsDiagram() {
  return (
    <div className="relative w-full">
      <div className="relative aspect-[4/3] w-full">
        <svg
          viewBox="0 0 160 120"
          className="absolute inset-0 h-full w-full font-body"
          aria-hidden="true"
        >
          {RINGS.map((ring, index) => (
            <motion.circle
              key={ring.id}
              cx={CX}
              cy={CY}
              r={ring.radius}
              fill={ring.fill}
              stroke={ring.stroke}
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
              style={{ transformBox: "fill-box", transformOrigin: "center", cursor: "pointer" }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.045 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
            />
          ))}

          {RINGS.map((ring, index) => (
            <motion.g
              key={`${ring.id}-connector`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3, ease: EASE }}
            >
              <line
                x1={TICK_X}
                y1={ring.tickY - 3.2}
                x2={TICK_X}
                y2={ring.tickY + 3.2}
                stroke="var(--color-ink)"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
              />
              <polyline
                points={`${TICK_X},${ring.tickY} ${ring.dot.x},${ring.tickY} ${ring.dot.x},${ring.dot.y}`}
                fill="none"
                stroke="var(--color-ink)"
                strokeWidth={1}
                strokeLinecap="round"
                strokeDasharray="0.75 3"
                vectorEffect="non-scaling-stroke"
              />
              <circle cx={ring.dot.x} cy={ring.dot.y} r={1} fill="var(--color-ink)" />
            </motion.g>
          ))}

          {RINGS.map((ring, index) => (
            <motion.text
              key={`${ring.id}-label`}
              x={CX}
              y={ring.labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              className={ring.id === "shadowing" ? "fill-ink font-medium" : "fill-ink-soft"}
              style={{ fontSize: 2.8 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2, ease: EASE }}
            >
              {ring.label}
            </motion.text>
          ))}

          {RINGS.map((ring, index) => (
            <motion.g
              key={`${ring.id}-stat`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: EASE }}
            >
              <text
                x={TEXT_X}
                y={ring.tickY - 2.6}
                dominantBaseline="middle"
                className="fill-ink font-bold"
                style={{ fontSize: 7 }}
              >
                {ring.stat}
              </text>
              <text
                x={TEXT_X}
                y={ring.tickY + 3}
                dominantBaseline="middle"
                className="fill-ink-soft"
                style={{ fontSize: 2.8 }}
              >
                {ring.statLabel}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
}
