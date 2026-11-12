import React from "react";
import { Award, Menu, X, ShieldCheck } from "lucide-react";
import { tabs } from "../../data/siteData.js";

export function SiteHeader({ page, mobile, setMobile, go, onOpenRegistration }) {
  return (
    <header className="header">
      <button
        className="brand"
        onClick={() => go("Home")}
        aria-label="Go to Home"
      >
        <img
          src="/assets/Images/lba-2026-logo.png"
          alt="Legendary Business Awards 2026"
          className="lba-emblem navbar-emblem"
        />
      </button>

      <button
        className="mobile-menu"
        onClick={() => setMobile(!mobile)}
        aria-label="Toggle navigation"
        aria-expanded={mobile}
      >
        {mobile ? <X /> : <Menu />}
      </button>

      <nav className={`nav ${mobile ? "open" : ""}`}>
        {tabs.map(tab => (
          <button
            key={tab}
            className={
              page === tab ? "selected" : ""
            }
            onClick={() => go(tab)}
          >
            {tab}
          </button>
        ))}

        <div className="nav-mobile-actions">
          <button
            className="gold-btn header-btn header-reg-btn"
            onClick={() => {
              onOpenRegistration();
              setMobile(false);
            }}
          >
            <Award size={17} />
            Awards Registration
          </button>
          <button
            className="gold-btn header-btn"
            onClick={() => go("Contact")}
          >
            <ShieldCheck size={17} />
            Enquiry
          </button>
        </div>
      </nav>

      <div className="header-actions">
        <button
          className="gold-btn header-btn header-reg-btn"
          onClick={onOpenRegistration}
        >
          <Award size={17} />
          Awards Registration
        </button>

        <button
          className="gold-btn header-btn"
          onClick={() => go("Contact")}
        >
          <ShieldCheck size={17} />
          Enquiry
        </button>
      </div>
    </header>
  );
}
