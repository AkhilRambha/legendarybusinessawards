import React, { useState } from "react";
import { ArrowRight, Award } from "lucide-react";
import { SectionHeading } from "../components/common/ContentComponents.jsx";
import { RegistrationForm } from "../components/forms/RegistrationForm.jsx";
import { fields } from "../data/siteData.js";
import { RecognitionCarousel } from "../components/recognition/RecognitionCarousel.jsx";

export function RecognitionPage({ onOpenRegistration }) {
  const [internalRegistration, setInternalRegistration] = useState(false);
  const handleOpenRegistration = onOpenRegistration || (() => setInternalRegistration(true));

  return (
    <section className="inner-page">
      <div className="wrap">
        <SectionHeading
          eyebrow="HONOURING EXCELLENCE"
          title="15 RECOGNITION FIELDS"
          subtitle="Celebrating contributions across diverse sectors."
          showLaurels
        />

        <RecognitionCarousel fields={fields} />

        <div className="section-bottom-note">
          <Award size={22} />
          Honouring leadership, innovation and impact
        </div>

        <div className="lba-register-banner">
          <div className="lba-register-decoration">✦</div>

          <div className="eyebrow">
            BE PART OF THE LEGACY
          </div>

          <h2>REGISTER FOR THE AWARDS</h2>

          <p>
            Take the next step towards recognition at
            Legendary Business Awards 2026.
          </p>

          <button
            className="gold-btn lba-register-button"
            type="button"
            onClick={handleOpenRegistration}
          >
            Register Now <ArrowRight size={20} />
          </button>

          <p className="lba-register-caption">
            19 December 2026 · Hotel Daspalla, Hyderabad
          </p>
        </div>
      </div>

      {!onOpenRegistration && internalRegistration && (
        <RegistrationForm
          onClose={() => setInternalRegistration(false)}
        />
      )}
    </section>
  );
}

/* ================= WHO ATTENDS ================= */
