import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import "./RecognitionCarousel.css";

const descriptions = [
  "Celebrating organizations setting benchmarks through vision, integrity and sustainable growth.",
  "Honouring bold founders whose ideas create opportunity and lasting value.",
  "Recognising leaders advancing technology, research and transformative solutions.",
  "Celebrating women shaping industries and inspiring the next generation of leaders.",
  "Honouring people and organisations creating measurable change in their communities.",
  "Recognising initiatives that protect resources and build a more sustainable future.",
  "Celebrating practitioners and institutions improving health and wellbeing.",
  "Honouring institutions and leaders advancing education and practical skills.",
  "Recognising landmark projects shaping communities and the built environment.",
  "Celebrating manufacturers raising standards through quality and innovation.",
  "Honouring retail and consumer brands creating trusted, customer-first experiences.",
  "Recognising financial leaders strengthening investment and economic opportunity.",
  "Celebrating media voices informing, connecting and influencing communities.",
  "Honouring creators preserving culture and enriching the arts.",
  "Recognising community leaders building inclusive, resilient communities.",
];

const visibleOffsets = [-3, -2, -1, 0, 1, 2, 3];
const mobileVisibleOffsets = [-2, -1, 0, 1, 2];

function modulo(value, length) {
  return ((value % length) + length) % length;
}

function MedalLaurel({ side, gradientId }) {
  const left = side === "left";
  return (
    <svg
      className={`recognition-laurel recognition-laurel-${side}`}
      viewBox="0 0 28 56"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={left ? "M26 52 C 14 42, 6 24, 15 4" : "M2 52 C 14 42, 22 24, 13 4"}
        stroke={`url(#${gradientId})`}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {left ? (
        <>
          <path d="M22 46 C 14 45, 11 38, 15 34 C 18 37, 21 41, 22 46 Z" fill={`url(#${gradientId})`} />
          <path d="M17 36 C 8 34, 5 27, 10 23 C 13 26, 17 31, 17 36 Z" fill={`url(#${gradientId})`} />
          <path d="M14 26 C 5 23, 3 16, 8 12 C 11 16, 14 21, 14 26 Z" fill={`url(#${gradientId})`} />
          <path d="M13 15 C 6 11, 6 4, 12 2 C 14 6, 14 11, 13 15 Z" fill={`url(#${gradientId})`} />
          <path d="M23 32 C 27 27, 28 20, 25 17 C 22 20, 22 26, 23 32 Z" fill={`url(#${gradientId})`} />
          <path d="M19 21 C 24 16, 24 9, 21 6 C 18 9, 18 15, 19 21 Z" fill={`url(#${gradientId})`} />
        </>
      ) : (
        <>
          <path d="M6 46 C 14 45, 17 38, 13 34 C 10 37, 7 41, 6 46 Z" fill={`url(#${gradientId})`} />
          <path d="M11 36 C 20 34, 23 27, 18 23 C 15 26, 11 31, 11 36 Z" fill={`url(#${gradientId})`} />
          <path d="M14 26 C 23 23, 25 16, 20 12 C 17 16, 14 21, 14 26 Z" fill={`url(#${gradientId})`} />
          <path d="M15 15 C 22 11, 22 4, 16 2 C 14 6, 14 11, 15 15 Z" fill={`url(#${gradientId})`} />
          <path d="M5 32 C 1 27, 0 20, 3 17 C 6 20, 6 26, 5 32 Z" fill={`url(#${gradientId})`} />
          <path d="M9 21 C 4 16, 4 9, 7 6 C 10 9, 10 15, 9 21 Z" fill={`url(#${gradientId})`} />
        </>
      )}
    </svg>
  );
}

function RecognitionCard({ field, number, isActive, position, transform, gradients, style }) {
  const [title, Icon] = field;
  const description = descriptions[number - 1];

  return (
    <article
      className="recognition-card"
      data-position={position}
      aria-hidden={!isActive}
      aria-label={`${String(number).padStart(2, "0")}: ${title}`}
      style={{ ...style, transform }}
    >
      <div className="recognition-card-inner">
        <span className="recognition-card-badge">
          {String(number).padStart(2, "0")}
        </span>
        <div className="recognition-card-gloss" aria-hidden="true" />

        <div className="recognition-medallion-wrap" aria-hidden="true">
          <MedalLaurel side="left" gradientId={gradients.gold} />
          <div className="recognition-medallion">
            <div className="recognition-medallion-inner">
              <Icon size={34} strokeWidth={1.8} />
            </div>
          </div>
          <MedalLaurel side="right" gradientId={gradients.gold} />
        </div>

        <h3 className="recognition-card-title">{title}</h3>

        {isActive && (
          <>
            <div className="recognition-card-ornament" aria-hidden="true">
              <span />
              <i />
              <span />
            </div>
            <p className="recognition-card-description">{description}</p>
          </>
        )}

        <svg
          className="recognition-bottom-ribbon"
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 100 Q 220 54 500 9 L500 100Z" fill={`url(#${gradients.glow})`} />
          <path d="M0 90 Q 240 48 500 14" stroke={`url(#${gradients.ribbon})`} strokeWidth="5" fill="none" />
          <path d="M80 100 Q 290 68 500 28" stroke={`url(#${gradients.gold})`} strokeWidth="2" fill="none" />
        </svg>
      </div>
    </article>
  );
}

export function RecognitionCarousel({ fields }) {
  const stageRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(7);
  const [stageWidth, setStageWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const measure = () => setStageWidth(stage.clientWidth);
    measure();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }

    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(query.matches);
    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || interacting || reducedMotion || fields.length < 2) return undefined;

    const timerId = window.setInterval(() => {
      setActiveIndex(index => modulo(index + 1, fields.length));
    }, 3200);

    return () => window.clearInterval(timerId);
  }, [fields.length, interacting, paused, reducedMotion]);

  const offsets = stageWidth <= 760 ? mobileVisibleOffsets : visibleOffsets;
  const step = stageWidth <= 760
    ? Math.min(150, Math.max(108, stageWidth / 3.4))
    : Math.min(220, stageWidth / 5.3);
  const activeField = fields[activeIndex];
  const activeTitle = activeField?.[0] ?? "";
  const gradientId = React.useId().replace(/:/g, "");
  const gradients = {
    gold: `${gradientId}-gold`,
    ribbon: `${gradientId}-ribbon`,
    glow: `${gradientId}-glow`,
  };

  const move = direction => {
    setActiveIndex(index => modulo(index + direction, fields.length));
  };

  const handleKeyDown = event => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(fields.length - 1);
    }
  };

  return (
    <section
      className="recognition-carousel"
      ref={stageRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Recognition fields"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerEnter={() => setInteracting(true)}
      onPointerLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setInteracting(false);
        }
      }}
    >
      <svg className="recognition-carousel-gradients" aria-hidden="true">
        <defs>
          <linearGradient id={gradients.gold} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D5A40" />
            <stop offset="40%" stopColor="#C5A46D" />
            <stop offset="80%" stopColor="#D9BC8A" />
            <stop offset="100%" stopColor="#FFF1C2" />
          </linearGradient>
          <linearGradient id={gradients.ribbon} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D5A40" stopOpacity="0" />
            <stop offset="40%" stopColor="#C5A46D" stopOpacity="0.7" />
            <stop offset="85%" stopColor="#D9BC8A" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#FFF1C2" />
          </linearGradient>
          <linearGradient id={gradients.glow} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D9BC8A" stopOpacity="0" />
            <stop offset="100%" stopColor="#C5A46D" stopOpacity="0.55" />
          </linearGradient>
        </defs>
      </svg>

      <div className="recognition-carousel-horizon" aria-hidden="true" />

      <div className="recognition-carousel-stage">
        {offsets.map(offset => {
          const index = modulo(activeIndex - offset, fields.length);
          const distance = Math.abs(offset);
          const field = fields[index];
          const scale = distance === 0 ? 1 : distance === 1 ? 0.88 : distance === 2 ? 0.76 : 0.65;
          const opacity = distance === 0 ? 1 : distance === 1 ? 0.94 : distance === 2 ? 0.72 : 0.44;

          return (
            <RecognitionCard
              key={field[0]}
              field={field}
              number={index + 1}
              isActive={distance === 0}
              position={distance}
              gradients={gradients}
              transform={`translate(-50%, -50%) translateX(${offset * step}px) scale(${scale}) rotateY(${offset * -10}deg)`}
              style={{ opacity, zIndex: 10 - distance }}
            />
          );
        })}
      </div>

      <div className="recognition-carousel-controls" aria-label="Carousel controls">
        <button
          type="button"
          aria-label="Previous recognition field"
          onClick={() => move(-1)}
        >
          <ChevronLeft size={20} />
        </button>
        <span className="recognition-carousel-count">
          {String(activeIndex + 1).padStart(2, "0")} <i /> {String(fields.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          aria-label={paused ? "Play automatic rotation" : "Pause automatic rotation"}
          aria-pressed={paused}
          onClick={() => setPaused(value => !value)}
        >
          {paused ? <Play size={16} /> : <Pause size={16} />}
        </button>
        <button
          type="button"
          aria-label="Next recognition field"
          onClick={() => move(1)}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <p className="recognition-carousel-status" aria-live="polite" aria-atomic="true">
        {activeTitle} — {activeIndex + 1} of {fields.length}
      </p>
    </section>
  );
}
