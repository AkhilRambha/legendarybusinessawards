import React from "react";

export function Laurel({ flip = false }) {
  return (
    <svg
      className={`laurel-svg ${flip ? "flip" : ""}`}
      viewBox="0 0 80 200"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M70 187 Q10 120 61 17"
        stroke="#C5A46D"
        strokeWidth="3"
      />
      {Array.from({ length: 8 }, (_, i) => {
        const y = 165 - i * 19;
        const x = 55 - Math.sin((i / 8) * Math.PI) * 24;

        return (
          <g key={i}>
            <ellipse
              cx={x - 12}
              cy={y - 5}
              rx="9"
              ry="21"
              transform={`rotate(-42 ${x - 12} ${y - 5})`}
              fill="#C5A46D"
            />
            <ellipse
              cx={x + 9}
              cy={y - 12}
              rx="8"
              ry="19"
              transform={`rotate(40 ${x + 9} ${y - 12})`}
              fill="#D9BC8A"
            />
          </g>
        );
      })}
    </svg>
  );
}


/* LIVE AWARDS COUNTDOWN - HOME HERO ONLY */
