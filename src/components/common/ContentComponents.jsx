import React from "react";
import { Laurel } from "./Laurel.jsx";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  showLaurels = false,
}) {
  return (
    <div
      className={`section-heading ${showLaurels ? "section-heading-with-laurels" : ""
        }`}
    >
      {showLaurels && <Laurel />}

      <div className="section-heading-content">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}

        <h2>{title}</h2>

        {subtitle && <p>{subtitle}</p>}

        <div className="heading-ornament">
          <span />✦<span />
        </div>
      </div>

      {showLaurels && <Laurel flip />}
    </div>
  );
}

export function FeatureCard({ title, description, Icon, number }) {
  return (
    <article className="feature-card">
      {number && (
        <span className="field-number">
          {String(number).padStart(2, "0")}
        </span>
      )}

      <div className="card-icon">
        <Icon size={31} strokeWidth={1.7} />
      </div>

      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </article>
  );
}

/* ================= HOME ================= */
