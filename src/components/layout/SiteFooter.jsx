
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  CalendarDays,
  MapPin,
  Clock3,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import { tabs } from "../../data/siteData.js";
import "./SiteFooter.css";

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37.7) % 100}%`,
  top: `${(i * 23.3) % 100}%`,
  delay: `${(i * 0.61) % 9}s`,
  duration: `${5 + (i % 6)}s`,
  size: `${2 + (i % 3)}px`,
}));

export function SiteFooter({ go, onOpenEnquiry }) {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.75, ease: "easeOut" },
  };

  return (
    <footer className="lba-footer">
      <div className="lba-footer-particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="lba-footer-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="lba-footer-glow" aria-hidden="true" />

      <div className="lba-footer-content">
        <motion.div className="lba-footer-intro" {...reveal}>
          <span className="lba-footer-eyebrow">
            LEGENDARY BUSINESS AWARDS 2026
          </span>

          <h2>Where Legends Are Celebrated.</h2>

          <p>One Night. One Stage. Lasting Legacy.</p>

          <div className="lba-footer-event-pill">
            <span>
              <CalendarDays size={16} />
              19 DECEMBER 2026
            </span>
            <span className="lba-footer-event-separator" aria-hidden="true" />
            <span>
              <MapPin size={17} />
              HYDERABAD
            </span>
          </div>
        </motion.div>

        <div className="lba-footer-divider" />

        <div className="lba-footer-grid">
          <motion.div className="lba-footer-brand" {...reveal}>
            <img
              src="/assets/Images/lba-2026-logo.png"
              alt="Legendary Business Awards 2026"
              className="lba-footer-logo"
            />

            <span className="lba-footer-brand-caption">
              LEGENDARY BUSINESS AWARDS
            </span>

            <p className="lba-footer-brand-tagline">
              Celebrating Excellence. Creating Legacy.
            </p>
          </motion.div>

          <motion.div className="lba-footer-column" {...reveal}>
            <h3>Explore</h3>

            <nav aria-label="Footer navigation">
              {tabs.map((tab) => (
                <button
                  type="button"
                  key={tab}
                  className="lba-footer-nav-link"
                  onClick={() => go(tab)}
                >
                  <span className="lba-footer-chevron" aria-hidden="true">›</span>
                  <span>{tab}</span>
                </button>
              ))}
            </nav>
          </motion.div>

          <motion.div className="lba-footer-column" {...reveal}>
            <h3>Event Details</h3>

            <div className="lba-footer-info">
              <CalendarDays size={19} />
              <span>19 December 2026</span>
            </div>

            <div className="lba-footer-info">
              <MapPin size={19} />
              <span>
                Hotel Daspalla
                <small>Hyderabad, India</small>
              </span>
            </div>

            <div className="lba-footer-info">
              <Clock3 size={19} />
              <span>06:00 PM Onwards</span>
            </div>
          </motion.div>

          <motion.div className="lba-footer-column" {...reveal}>
            <h3>Get In Touch</h3>

            <button
              type="button"
              className="lba-footer-contact-link"
              onClick={onOpenEnquiry}
            >
              <Mail size={19} />
              Send an Enquiry
            </button>

            <a
              className="lba-footer-contact-link"
              href="tel:+919441083075"
            >
              <Phone size={19} />
              +91 94410 83075
            </a>

            <button
              type="button"
              className="lba-footer-secondary-btn"
              onClick={onOpenEnquiry}
            >
              Enquiry Form
              <ArrowRight size={17} />
            </button>
          </motion.div>
        </div>

        <div className="lba-footer-bottom">
          <span>
            © 2026 Legendary Business Awards (LBA).
            All Rights Reserved.
          </span>

          <span>Celebrating Excellence. Creating Legacy.</span>
        </div>
      </div>
    </footer>
  );
}
