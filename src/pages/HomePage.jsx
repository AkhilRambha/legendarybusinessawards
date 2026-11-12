import React, { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, MapPin, Clock3, Users, Star, Globe2, Gem, Mail, Award } from "lucide-react";
import { RegistrationForm } from "../components/forms/RegistrationForm.jsx";

function AwardsCountdown() {
  const eventDate = new Date("2026-12-19T18:00:00+05:30").getTime();
  const [remaining, setRemaining] = useState(() => Math.max(0, eventDate - Date.now()));

  useEffect(() => {
    const updateCountdown = () => {
      setRemaining(Math.max(0, eventDate - Date.now()));
    };

    updateCountdown();
    const timerId = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timerId);
  }, [eventDate]);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const units = [
    [days, "DAYS"],
    [hours, "HOURS"],
    [minutes, "MINUTES"],
    [seconds, "SECONDS"]
  ];

  return (
    <div className="awards-countdown" aria-label="Live countdown to the awards ceremony">
      <div className="awards-countdown-units">
        {units.map(([value, label]) => (
          <div className="awards-countdown-unit" key={label}>
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeStageArt() {
  return (
    <div className="event-art">
      <div className="stage-beams" />
      <div className="stage-arch" />
      <div className="stage-spot stage-spot-left" />
      <div className="stage-spot stage-spot-right" />
      <div className="stage-center">
        <img
          src="/assets/Images/stageArt.png"
          alt="Legendary Business Awards 2026"
          className="lba-emblem stage-center-logo"
        />
      </div>
      <div className="stage-floor" />
    </div>
  );
}

/* ============= ABOUT SECTION: THE PEOPLE BEHIND THE LEGACY ============= */

export function HomePage({ go, onOpenRegistration, onOpenEnquiry }) {
  const [internalRegistration, setInternalRegistration] = useState(false);
  const handleOpenRegistration = onOpenRegistration || (() => setInternalRegistration(true));

  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"></div>

          <div className="hero-heading hero-heading-logo-only">
            <img
              src="/assets/Images/lba-2026-logo.png"
              alt="Legendary Business Awards 2026"
              className="lba-emblem hero-emblem"
            />
          </div>

          <p className="strap">
            CELEBRATING EXTRAORDINARY CONTRIBUTIONS
          </p>

          <p className="motto">
            One Night. One Stage. Lasting Legacy.
          </p>

          <div className="event-meta">
            <span>
              <CalendarDays />
              <span>19th December<br />2026</span>
            </span>

            <span>
              <MapPin />
              <span>Hotel Daspalla<br />Hyderabad</span>
            </span>

            <span>
              <Clock3 />
              <span>6:00 PM<br />Onwards</span>
            </span>
          </div>

          <div className="hero-cta">
            <div className="hero-cta-row">
              <button
                className="hero-register-btn"
                onClick={handleOpenRegistration}
              >
                <Award size={20} /> Awards Registration
              </button>

              <button
                className="hero-enquiry-btn"
                onClick={onOpenEnquiry}
              >
                <Mail size={20} /> For More Enquiries
              </button>
            </div>

            <button
              className="hero-know-more-btn"
              onClick={() => go("About")}
            >
              Know More <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="trophy-scene">
          <div className="awards-countdown-backdrop" aria-hidden="true" />
          <img
            src="/assets/Images/golden-trophy.jpeg"
            alt="Golden trophy for the Legendary Business Awards"
            className="hero-trophy-image"
          />
          <AwardsCountdown />
        </div>
      </section>

      {!onOpenRegistration && internalRegistration && (
        <RegistrationForm onClose={() => setInternalRegistration(false)} />
      )}

      <section className="stats wrap">
        {[
          ["300+", "Invited Guests", Users],
          ["15", "Recognition Fields", Star],
          ["Annual", "Brand Platform", Globe2],
          ["Premium", "Recognition", Gem]
        ].map(([value, label, Icon]) => (
          <div className="stat" key={label}>
            <Icon />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* BEYOND BUSINESS, BUILDING CONNECTIONS - VIDEO SECTION */}
      <section className="home-story-section wrap">
        <div className="home-story-heading">
          <span className="home-story-eyebrow">OUR STORY IN MOTION</span>
          <h2>
            Beyond Business, <span>Building Connections</span>
          </h2>
          <p>
            A shared journey of vision, media expertise and meaningful impact.
          </p>
        </div>

        <div
          className="home-story-content"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 460px) minmax(0, 1fr)",
            alignItems: "center",
            gap: "34px",
          }}
        >
          <div
            className="home-story-video-frame"
            style={{
              width: "100%",
              maxWidth: "460px",
              height: "auto",
              aspectRatio: "16 / 9",
              overflow: "hidden",
              justifySelf: "center",
            }}
          >
            <video
              className="home-story-video"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                aspectRatio: "16 / 9",
                objectFit: "contain",
                objectPosition: "center",
                backgroundColor: "#141414",
              }}
              poster="/assets/Images/charminar-thumbnail.png"
              controls
              playsInline
              preload="metadata"
              aria-label="Sindu Advertisers and PR Agencies company introduction"
            >
              <source src="/videos/company-intro.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>

          <div className="home-story-copy">
            <span className="home-story-logo-label">OUR COMPANIES</span>


            <img
              className="home-story-company-logos"
              src="/assets/Images/sindu-pr-agencies-logos.png"
              alt="Sindu Advertisers and PR Agencies logos"
            />

            <div className="home-story-divider" aria-hidden="true">
              <span></span>✦<span></span>
            </div>

            <p>
              Discover the story behind our companies, their journey,
              people, work culture and shared vision for impactful
              brand communication.
            </p>

            <div className="home-story-caption">
              TWO COMPANIES. ONE SHARED VISION.
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview wrap">
        <HomeStageArt />

        <div className="about-copy">
          <div className="eyebrow">A CELEBRATION OF EXCELLENCE</div>
          <h2>WHERE EXTRAORDINARY ACHIEVEMENTS SHINE</h2>

          <p>
            Legendary Business Awards (LBA) is an annual recognition platform
            celebrating outstanding entrepreneurs, business leaders and professionals
            creating meaningful impact in business and society.
          </p>

          <p>
            The event brings together accomplished individuals, emerging leaders
            and influential voices in a premium environment of recognition and networking.
          </p>

          <button
            className="outline-btn"
            onClick={() => go("About")}
          >
            Discover the Awards <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="home-cta wrap">
        <div className="eyebrow">BE PART OF THE LEGACY</div>
        <h2>CELEBRATE EXCELLENCE WITH US</h2>

        <p>
          Connect with inspiring leaders and be part of
          Legendary Business Awards 2026.
        </p>

        <button
          className="gold-btn"
          onClick={() => go("Contact")}
        >
          Get in Touch <ArrowRight size={18} />
        </button>
      </section>
    </>
  );
}

/* ================= ABOUT ================= */
