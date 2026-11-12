import React, { useEffect, useState } from "react";
import { tabs } from "./data/siteData.js";
import { SiteHeader } from "./components/layout/SiteHeader.jsx";
import { SiteFooter } from "./components/layout/SiteFooter.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { RecognitionPage } from "./pages/RecognitionPage.jsx";
import { AudiencePage } from "./pages/AudiencePage.jsx";
import { SponsorshipPage } from "./pages/SponsorshipPage.jsx";
import { MediaPage } from "./pages/MediaPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { RegistrationForm } from "./components/forms/RegistrationForm.jsx";
import { WhatsAppEnquiryForm } from "./components/forms/WhatsAppEnquiryForm.jsx";

function pageFromHash() {
  const hash = decodeURIComponent(
    window.location.hash.replace("#", "")
  );

  return (
    tabs.find(
      tab =>
        tab.toLowerCase().replace(/\s+/g, "-") === hash
    ) || "Home"
  );
}

export default function App() {
  const [page, setPage] = useState(pageFromHash);
  const [mobile, setMobile] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(pageFromHash());
      setMobile(false);
    };

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);

  const go = nextPage => {
    setPage(nextPage);
    setMobile(false);

    window.location.hash =
      nextPage.toLowerCase().replace(/\s+/g, "-");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="app">
      <SiteHeader
        page={page}
        mobile={mobile}
        setMobile={setMobile}
        go={go}
        onOpenRegistration={() => setShowRegistration(true)}
      />

      <main>
        <div className="gold-swoosh swoosh-left" />
        <div className="gold-swoosh swoosh-right" />

        {page === "Home" && (
          <HomePage
            go={go}
            onOpenRegistration={() => setShowRegistration(true)}
            onOpenEnquiry={() => setShowEnquiry(true)}
          />
        )}

        {page === "About" && (
          <AboutPage />
        )}

        {page === "Recognition Fields" && (
          <RecognitionPage onOpenRegistration={() => setShowRegistration(true)} />
        )}

        {page === "Who Attends" && (
          <AudiencePage go={go} />
        )}

        {page === "Sponsorship" && (
          <SponsorshipPage go={go} />
        )}

        {page === "Media Partners" && (
          <MediaPage />
        )}

        {page === "Contact" && (
          <ContactPage />
        )}
      </main>

      {showRegistration && (
        <RegistrationForm onClose={() => setShowRegistration(false)} />
      )}

      <SiteFooter go={go} onOpenEnquiry={() => setShowEnquiry(true)} />

      {showEnquiry && (
        <WhatsAppEnquiryForm onClose={() => setShowEnquiry(false)} />
      )}
    </div>
  );
}
