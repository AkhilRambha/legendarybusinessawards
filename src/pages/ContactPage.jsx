import React, { useState } from "react";
import { CalendarDays, MapPin, Clock3, Globe2, Mail, Phone, Building2, Send, ExternalLink } from "lucide-react";
import { Laurel } from "../components/common/Laurel.jsx";

function ContactCardWave() {
  return (
    <svg className="contact-card-wave" viewBox="0 0 320 50" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 50 Q 95 18, 190 38 T 320 12 L 320 50 Z" fill="url(#contactRibbonGlow)" />
      <path d="M0 45 Q 100 16, 205 34 T 320 14" stroke="url(#contactRibbonGold)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M50 50 Q 145 30, 250 36 T 320 24" stroke="url(#contactGoldGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

function ContactTopCurves() {
  return (
    <div className="contact-top-curves" aria-hidden="true">
      <svg className="contact-curve-svg left" viewBox="0 0 420 250" fill="none">
        <path d="M0 0 Q 130 85, 230 55 T 420 145" stroke="url(#contactRibbonGold)" strokeWidth="2.4" opacity="0.8" />
        <path d="M0 45 Q 110 125, 255 85 T 380 210" stroke="url(#contactGoldGrad)" strokeWidth="1.6" opacity="0.6" />
        <path d="M0 0 Q 150 105, 280 65 L 280 0 Z" fill="url(#contactRibbonGlow)" opacity="0.25" />
      </svg>
      <svg className="contact-curve-svg right" viewBox="0 0 420 250" fill="none">
        <path d="M420 0 Q 290 85, 190 55 T 0 145" stroke="url(#contactRibbonGold)" strokeWidth="2.4" opacity="0.8" />
        <path d="M420 45 Q 310 125, 165 85 T 40 210" stroke="url(#contactGoldGrad)" strokeWidth="1.6" opacity="0.6" />
        <path d="M420 0 Q 270 105, 140 65 L 140 0 Z" fill="url(#contactRibbonGlow)" opacity="0.25" />
      </svg>
    </div>
  );
}

function ContactParticles() {
  return (
    <div className="contact-particles" aria-hidden="true">
      <span className="contact-dot cp1" />
      <span className="contact-dot cp2" />
      <span className="contact-dot cp3" />
      <span className="contact-dot cp4" />
      <span className="contact-dot cp5" />
      <span className="contact-dot cp6" />
      <span className="contact-dot cp7" />
      <span className="contact-dot cp8" />
    </div>
  );
}

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Sponsorship",
    message: ""
  });

  const update = (key, value) => {
    setForm(previous => ({
      ...previous,
      [key]: value
    }));
  };

  const submit = event => {
    event.preventDefault();

    const message = encodeURIComponent(
      `LBA 2026 Enquiry\\n\\n` +
      `Name: ${form.name}\\n` +
      `Email: ${form.email}\\n` +
      `Phone: ${form.phone}\\n` +
      `Interest: ${form.interest}\\n\\n` +
      `Message:\\n${form.message}`
    );

    window.open(
      `https://wa.me/919441083075?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="inner-page contact-page">
      {/* SVG Gradient Defs for Contact Page */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="contactGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D5A40" />
            <stop offset="25%" stopColor="#C5A46D" />
            <stop offset="50%" stopColor="#D9BC8A" />
            <stop offset="75%" stopColor="#D9BC8A" />
            <stop offset="100%" stopColor="#F5F1EA" />
          </linearGradient>
          <linearGradient id="contactRibbonGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D5A40" stopOpacity="0" />
            <stop offset="35%" stopColor="#C5A46D" stopOpacity="0.55" />
            <stop offset="75%" stopColor="#D9BC8A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F5F1EA" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="contactRibbonGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D9BC8A" stopOpacity="0" />
            <stop offset="65%" stopColor="#D9BC8A" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#C5A46D" stopOpacity="0.38" />
          </linearGradient>
        </defs>
      </svg>

      {/* Atmospheric corner decorative waves & sparkling particles */}
      <ContactTopCurves />
      <ContactParticles />

      <div className="wrap">
        <div className="contact-heading-wrap">
          <Laurel />
          <div className="contact-heading-center">
            <div className="eyebrow">JOIN THE CELEBRATION</div>
            <h2 className="contact-main-title">EVENT DETAILS & CONTACT</h2>
            <div className="contact-title-divider" aria-hidden="true">
              <span />✦<span />
            </div>
            <p className="contact-subtitle">
              We look forward to connecting with you.
            </p>
          </div>
          <Laurel flip />
        </div>

        {/* 3 Event Details Quick-Info Cards */}
        <div className="event-details-strip">
          <div className="event-detail-card">
            <div className="contact-card-top-light" aria-hidden="true" />
            <div className="contact-card-gloss" aria-hidden="true" />
            <div className="detail-icon-disc">
              <CalendarDays size={28} />
            </div>
            <div className="detail-card-content">
              <strong>19 December 2026</strong>
              <span>Saturday</span>
            </div>
            <ContactCardWave />
          </div>

          <div className="event-detail-card">
            <div className="contact-card-top-light" aria-hidden="true" />
            <div className="contact-card-gloss" aria-hidden="true" />
            <div className="detail-icon-disc">
              <MapPin size={28} />
            </div>
            <div className="detail-card-content">
              <strong>Hotel Daspalla</strong>
              <span>Hyderabad, India</span>
            </div>
            <ContactCardWave />
          </div>

          <div className="event-detail-card">
            <div className="contact-card-top-light" aria-hidden="true" />
            <div className="contact-card-gloss" aria-hidden="true" />
            <div className="detail-icon-disc">
              <Clock3 size={28} />
            </div>
            <div className="detail-card-content">
              <strong>6:00 PM Onwards</strong>
              <span>Grand Awards Evening</span>
            </div>
            <ContactCardWave />
          </div>
        </div>

        {/* Contact Layout: Left Details Card & Right Enquiry Form */}
        <div className="contact-layout">
          {/* Left: Contact Details Card */}
          <div className="contact-details">
            <div className="contact-card-top-light" aria-hidden="true" />
            <div className="contact-card-bottom-light" aria-hidden="true" />
            <div className="contact-card-gloss" aria-hidden="true" />

            <div className="eyebrow">LET'S CONNECT</div>
            <h2>CONTACT US</h2>

            <p className="contact-desc">
              For sponsorships, partnerships and general enquiries, get in touch with our team.
            </p>

            <div className="contact-links-list">
              <a
                className="contact-link"
                href="tel:+917675813732"
              >
                <div className="contact-link-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-link-text">
                  <small>CALL US</small>
                  <strong>+91 76758 13732</strong>
                </div>
              </a>

              <a
                className="contact-link"
                href="mailto:sinduadvertisers@gmail.com"
              >
                <div className="contact-link-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-link-text">
                  <small>EMAIL US</small>
                  <strong>sinduadvertisers@gmail.com</strong>
                </div>
              </a>

              <a
                className="contact-link"
                href="https://www.sinduadvertisers.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-link-icon">
                  <Globe2 size={22} />
                </div>
                <div className="contact-link-text">
                  <small>WEBSITE</small>
                  <strong>www.sinduadvertisers.com</strong>
                </div>
              </a>
            </div>

            <div className="contact-divider" />

            <div className="contact-event-summary">
              <h3>Legendary Business Awards 2026</h3>
              <p>One Night. One Stage. Lasting Legacy.</p>
            </div>

            <a
              className="outline-btn venue-btn"
              href="https://www.google.com/maps/search/?api=1&query=Hotel+Daspalla+Hyderabad"
              target="_blank"
              rel="noreferrer"
            >
              <span>View Venue on Maps</span>
              <ExternalLink size={17} />
            </a>

            <ContactCardWave />
          </div>

          {/* Right: Enquiry Form Card */}
          <form
            className="enquiry-form"
            onSubmit={submit}
          >
            <div className="contact-card-top-light" aria-hidden="true" />
            <div className="contact-card-bottom-light" aria-hidden="true" />
            <div className="contact-card-gloss" aria-hidden="true" />

            <div className="eyebrow">GET IN TOUCH</div>
            <h3>SEND AN ENQUIRY</h3>
            <p className="form-subtitle">
              Fill in your details and continue to WhatsApp to send your enquiry.
            </p>

            <div className="form-row">
              <label>
                Full Name
                <input
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={event =>
                    update("name", event.target.value)
                  }
                />
              </label>

              <label>
                Email Address
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={event =>
                    update("email", event.target.value)
                  }
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone Number
                <input
                  required
                  type="tel"
                  placeholder="+91..."
                  value={form.phone}
                  onChange={event =>
                    update("phone", event.target.value)
                  }
                />
              </label>

              <label>
                Enquiry Type
                <select
                  value={form.interest}
                  onChange={event =>
                    update("interest", event.target.value)
                  }
                >
                  <option>Sponsorship</option>
                  <option>Media Partnership</option>
                  <option>General Enquiry</option>
                </select>
              </label>
            </div>

            <label>
              Your Message
              <textarea
                required
                rows={5}
                placeholder="Tell us about your enquiry..."
                value={form.message}
                onChange={event =>
                  update("message", event.target.value)
                }
              />
            </label>

            <button
              className="gold-btn contact-submit-btn"
              type="submit"
            >
              <span>Send via WhatsApp</span> <Send size={18} />
            </button>

            <small className="form-footnote">
              ✦ WhatsApp will open with your enquiry details. Review and press Send.
            </small>

            <ContactCardWave />
          </form>
        </div>

        {/* Venue Showcase Card */}
        <div className="venue-showcase">
          <div className="contact-card-top-light" aria-hidden="true" />
          <div className="contact-card-bottom-light" aria-hidden="true" />
          <div className="contact-card-gloss" aria-hidden="true" />

          <div className="venue-illustration">
            <Building2
              size={85}
              strokeWidth={1.3}
            />
          </div>

          <div className="venue-info">
            <div className="eyebrow">THE PREMIER VENUE</div>
            <h2>HOTEL DASPALLA</h2>
            <div className="venue-location">Hyderabad, India</div>

            <p>
              Join us for an evening of recognition, celebration and meaningful connections at Hyderabad's premier destination.
            </p>
          </div>

          <ContactCardWave />
        </div>
      </div>
    </section>
  );
}


/* ================= SHARED WHATSAPP ENQUIRY MODAL ================= */
