import React, { useEffect, useState } from "react";
import { X, ArrowRight, CheckCircle2, LockKeyhole, ChevronLeft, AlertCircle } from "lucide-react";
import { fields, REGISTRATION_FEE } from "../../data/siteData.js";
import { FloatingInput } from "./FloatingInput.jsx";

export function RegistrationForm({ onClose }) {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: ""
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onEscape = event => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [onClose]);

  const update = (key, value) => {
    setError("");
    setForm(previous => ({
      ...previous,
      [key]: value
    }));
  };

  const proceed = event => {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    const cleanPhone = form.phone.trim().replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!form.category) {
      setError("Please select a recognition field.");
      return;
    }

    setError("");
    setStep(2);
  };

  return (
    <div
      className="lba-registration-overlay"
      onClick={onClose}
    >
      <div
        className="lba-registration-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Awards registration"
        onClick={event => event.stopPropagation()}
      >
        <button
          type="button"
          className="lba-modal-close"
          onClick={onClose}
          aria-label="Close registration"
        >
          <X size={22} />
        </button>

        <div className="lba-registration-header">
          <div className="eyebrow">
            LEGENDARY BUSINESS AWARDS 2026
          </div>

          <h2>
            {step === 1
              ? "AWARDS REGISTRATION"
              : "PAYMENT DETAILS"}
          </h2>

          <p>
            {step === 1
              ? "Enter your details to continue with registration."
              : "Review your registration details and fee."}
          </p>
        </div>

        <div className="lba-step-indicator">
          <div className={step >= 1 ? "active" : ""}>
            <span>1</span> Registration
          </div>

          <div className="lba-step-line" />

          <div className={step >= 2 ? "active" : ""}>
            <span>2</span> Payment
          </div>
        </div>

        {error && (
          <div className="lba-form-error" role="alert">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {step === 1 ? (
          <form
            className="lba-registration-form"
            onSubmit={proceed}
          >
            <FloatingInput
              id="reg-name"
              label="Full Name"
              value={form.name}
              autoComplete="name"
              onChange={event =>
                update("name", event.target.value)
              }
            />

            <FloatingInput
              id="reg-email"
              label="Email Address"
              type="email"
              value={form.email}
              autoComplete="email"
              onChange={event =>
                update("email", event.target.value)
              }
            />

            <FloatingInput
              id="reg-phone"
              label="Phone Number"
              type="tel"
              value={form.phone}
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
              onChange={event =>
                update(
                  "phone",
                  event.target.value.replace(/\D/g, "")
                )
              }
            />

            <div className="lba-floating-field">
              <select
                id="reg-category"
                required
                value={form.category}
                onChange={event =>
                  update("category", event.target.value)
                }
              >
                <option value="" disabled hidden>
                  Select a category
                </option>
                {fields.map(([title]) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>

              <label
                htmlFor="reg-category"
                className="has-value"
              >
                Recognition Field <span>*</span>
              </label>
            </div>

            <button
              className="gold-btn lba-full-btn"
              type="submit"
            >
              Proceed to Payment
              <ArrowRight size={19} />
            </button>

            <p className="lba-form-disclaimer">
              Your details are used only in this registration
              preview. No information is submitted or stored.
            </p>
          </form>
        ) : (
          <div className="lba-payment-step">
            <div className="lba-payment-summary">
              <div className="lba-summary-title">
                <CheckCircle2 size={25} />
                Registration Details
              </div>

              {[
                ["Full Name", form.name],
                ["Email", form.email],
                ["Phone", form.phone],
                ["Recognition Field", form.category]
              ].map(([label, value]) => (
                <div
                  className="lba-summary-row"
                  key={label}
                >
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <div className="lba-payment-amount">
              <div>
                <span>Registration Fee</span>
                <strong>
                  ₹{REGISTRATION_FEE.toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="lba-payment-total">
                <span>Total Amount</span>
                <strong>
                  ₹{REGISTRATION_FEE.toLocaleString("en-IN")}
                </strong>
              </div>
            </div>

            <button
              type="button"
              className="gold-btn lba-full-btn"
              onClick={() => {
                alert(
                  "Payment gateway is not connected yet. No payment has been charged."
                );
              }}
            >
              <LockKeyhole size={19} />
              Pay ₹2,499
            </button>

            <button
              type="button"
              className="lba-back-btn"
              onClick={() => setStep(1)}
            >
              <ChevronLeft size={18} />
              Back to Registration
            </button>

            <p className="lba-form-disclaimer">
              Payment integration is pending. Clicking Pay
              will not charge your account or confirm registration.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============= RECOGNITION FIELDS ============= */
