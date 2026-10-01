import React from 'react';
import { Target, Compass, Sparkles } from 'lucide-react';

export default function Objective() {
  return (
    <section
      id="objective"
      style={{
        position: 'relative',
        padding: '7rem 0',
        background: 'linear-gradient(180deg, var(--bg-dark) 0%, #08090b 50%, var(--bg-dark) 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Cinematic Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(197, 160, 89, 0.12) 0%, rgba(216, 164, 155, 0.05) 45%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          {/* Header Label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: 'var(--champagne-gold)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '2rem'
            }}
          >
            <Target size={16} />
            <span>CAREER OBJECTIVE</span>
          </div>

          {/* Large Statement Focus */}
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3.5rem)',
              borderRadius: '28px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              background: 'rgba(18, 19, 23, 0.88)',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(197, 160, 89, 0.08)',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--dusty-rose-light)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '1.75rem'
              }}
            >
              <Sparkles size={14} color="var(--champagne-gold)" />
              <span>CORE PURPOSE &amp; PROFESSIONAL CALLING</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4.2vw, 3.4rem)',
                fontWeight: 800,
                letterSpacing: '0.04em',
                lineHeight: 1.25,
                color: 'var(--warm-beige)',
                textTransform: 'uppercase',
                marginBottom: '2rem'
              }}
            >
              &ldquo;EAGERNESS TO{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #c5a059 0%, #e6ca85 50%, #d8a49b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                LEARN
              </span>{' '}
              AND{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #d8a49b 0%, #e8c5be 50%, #c5a059 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                CONTRIBUTE
              </span>{' '}
              TO THE COMPANY&rdquo;
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                maxWidth: '780px',
                margin: '0 auto',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic'
              }}
            >
              Committed to applying legal knowledge, business analysis, and organizational
              discipline to support organizational productivity, while learning diligently
              under senior professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
