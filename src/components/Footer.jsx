import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        background: 'var(--bg-darker)',
        borderTop: '1px solid rgba(197, 160, 89, 0.2)',
        padding: '5rem 0 3rem 0',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Main Footer Block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Identity Column */}
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(197, 160, 89, 0.2), rgba(216, 164, 155, 0.15))',
                  border: '1px solid rgba(197, 160, 89, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  color: 'var(--champagne-gold)'
                }}
              >
                SD
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: 'var(--warm-beige)',
                    lineHeight: 1.1
                  }}
                >
                  SATARUPA DUTTA
                </h3>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    color: 'var(--champagne-gold)',
                    textTransform: 'uppercase'
                  }}
                >
                  BBA + B.A. LL.B. STUDENT
                </div>
              </div>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                color: 'var(--dusty-rose-light)',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              BUSINESS • LAW • MANAGEMENT
            </div>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--warm-beige-muted)',
                lineHeight: 1.6
              }}
            >
              &ldquo;Keen to learn. Ready to contribute.&rdquo;
            </p>
          </div>

          {/* Academic & University Details */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: 'var(--champagne-gold)',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              ACADEMIC AFFILIATION
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ color: 'var(--warm-beige)', fontWeight: 600 }}>
                Kingston Law College
              </div>
              <div>West Bengal State University</div>
              <div style={{ color: 'var(--champagne-gold-light)', fontSize: '0.84rem' }}>
                5-Year Integrated BBA LL.B. (2021 — 2026)
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                Kolkata, West Bengal, India
              </div>
            </div>
          </div>

          {/* Quick Direct Contacts */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: 'var(--champagne-gold)',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              DIRECT CONTACT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a
                href="tel:8777639920"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne-gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Phone size={15} color="var(--champagne-gold)" />
                <span>+91 8777639920</span>
              </a>

              <a
                href="mailto:trinadatta582@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne-gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Mail size={15} color="var(--dusty-rose)" />
                <span>trinadatta582@gmail.com</span>
              </a>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  lineHeight: 1.45
                }}
              >
                <MapPin size={15} color="var(--champagne-gold-light)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>19/1, Harish Niogi Road, Kolkata - 700067</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            paddingTop: '2.5rem'
          }}
        >
          <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
            &copy; 2026 Satarupa Dutta. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              borderRadius: '999px',
              padding: '0.6rem 1.25rem',
              color: 'var(--warm-beige)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(197, 160, 89, 0.15)';
              e.currentTarget.style.borderColor = 'var(--champagne-gold)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.3)';
            }}
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} color="var(--champagne-gold)" />
          </button>
        </div>
      </div>
    </footer>
  );
}
