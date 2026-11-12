import React, { useState } from "react";
import { ArrowRight, CalendarDays, Building2, Camera, Video, Monitor, CheckCircle2, Award, Crown, Newspaper, Share2, UsersRound } from "lucide-react";
import { SectionHeading } from "../components/common/ContentComponents.jsx";

const sponsorshipCategories = [
  {
    number: "01",
    title: "Stage & Venue Branding",
    Icon: Building2,
    description: "Prime branding across the main ceremony stage, backdrop displays, entrance archways, and reception areas."
  },
  {
    number: "02",
    title: "Digital & LED Exposure",
    Icon: Monitor,
    description: "Continuous high-resolution logo rotations on massive LED displays and digital event screens throughout the evening."
  },
  {
    number: "03",
    title: "Social Media Exposure",
    Icon: Share2,
    description: "Dedicated promotional features, partner announcements, and high-engagement spotlight across social channels."
  },
  {
    number: "04",
    title: "Media & Publicity",
    Icon: Newspaper,
    description: "Comprehensive coverage across print, television, digital publications, and official event press releases."
  },
  {
    number: "05",
    title: "VIP Access & Networking",
    Icon: UsersRound,
    description: "Exclusive gala access passes, reserved executive seating, and high-level networking with corporate leaders."
  },
  {
    number: "06",
    title: "Live Streaming Visibility",
    Icon: Video,
    description: "Prominent digital stream logo placement and broadcast mentions reaching diaspora audiences worldwide."
  },
  {
    number: "07",
    title: "Award Category Association",
    Icon: Award,
    description: "Exclusive co-branding and presentation rights for an official Legendary Business Awards category."
  },
  {
    number: "08",
    title: "Photography & Video",
    Icon: Camera,
    description: "Branded step-and-repeat backdrops, high-definition ceremony photo coverage, and official highlights inclusion."
  }
];

function SponsorshipCornerWaves() {
  return (
    <div className="sponsorship-corner-ribbons" aria-hidden="true">
      <svg className="sponsorship-ribbon-svg left" viewBox="0 0 360 220" fill="none">
        <path d="M0 220 Q 90 150, 180 180 T 360 110" stroke="url(#sponsRibbonGold)" strokeWidth="2.2" opacity="0.8" />
        <path d="M0 180 Q 80 120, 200 150 T 340 70" stroke="url(#sponsGoldGrad)" strokeWidth="1.6" opacity="0.6" />
        <path d="M0 140 Q 120 70, 250 120 L 250 220 L 0 220 Z" fill="url(#sponsRibbonGlow)" opacity="0.25" />
      </svg>
      <svg className="sponsorship-ribbon-svg right" viewBox="0 0 360 220" fill="none">
        <path d="M360 220 Q 270 150, 180 180 T 0 110" stroke="url(#sponsRibbonGold)" strokeWidth="2.2" opacity="0.8" />
        <path d="M360 180 Q 280 120, 160 150 T 20 70" stroke="url(#sponsGoldGrad)" strokeWidth="1.6" opacity="0.6" />
        <path d="M360 140 Q 240 70, 110 120 L 110 220 L 360 220 Z" fill="url(#sponsRibbonGlow)" opacity="0.25" />
      </svg>
    </div>
  );
}

function SponsorshipParticles() {
  return (
    <div className="sponsorship-particles" aria-hidden="true">
      <span className="spons-sparkle sp1" />
      <span className="spons-sparkle sp2" />
      <span className="spons-sparkle sp3" />
      <span className="spons-sparkle sp4" />
      <span className="spons-sparkle sp5" />
      <span className="spons-sparkle sp6" />
    </div>
  );
}

function SponsorshipOrbit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = sponsorshipCategories[activeIndex];
  const ActiveIcon = active.Icon;

  return (
    <div className="lba-sponsor-showcase">
      <div className="lba-sponsor-orbit-side">
        <div className="lba-sponsor-orbit" aria-label="Rotating sponsorship opportunities">
          <div className="lba-sponsor-orbit-ring" aria-hidden="true" />
          <div className="lba-sponsor-orbit-center">
            <span className="lba-orbit-center-star">✦</span>
            <span className="lba-orbit-center-small">LEGENDARY BUSINESS AWARDS</span>
            <strong>OUR</strong>
            <strong>SPONSORSHIP</strong>
            <strong>OPPORTUNITIES</strong>
            <span className="lba-orbit-center-year">2026</span>
          </div>
          <div className="lba-sponsor-rotating-layer">
            {sponsorshipCategories.map((item, index) => {
              const Icon = item.Icon;
              const angle = (index * 360) / sponsorshipCategories.length - 90;
              const radians = angle * (Math.PI / 180);
              const x = 50 + 42 * Math.cos(radians);
              const y = 50 + 42 * Math.sin(radians);
              return (
                <div
                  key={item.number}
                  className="lba-sponsor-orbit-position"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="lba-sponsor-icon-counter">
                    <button
                      type="button"
                      className={`lba-sponsor-orbit-item ${activeIndex === index ? "active" : ""}`}
                      onClick={() => setActiveIndex(index)}
                      title={item.title}
                      aria-label={`View ${item.title}`}
                      aria-pressed={activeIndex === index}
                    >
                      <Icon size={28} strokeWidth={2.3} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="lba-sponsor-hint">✦ Click any rotating icon to explore sponsorship benefits ✦</p>
      </div>
      <div className="lba-sponsor-detail">
        <div key={active.number} className="lba-sponsor-detail-content" aria-live="polite" aria-atomic="true">
          <div className="lba-sponsor-detail-top"><span>LEGENDARY BUSINESS AWARDS</span><span>2026</span></div>
          <div className="lba-sponsor-detail-icon"><ActiveIcon size={50} strokeWidth={1.7} /></div>
          <div className="lba-sponsor-detail-label">SPONSORSHIP BENEFIT {active.number}</div>
          <h2>{active.title}</h2>
          <div className="lba-sponsor-detail-divider"><span /><span>✦</span><span /></div>
          <p>{active.description}</p>
          <div className="lba-sponsor-detail-footer"><span>ONE NIGHT. ONE STAGE. LASTING LEGACY.</span><span>✦</span></div>
        </div>
      </div>
    </div>
  );
}

export function SponsorshipPage({ go }) {
  const journey = [
    {
      number: "01",
      title: "Before the Event",
      Icon: CalendarDays,
      text: "Event announcements, digital promotions, social media campaigns and pre-event brand visibility."
    },
    {
      number: "02",
      title: "During the Event",
      Icon: Building2,
      text: "Stage branding, LED exposure, audience engagement, VIP access and business networking."
    },
    {
      number: "03",
      title: "After the Event",
      Icon: Video,
      text: "Event photography, video highlights, media coverage, digital recall and continued brand association."
    }
  ];

  return (
    <section className="inner-page sponsorship-page">
      {/* SVG Gradient Defs for Sponsorship Section */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="sponsGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D5A40" />
            <stop offset="35%" stopColor="#C5A46D" />
            <stop offset="75%" stopColor="#D9BC8A" />
            <stop offset="100%" stopColor="#F5F1EA" />
          </linearGradient>
          <linearGradient id="sponsRibbonGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D5A40" stopOpacity="0" />
            <stop offset="40%" stopColor="#C5A46D" stopOpacity="0.55" />
            <stop offset="85%" stopColor="#D9BC8A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F5F1EA" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="sponsRibbonGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D9BC8A" stopOpacity="0" />
            <stop offset="65%" stopColor="#D9BC8A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C5A46D" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decorative flowing gold waves and particles */}
      <SponsorshipCornerWaves />
      <SponsorshipParticles />

      <div className="wrap">
        <div className="sponsorship-header">
          <SectionHeading
            eyebrow="PREMIUM BRAND ASSOCIATION"
            title="SPONSORSHIP OPPORTUNITIES"
            showLaurels
            subtitle="Position your brand alongside a prestigious annual recognition platform."
          />
        </div>

        {/* Interactive rotating sponsorship icons and detail panel */}
        <SponsorshipOrbit />

        <div className="partner-panel">
          <div className="partner-panel-icon">
            <Crown size={44} />
          </div>

          <div className="eyebrow">BECOME A PARTNER</div>
          <h2>FOUNDING YEAR PARTNERSHIP</h2>

          <p>
            Join the inaugural edition of Legendary Business
            Awards 2026 and build a meaningful long-term
            association with this annual platform.
          </p>

          <div className="benefit-list">
            {[
              "Early and prominent brand visibility",
              "Strategic access to business leaders",
              "Media and digital promotion",
              "Long-term annual brand association"
            ].map(benefit => (
              <div key={benefit}>
                <CheckCircle2 size={19} />
                {benefit}
              </div>
            ))}
          </div>

          <button
            className="gold-btn sponsorship-btn"
            onClick={() => go("Contact")}
          >
            Sponsorship Enquiry
            <ArrowRight size={18} />
          </button>
        </div>

        <SectionHeading
          eyebrow="MAXIMUM BRAND VISIBILITY"
          title="SPONSOR VISIBILITY JOURNEY"
          subtitle="Your brand's presence before, during and after the event."
        />

        <div className="journey-grid">
          {journey.map(({ number, title, Icon, text }) => (
            <article
              className="journey-card"
              key={number}
            >
              <span className="journey-number">
                {number}
              </span>

              <Icon size={36} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= MEDIA PARTNERS ================= */
