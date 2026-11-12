import React, { useState } from "react";
import { X, Send } from "lucide-react";
import { FloatingInput } from "./FloatingInput.jsx";

export function WhatsAppEnquiryForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    description: ""
  });

  const update = (key, value) => {
    setForm(previous => ({ ...previous, [key]: value }));
  };

  const submit = event => {
    event.preventDefault();

    const message = encodeURIComponent(
      `LBA 2026 Enquiry\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n\n` +
      `Description:\n${form.description}`
    );

    window.open(
      `https://wa.me/919441083075?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
    onClose();
  };

  return (
    <div className="enquiry-modal-backdrop" onMouseDown={event => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section
        className="whatsapp-enquiry-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-enquiry-title"
      >
        <button
          type="button"
          className="whatsapp-enquiry-close"
          onClick={onClose}
          aria-label="Close enquiry form"
        >
          <X size={21} />
        </button>

        <span className="eyebrow">LET'S CONNECT</span>
        <h2 id="whatsapp-enquiry-title">For More Enquiries</h2>
        <p className="whatsapp-enquiry-intro">
          Share your details and our team will receive your enquiry on WhatsApp.
        </p>

        <form onSubmit={submit} className="whatsapp-enquiry-fields">
          <FloatingInput
            id="enquiry-name"
            label="Name"
            value={form.name}
            autoComplete="name"
            onChange={event => update("name", event.target.value)}
          />

          <FloatingInput
            id="enquiry-phone"
            label="Phone Number"
            type="tel"
            value={form.phone}
            autoComplete="tel"
            inputMode="tel"
            onChange={event => update("phone", event.target.value)}
          />

          <FloatingInput
            id="enquiry-email"
            label="Email Address"
            type="email"
            value={form.email}
            autoComplete="email"
            onChange={event => update("email", event.target.value)}
          />

          <div className="lba-floating-field lba-floating-textarea">
            <textarea
              id="enquiry-description"
              required
              rows={4}
              placeholder=" "
              value={form.description}
              onChange={event => update("description", event.target.value)}
            />
            <label htmlFor="enquiry-description">Description</label>
          </div>

          <button type="submit" className="whatsapp-enquiry-submit">
            Continue to WhatsApp <Send size={17} />
          </button>
        </form>

        <small className="whatsapp-enquiry-note">
          WhatsApp number: +91 94410 83075. Review your message in WhatsApp and press Send.
        </small>
      </section>
    </div>
  );
}

/* ================= MAIN APP ================= */
