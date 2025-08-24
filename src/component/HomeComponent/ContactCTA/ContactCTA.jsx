import React from "react";
import "./ContactCTA.css";

const ContactCTA = ({
  title = "Остались вопросы?",
  subtitle = "Свяжитесь с нами и наши специалисты с радостью помогут вам",
  buttonText = "Связаться с нами",
  onButtonClick,
  href = "#contact",
}) => {
  const handleClick = (e) => {
    if (onButtonClick) {
      e.preventDefault();
      onButtonClick();
    }
  };

  return (
    <section className="contact-cta-fullwidth">
      <div className="cta-bg-overlay"></div>
      <div className="cta-particle cta-particle-1"></div>
      <div className="cta-particle cta-particle-2"></div>
      <div className="cta-particle cta-particle-3"></div>

      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title-modern">
            <span className="cta-title-gradient">{title}</span>
          </h2>

          <p className="cta-subtitle-modern">{subtitle}</p>

          <div className="cta-button-wrapper">
            {onButtonClick ? (
              <button className="cta-button-modern" onClick={handleClick}>
                <span className="cta-button-text">{buttonText}</span>
                <span className="cta-button-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="cta-button-hover"></span>
              </button>
            ) : (
              <a href={href} className="cta-button-modern">
                <span className="cta-button-text">{buttonText}</span>
                <span className="cta-button-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="cta-button-hover"></span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
