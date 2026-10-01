import React from 'react';
import { ArrowRight, Mail, Compass, MapPin, Building2, Calendar } from 'lucide-react';
import HeroScene from './3d/HeroScene';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Editorial Information */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
            className="hero-text-col"
          >
            {/* Top Label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1.2rem'
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '999px',
                  background: 'rgba(197, 160, 89, 0.12)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  color: 'var(--champagne-gold-light)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase'
                }}
              >
                PORTFOLIO 2026
              </span>
              <span
                style={{
                  width: '40px',
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(197, 160, 89, 0.5), transparent)'
                }}
              />
            </div>

            {/* Dominant Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 6.2vw, 5.4rem)',
                fontWeight: 800,
                letterSpacing: '0.04em',
                lineHeight: 1.02,
                color: 'var(--warm-beige)',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              SATARUPA <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #f5efe6 30%, #c5a059 80%, #d8a49b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                DUTTA
              </span>
            </h1>

            {/* Subtitle */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '0.75rem',
                flexWrap: 'wrap'
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: 'var(--champagne-gold)',
                  textTransform: 'uppercase'
                }}
              >
                BBA + B.A. LL.B. STUDENT
              </h2>
            </div>

            {/* Secondary Text */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                color: 'var(--dusty-rose-light)',
                marginBottom: '1.6rem',
                textTransform: 'uppercase'
              }}
            >
              <span>BUSINESS</span>
              <span style={{ color: 'var(--champagne-gold)', opacity: 0.6 }}>•</span>
              <span>LAW</span>
              <span style={{ color: 'var(--champagne-gold)', opacity: 0.6 }}>•</span>
              <span>MANAGEMENT</span>
            </div>

            {/* Professional Introduction */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                maxWidth: '620px',
                marginBottom: '2.4rem',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'normal'
              }}
            >
              &ldquo;An ambitious business and law student with strengths in leadership,
              financial management, legal research, communication, problem solving and
              professional organization.&rdquo;
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem'
              }}
            >
              <button
                onClick={() => scrollTo('about')}
                className="btn btn-primary"
                style={{ cursor: 'pointer' }}
                aria-label="Explore Portfolio"
              >
                <span>EXPLORE PORTFOLIO</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn btn-secondary"
                style={{ cursor: 'pointer' }}
                aria-label="Contact Satarupa Dutta"
              >
                <span>CONTACT ME</span>
                <Mail size={16} />
              </button>
            </div>

            {/* Verified Academic & Location Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.84rem' }}>
                <Building2 size={16} color="var(--champagne-gold)" />
                <span>Kingston Law College (WBSU)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.84rem' }}>
                <Calendar size={16} color="var(--dusty-rose)" />
                <span>2021 — 2026</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.84rem' }}>
                <MapPin size={16} color="var(--champagne-gold-light)" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Scene */}
          <div
            style={{
              gridColumn: 'span 12',
              height: '520px',
              position: 'relative'
            }}
            className="hero-3d-col"
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Decorative radial halo */}
              <div
                style={{
                  position: 'absolute',
                  width: '380px',
                  height: '380px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, rgba(216, 164, 155, 0.06) 40%, transparent 70%)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none'
                }}
              />
              <HeroScene />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-text-col {
            grid-column: span 7 !important;
          }
          .hero-3d-col {
            grid-column: span 5 !important;
            height: 600px !important;
          }
        }
      `}</style>
    </section>
  );
}
