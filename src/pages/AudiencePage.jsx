import React, { useState } from "react";
import { ArrowRight, Users, Globe2, Handshake, Building2, BriefcaseBusiness, Award, Sprout } from "lucide-react";
import { SectionHeading } from "../components/common/ContentComponents.jsx";

const audienceCategories = [
  {
    number: "01",
    title: "Awardees",
    Icon: Award,
    description: "Distinguished entrepreneurs, visionaries, and exceptional contributors recognized for meaningful impact in business and society."
  },
  {
    number: "02",
    title: "Entrepreneurs",
    Icon: BriefcaseBusiness,
    description: "Innovators and enterprise builders driving commercial growth, new ventures, and dynamic market transformation."
  },
  {
    number: "03",
    title: "Executives",
    Icon: Users,
    description: "Senior corporate leaders, managing directors, and decision-makers steering enterprise strategy and industry benchmarks."
  },
  {
    number: "04",
    title: "Business Owners",
    Icon: Building2,
    description: "Established business proprietors, family enterprise leaders, and industry stalwarts with enduring commercial legacies."
  },
  {
    number: "05",
    title: "Professionals",
    Icon: BriefcaseBusiness,
    description: "Accomplished specialists, corporate advisors, and high-impact domain practitioners across diverse sectors."
  },
  {
    number: "06",
    title: "Community Leaders",
    Icon: Handshake,
    description: "Influential changemakers, social innovators, and respected advocates shaping regional and civic development."
  },
  {
    number: "07",
    title: "Next-Generation Founders",
    Icon: Sprout,
    description: "Emerging innovators, startup pioneers, and forward-thinking founders creating the future of commerce and technology."
  },
  {
    number: "08",
    title: "Global Telugu Diaspora",
    Icon: Globe2,
    description: "Distinguished global Telugu leaders, NRI entrepreneurs, and international delegates uniting for a night of celebration."
  }
];

function WhoBottomRibbon() {
  return (
    <svg className="who-bottom-ribbon" viewBox="0 0 240 45" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M75 45 Q 165 30, 240 8 L 240 45 Z" fill="url(#whoRibbonGlow)" />
      <path d="M55 45 Q 150 28, 240 12" stroke="url(#whoRibbonGold)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M115 45 Q 185 36, 240 22" stroke="url(#whoGoldGrad)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function WhoAttendsAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = index => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    // Return to default Awardees card (0) when mouse leaves accordion section
    setActiveIndex(0);
  };

  return (
    <div className="who-accordion-wrapper" onMouseLeave={handleMouseLeave}>
      {/* SVG Gradient Defs for Who Attends Accordion */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="whoGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D5A40" />
            <stop offset="35%" stopColor="#C5A46D" />
            <stop offset="75%" stopColor="#D9BC8A" />
            <stop offset="100%" stopColor="#F5F1EA" />
          </linearGradient>
          <linearGradient id="whoRibbonGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D5A40" stopOpacity="0" />
            <stop offset="40%" stopColor="#C5A46D" stopOpacity="0.5" />
            <stop offset="85%" stopColor="#D9BC8A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F5F1EA" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="whoRibbonGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D9BC8A" stopOpacity="0" />
            <stop offset="65%" stopColor="#D9BC8A" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#C5A46D" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className="who-accordion"
        role="region"
        aria-label="Who Attends Categories"
      >
        {audienceCategories.map((item, index) => {
          const isActive = activeIndex === index;
          const Icon = item.Icon;

          return (
            <div
              key={item.title}
              className={`who-card ${isActive ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => setActiveIndex(index)}
              tabIndex={0}
              onFocus={() => handleMouseEnter(index)}
              role="button"
              aria-expanded={isActive}
              aria-label={`${item.number} ${item.title}`}
            >
              {/* Glossy Reflection Overlay */}
              <div className="who-card-gloss" aria-hidden="true" />

              {/* EXPANDED CONTENT (Horizontal layout) */}
              <div className="who-expanded-content" aria-hidden={!isActive}>
                <div className="who-expanded-left">
                  <div className="who-expanded-icon-disc">
                    <div className="who-expanded-icon-inner">
                      <Icon size={48} strokeWidth={1.9} />
                    </div>
                  </div>
                </div>

                <div className="who-expanded-right">
                  <div className="who-expanded-badge-row">
                    <span className="who-badge-pill">{item.number}</span>
                    <span className="who-badge-text">CATEGORY RECOGNITION</span>
                  </div>
                  <h3 className="who-expanded-title">{item.title}</h3>
                  <div className="who-expanded-divider" aria-hidden="true">
                    <span />✦<span />
                  </div>
                  <p className="who-expanded-desc">{item.description}</p>
                </div>

                <WhoBottomRibbon />
              </div>

              {/* COMPACT CONTENT (Narrow vertical panel with horizontal text) */}
              <div className="who-compact-content" aria-hidden={isActive}>
                <span className="who-compact-badge">{item.number}</span>

                <div className="who-compact-icon-disc">
                  <div className="who-compact-icon-inner">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                </div>

                <h4 className="who-compact-title">{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AudiencePage({ go }) {
  return (
    <section className="inner-page">
      <div className="wrap">
        <SectionHeading
          eyebrow="THE LBA COMMUNITY"
          title="WHO WILL ATTEND?"
          showLaurels
          subtitle="An influential gathering of business and community leaders."
        />

        <div className="audience-intro">
          <Users size={35} />
          <p>
            Bringing together accomplished professionals,
            entrepreneurs, founders and influential leaders
            from India and the global Telugu community.
          </p>
        </div>

        <WhoAttendsAccordion />

        <div className="network-banner">
          <div>
            <h2>CONNECT. CELEBRATE. INSPIRE.</h2>
            <p>
              An evening designed for meaningful connections
              and lasting professional relationships.
            </p>

            <button
              className="gold-btn"
              onClick={() => go("Contact")}
            >
              Contact Us <ArrowRight size={18} />
            </button>
          </div>

          <Handshake size={90} strokeWidth={1.2} />
        </div>
      </div>
    </section>
  );
}

/* ================= SPONSORSHIP ================= */
