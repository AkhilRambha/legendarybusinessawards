import React, { useEffect, useState, useRef } from "react";
import { X, Users, Target, ChartNoAxesColumnIncreasing, Trophy } from "lucide-react";
import { FeatureCard, SectionHeading } from "../components/common/ContentComponents.jsx";
import { experience } from "../data/siteData.js";

function Card5BottomWave() {
  return (
    <div className="card5-bottom-wave-wrap" aria-hidden="true">
      <svg
        className="card5-bottom-wave"
        viewBox="0 0 500 115"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="c5WaveBack" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A340D" />
            <stop offset="35%" stopColor="#8C6622" />
            <stop offset="70%" stopColor="#5E4314" />
            <stop offset="100%" stopColor="#352408" />
          </linearGradient>
          <linearGradient id="c5WaveFront" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF2A8" />
            <stop offset="25%" stopColor="#E5BE64" />
            <stop offset="55%" stopColor="#C6993E" />
            <stop offset="85%" stopColor="#9C7226" />
            <stop offset="100%" stopColor="#6E4D15" />
          </linearGradient>
          <linearGradient id="c5WaveEdge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#FFF2A8" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#D9BC8A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Back antique gold wave */}
        <path
          d="M0 92 C 90 85, 170 54, 270 78 C 365 100, 445 66, 500 50 L 500 115 L 0 115 Z"
          fill="url(#c5WaveBack)"
          opacity="0.95"
        />

        {/* Front bright champagne-gold wave */}
        <path
          d="M0 98 C 65 96, 125 58, 205 66 C 285 74, 345 88, 425 48 C 460 30, 485 34, 500 40 L 500 115 L 0 115 Z"
          fill="url(#c5WaveFront)"
        />

        {/* Top glowing specular highlight stroke */}
        <path
          d="M0 98 C 65 96, 125 58, 205 66 C 285 74, 345 88, 425 48 C 460 30, 485 34, 500 40"
          stroke="url(#c5WaveEdge)"
          strokeWidth="2.5"
          fill="none"
        />
      </svg>
    </div>
  );
}

function PeopleBehindTheLegacy() {
  const [activeCard, setActiveCard] = useState(null); // null, 1, or 2
  const sectionRef = useRef(null);

  // Close card when user clicks outside the section
  useEffect(() => {
    function handleClickOutside(event) {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setActiveCard(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const toggleCard = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="about-people-section wrap" ref={sectionRef}>
      {/* 2. ABOUT SECTION HEADING */}
      <div className="about-people-header">
        <div className="about-people-eyebrow">
          <span>✦</span> THE FOUNDING PILLARS <span>✦</span>
        </div>
        <h2 className="about-people-title">
          The People Behind <span className="gold-highlight">the Legacy</span>
        </h2>
        <p className="about-people-subtitle">
          A journey of vision, media, expertise and leadership
        </p>
        <div className="about-heading-divider" aria-hidden="true">
          <span />
          <i>✦</i>
          <span />
        </div>
      </div>

      {/* PROFILES CONTAINER */}
      <div className="about-people-container">
        {/* ROW 1: MR. PINNAPUREDDY SURESH REDDY */}
        <div
          className={`about-profile-row ${activeCard === 1 ? "card-open" : ""}`}
          onMouseEnter={() => setActiveCard(1)}
          onMouseLeave={() => setActiveCard((current) => current === 1 ? null : current)}
        >
          <div
            className="about-avatar-trigger"
            onClick={(e) => {
              e.stopPropagation();
              toggleCard(1);
            }}
            role="button"
            tabIndex={0}
            aria-expanded={activeCard === 1}
            aria-label="Toggle Mr. Pinnapureddy Suresh Reddy Details"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCard(1);
              }
            }}
          >
            <div className={`about-circle-frame ${activeCard === 1 ? "active" : ""}`}>
              <div className="about-circle-rim-bevel" />
              <img
                src="/assets/about/suresh-reddy.jpg"
                alt="Mr. Pinnapureddy Suresh Reddy"
                className="about-circle-img portrait-img"
              />
              <div className="about-circle-badge">
                {activeCard === 1 ? "Close Card ×" : "✦ View Profile ✦"}
              </div>
            </div>

            <div className="about-circle-caption">
              <h3 className="about-circle-name">Mr. Pinnapureddy Suresh Reddy</h3>
              <p className="about-circle-desc">Managing Director of Sindu Advertisers</p>
            </div>
          </div>

          {activeCard === 1 && (
            <div
              className="about-card-container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="card5-outer-frame">
                {/* 5th Design: Metallic Gold Trapezoid Top Tab */}
                <div className="card5-top-tab">
                  <span>MR. PINNAPUREDDY SURESH REDDY</span>
                </div>

                {/* 5th Design: Card Surface with Metallic Gold Rounded Border */}
                <div className="card5-surface">
                  {/* Close Button */}
                  <button
                    className="card5-close-btn"
                    onClick={() => setActiveCard(null)}
                    aria-label="Close card"
                  >
                    <X size={17} />
                  </button>

                  <div className="card5-header">
                    <span className="card5-eyebrow">
                      MANAGING DIRECTOR • SINDU ADVERTISERS
                    </span>
                    <h3 className="card5-title">
                      Mr. Pinnapureddy Suresh Reddy
                    </h3>
                    <p className="card5-subtitle">
                      Managing Director of Sindu Advertisers
                    </p>
                  </div>

                  <div className="card5-divider">
                    <span />
                    <i>✦</i>
                    <span />
                  </div>

                  <div className="card5-body">
                    <p className="card5-lead-p">
                      <strong className="card5-gold">Mr. Pinnapureddy Suresh Reddy</strong> is the Managing Director of <strong className="card5-gold">Sindu Advertisers</strong>, a Hyderabad-based advertising and communications company established in 2017. With extensive experience in the media and advertising industry, he has played a key role in building the company into a provider of integrated branding, advertising, public relations, and promotional services.
                    </p>

                    <div className="card5-text-separator" aria-hidden="true">
                      <span /><i>✧</i><span />
                    </div>

                    <p>
                      His professional journey includes working with leading media organizations in Hyderabad and across India, where he developed strong industry knowledge, valuable media relationships, and expertise in strategic communication.
                    </p>

                    <div className="card5-text-separator" aria-hidden="true">
                      <span /><i>✧</i><span />
                    </div>

                    <p>
                      Under his leadership, <strong className="card5-gold">Sindu Advertisers</strong> delivers a wide range of services, including Public Relations, Print Media Advertising, Digital Marketing, Branding, Promotions, and Event Management, serving businesses across India and selected international markets.
                    </p>

                    <div className="card5-text-separator" aria-hidden="true">
                      <span /><i>✧</i><span />
                    </div>

                    <p>
                      Known for his hands-on leadership and client-focused approach, Mr. Suresh Reddy emphasizes creative thinking, effective media strategies, timely execution, and long-term professional relationships. His vision is to help businesses strengthen their brand identity, expand their market presence, and achieve sustainable growth through impactful communication.
                    </p>
                  </div>

                  {/* 5th Design: Dual-Layer Flowing Golden Wave Ribbon */}
                  <Card5BottomWave />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ROW 2: NARESH GUPTA */}
        <div
          className={`about-profile-row ${activeCard === 2 ? "card-open" : ""}`}
          onMouseEnter={() => setActiveCard(2)}
          onMouseLeave={() => setActiveCard((current) => current === 2 ? null : current)}
        >
          <div
            className="about-avatar-trigger"
            onClick={(e) => {
              e.stopPropagation();
              toggleCard(2);
            }}
            role="button"
            tabIndex={0}
            aria-expanded={activeCard === 2}
            aria-label="Toggle Naresh Gupta Details"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCard(2);
              }
            }}
          >
            <div className={`about-circle-frame ${activeCard === 2 ? "active" : ""}`}>
              <div className="about-circle-rim-bevel" />
              <img
                src="/assets/about/temporary-scenery.jpg"
                alt="Naresh Gupta"
                className="about-circle-img scenery-img"
              />
              <div className="about-circle-badge">
                {activeCard === 2 ? "Close Card ×" : "✦ View Profile ✦"}
              </div>
            </div>

            <div className="about-circle-caption">
              <h3 className="about-circle-name">Naresh</h3>
              <p className="about-circle-desc">
                Media & Public Relations Professional | Advertising & Strategic Media Planning
              </p>
            </div>
          </div>

          {activeCard === 2 && (
            <div
              className="about-card-container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="card5-outer-frame">
                {/* 5th Design: Metallic Gold Trapezoid Top Tab */}
                <div className="card5-top-tab">
                  <span>NARESH GUPTA</span>
                </div>

                {/* 5th Design: Card Surface with Metallic Gold Rounded Border */}
                <div className="card5-surface">
                  {/* Close Button */}
                  <button
                    className="card5-close-btn"
                    onClick={() => setActiveCard(null)}
                    aria-label="Close card"
                  >
                    <X size={17} />
                  </button>

                  <div className="card5-header">
                    <span className="card5-eyebrow">
                      MEDIA & PUBLIC RELATIONS PROFESSIONAL
                    </span>
                    <h3 className="card5-title">
                      Naresh Gupta
                    </h3>
                    <p className="card5-subtitle">
                      Media & Public Relations Professional | Advertising & Strategic Media Planning
                    </p>
                  </div>

                  <div className="card5-divider">
                    <span />
                    <i>✦</i>
                    <span />
                  </div>

                  <div className="card5-body">
                    <p className="card5-lead-p">
                      With over <strong className="card5-gold">16 years of experience in the media industry</strong>, <strong className="card5-gold">Naresh Gupta</strong> brings extensive expertise in advertising, public relations, brand promotion, and strategic media planning. His professional journey includes <strong className="card5-gold">12 years of dedicated experience in public relations</strong>, working across diverse media platforms to support effective communication and brand visibility.
                    </p>

                    <div className="card5-text-separator" aria-hidden="true">
                      <span /><i>✧</i><span />
                    </div>

                    <p>
                      With a strong background in PR agency operations and advertising, he specializes in personal branding, promotional campaigns, advertisement development, and media planning. His expertise spans <strong className="card5-gold">electronic media, print media, digital platforms, and FM radio</strong>, enabling him to develop integrated communication strategies across multiple channels.
                    </p>

                    <div className="card5-text-separator" aria-hidden="true">
                      <span /><i>✧</i><span />
                    </div>

                    <p>
                      Through his industry knowledge and experience, <strong className="card5-gold">Naresh Gupta</strong> continues to contribute to brand communication, media engagement, and promotional initiatives.
                    </p>
                  </div>

                  {/* 5th Design: Dual-Layer Flowing Golden Wave Ribbon */}
                  <Card5BottomWave />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function AboutCeremonyArt() {
  return (
    <div
      className="ceremony-art"
      role="img"
      aria-label="Grand awards ceremony with golden spotlights"
    >
      <div className="ceremony-top-glow" />
      <div className="ceremony-beam ceremony-beam-one" />
      <div className="ceremony-beam ceremony-beam-two" />
      <div className="ceremony-beam ceremony-beam-three" />
      <div className="ceremony-beam ceremony-beam-four" />

      <div className="ceremony-stage">
        <div className="ceremony-stage-arch">
          <div className="ceremony-stage-content">
            <Trophy size={43} strokeWidth={1.3} />
            <span>THE GRAND CELEBRATION</span>
            <strong>LEGENDARY</strong>
            <strong>BUSINESS AWARDS</strong>
            <b>2026</b>
          </div>
        </div>
      </div>

      <div className="ceremony-side-column ceremony-column-left" />
      <div className="ceremony-side-column ceremony-column-right" />
      <div className="ceremony-platform" />
      <div className="ceremony-red-carpet" />

      <div className="ceremony-audience">
        {Array.from({ length: 15 }, (_, index) => (
          <span
            key={index}
            className={`audience-person audience-person-${index % 4}`}
          />
        ))}
      </div>

      <span className="ceremony-spark ceremony-spark-one">✦</span>
      <span className="ceremony-spark ceremony-spark-two">✧</span>
      <span className="ceremony-spark ceremony-spark-three">✦</span>
    </div>
  );
}

export function AboutPage() {
  return (
    <section className="inner-page">
      <div className="wrap">
        <SectionHeading
          eyebrow="THE LEGENDARY PLATFORM"
          title="ABOUT THE AWARDS"
          subtitle="A high-value event. A credible annual platform."
          showLaurels
        />

        <div className="about-feature">
          <AboutCeremonyArt />

          <div className="about-feature-copy">
            <div className="eyebrow">
              A CELEBRATION OF EXCELLENCE
            </div>

            <h2>
              WHERE EXTRAORDINARY
              <br />
              ACHIEVEMENTS SHINE
            </h2>

            <p>
              Legendary Business Awards (LBA) is an annual
              recognition platform celebrating outstanding
              entrepreneurs, business leaders and professionals
              creating meaningful impact in business and society.
            </p>

            <p>
              The event brings together accomplished individuals,
              emerging leaders and influential voices in a premium
              environment of recognition and networking.
            </p>
          </div>
        </div>

        {/* THE PEOPLE BEHIND THE LEGACY */}
        <PeopleBehindTheLegacy />


        {/* ABOUT PAGE - VIDEO STORY SECTION */}
        <section className="about-video-story wrap">
          <div className="about-video-heading">
            <span className="about-video-eyebrow">
              OUR JOURNEY
            </span>

            <h2>A Journey of Vision &amp; Excellence</h2>

            <p>
              Discover the vision, dedication and journey behind our
              commitment to excellence.
            </p>
          </div>

          <div className="about-video-frame">
            <video
              className="about-story-video"
              poster="/assets/Images/charminar-thumbnail.png"
              controls
              playsInline
              preload="metadata"
            >
              <source
                src="/videos/company-intro.mp4"
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>
          </div>
        </section>



        <div className="world-banner">
          HYDERABAD <span>✦</span> INDIA
          <span>✦</span> THE WORLD
        </div>

        <div className="feature-grid">
          <FeatureCard
            title="Recognize Excellence"
            description="Honoring remarkable achievements and meaningful contributions."
            Icon={Target}
          />

          <FeatureCard
            title="Inspire Leadership"
            description="Celebrating visionary leaders and inspiring changemakers."
            Icon={Users}
          />

          <FeatureCard
            title="Build Impact"
            description="Highlighting lasting contributions to business and society."
            Icon={ChartNoAxesColumnIncreasing}
          />
        </div>

        <SectionHeading
          eyebrow="AN UNFORGETTABLE EVENING"
          title="THE EVENT EXPERIENCE"
          subtitle="A grand celebration of leadership, innovation and impact."
        />


        <div className="feature-grid five">
          {experience.map(([title, Icon]) => (
            <FeatureCard
              key={title}
              title={title}
              Icon={Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============= FLOATING INPUT ============= */
