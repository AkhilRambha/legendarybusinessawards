import React, { useState } from "react";
import { Globe2 } from "lucide-react";
import { Laurel } from "../components/common/Laurel.jsx";

const mediaPartners = [
  {
    name: "BIG TV",
    label: "— Satellite News Television —",
    badge: "📺 TV Broadcast Partner",
    logo: "/assets/media-partners/big-tv.png",
    description: "Leading Telugu 24/7 news channel with millions of household viewers across Telangana & Andhra Pradesh."
  },
  {
    name: "iDREAM MEDIA",
    label: "— Digital Entertainment Network —",
    badge: "▶ Digital Video Partner",
    logo: "/assets/media-partners/idream.png",
    description: "India's premier digital media power brand with multi-million YouTube subscribers and global Telugu diaspora viewership."
  },
  {
    name: "AADAB HYDERABAD",
    label: "ఆదాబ్ హైదరాబాద్ · Daily Newspaper",
    badge: "📰 Print Media Partner",
    logo: "/assets/media-partners/aadab.png",
    description: "Esteemed Telugu daily newspaper offering high-credibility print coverage and prominent business editorial columns."
  },
  {
    name: "92.7 BIG FM",
    label: "— India's Premier FM Network —",
    badge: "📻 Radio Partner",
    logo: "/assets/media-partners/big-fm.png",
    description: "Reaching millions of listeners daily with prime-time on-air contests, RJ promotions, and commercial airtime buzz."
  }
];

function MediaBottomRibbon() {
  return (
    <svg className="media-bottom-ribbon" viewBox="0 0 260 50" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 50 Q 80 20, 160 38 T 260 12 L 260 50 Z" fill="url(#mediaRibbonGlow)" />
      <path d="M0 45 Q 85 18, 170 34 T 260 14" stroke="url(#mediaRibbonGold)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M40 50 Q 120 32, 210 38 T 260 25" stroke="url(#mediaGoldGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

function MediaTopCurves() {
  return (
    <div className="media-top-curves" aria-hidden="true">
      <svg className="media-curve-svg left" viewBox="0 0 400 240" fill="none">
        <path d="M0 0 Q 120 80, 220 50 T 400 140" stroke="url(#mediaRibbonGold)" strokeWidth="2.2" opacity="0.75" />
        <path d="M0 40 Q 100 120, 240 80 T 360 200" stroke="url(#mediaGoldGrad)" strokeWidth="1.6" opacity="0.55" />
        <path d="M0 0 Q 140 100, 260 60 L 260 0 Z" fill="url(#mediaRibbonGlow)" opacity="0.25" />
      </svg>
      <svg className="media-curve-svg right" viewBox="0 0 400 240" fill="none">
        <path d="M400 0 Q 280 80, 180 50 T 0 140" stroke="url(#mediaRibbonGold)" strokeWidth="2.2" opacity="0.75" />
        <path d="M400 40 Q 300 120, 160 80 T 40 200" stroke="url(#mediaGoldGrad)" strokeWidth="1.6" opacity="0.55" />
        <path d="M400 0 Q 260 100, 140 60 L 140 0 Z" fill="url(#mediaRibbonGlow)" opacity="0.25" />
      </svg>
    </div>
  );
}

function MediaParticles() {
  return (
    <div className="media-particles" aria-hidden="true">
      <span className="media-dot mp1" />
      <span className="media-dot mp2" />
      <span className="media-dot mp3" />
      <span className="media-dot mp4" />
      <span className="media-dot mp5" />
      <span className="media-dot mp6" />
    </div>
  );
}

function MediaCard({ partner }) {
  const { name, label, badge, logo, description } = partner;
  return (
    <article className="media-card">
      {/* Specular hairline top reflection */}
      <div className="media-card-top-light" aria-hidden="true" />

      {/* Specular hairline bottom reflection */}
      <div className="media-card-bottom-light" aria-hidden="true" />

      {/* Glossy diagonal sheen overlay */}
      <div className="media-card-gloss" aria-hidden="true" />

      {/* 1. Original Logo inside rectangular dark display area */}
      <div className="media-logo-display">
        <img
          src={logo}
          alt={name}
          className="media-logo-img"
          loading="lazy"
        />
      </div>

      {/* 2. Partner Name in large elegant white serif typography */}
      <h3 className="media-card-name">{name}</h3>

      {/* 3. Subtitle / Category Label in bright gold */}
      <div className="media-card-category">{label}</div>

      {/* 4. Partner description in soft silver-white */}
      <p className="media-card-desc">{description}</p>

      {/* 5. Partner-type badge at bottom */}
      <div className="media-badge-wrap">
        <span className="media-partner-badge">{badge}</span>
      </div>

      {/* Elegant golden curved bottom wave decoration */}
      <MediaBottomRibbon />
    </article>
  );
}

export function MediaPage() {
  const [selectedMediaPartner, setSelectedMediaPartner] = useState(null);
  const activeMediaPartner = selectedMediaPartner === null ? null : mediaPartners[selectedMediaPartner];
  return (
    <section className="inner-page media-page">
      {/* SVG Gradient Defs for Media Page */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="mediaGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D5A40" />
            <stop offset="35%" stopColor="#C5A46D" />
            <stop offset="75%" stopColor="#D9BC8A" />
            <stop offset="100%" stopColor="#F5F1EA" />
          </linearGradient>
          <linearGradient id="mediaRibbonGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D5A40" stopOpacity="0" />
            <stop offset="40%" stopColor="#C5A46D" stopOpacity="0.55" />
            <stop offset="85%" stopColor="#D9BC8A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F5F1EA" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="mediaRibbonGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D9BC8A" stopOpacity="0" />
            <stop offset="65%" stopColor="#D9BC8A" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#C5A46D" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decorative top corner curves & ambient particles */}
      <MediaTopCurves />
      <MediaParticles />

      <div className="wrap">
        <div className="media-heading-wrap">
          <Laurel />
          <div className="media-heading-center">
            <div className="eyebrow">AMPLIFYING THE CELEBRATION</div>
            <h2 className="media-main-title">OUR MEDIA PARTNERS</h2>
            <div className="media-title-divider" aria-hidden="true">
              <span />✦<span />
            </div>
            <p className="media-subtitle">
              Media associations supporting wider visibility and reach.
            </p>
          </div>
          <Laurel flip />
        </div>

        {/* Clickable images move continuously from right to left. */}
        <div className="lba-media-marquee" aria-label="Media partner logos">
          <div className="lba-media-track">
            {[...mediaPartners, ...mediaPartners].map((partner, index) => {
              const partnerIndex = index % mediaPartners.length;
              return (
                <button
                  key={`${partner.name}-${index}`}
                  type="button"
                  className={`lba-media-logo-item${selectedMediaPartner === partnerIndex ? " selected" : ""}`}
                  onClick={() => setSelectedMediaPartner(partnerIndex)}
                  aria-label={`Show details for ${partner.name}`}
                  aria-pressed={selectedMediaPartner === partnerIndex}
                  tabIndex={index >= mediaPartners.length ? -1 : 0}
                >
                  <img src={partner.logo} alt={partner.name} draggable="false" />
                </button>
              );
            })}
          </div>
        </div>
        <p className="lba-media-hint">✦ Click a moving channel logo to view its details ✦</p>
        {activeMediaPartner && (
          <article className="lba-media-detail-card" key={activeMediaPartner.name}>
            <button type="button" className="lba-media-close" onClick={() => setSelectedMediaPartner(null)} aria-label="Close media partner details">×</button>
            <div className="lba-media-detail-content">
              <div className="lba-media-detail-logo">
                <img src={activeMediaPartner.logo} alt={activeMediaPartner.name} />
              </div>
              <div className="lba-media-detail-info">
                <span className="lba-media-detail-label">OFFICIAL MEDIA PARTNER</span>
                <h3>{activeMediaPartner.name}</h3>
                <div className="lba-media-detail-subtitle">{activeMediaPartner.label.replace(/^—\s*|\s*—$/g, "")}</div>
                <div className="lba-media-detail-rule" />
                <p>{activeMediaPartner.description}</p>
                <span className="lba-media-detail-category">{activeMediaPartner.badge}</span>
              </div>
            </div>
          </article>
        )}

        <div className="media-footer">
          <Globe2 size={45} />
          <h2>WIDER REACH. GREATER IMPACT.</h2>
          <p>
            Building visibility for exceptional achievements
            through trusted media associations.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */
