import React from 'react';
import { Briefcase, Scale, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

const SUPPORTING_CARDS = [
  {
    num: '01',
    title: 'BUSINESS',
    subtitle: 'Business Administration Background',
    desc: 'Equipped with foundational principles of financial management, strategic planning, client relations, and operational coordination across organizational environments.',
    icon: Briefcase,
    color: '#c5a059'
  },
  {
    num: '02',
    title: 'LAW',
    subtitle: 'Legislative Law Background',
    desc: 'Trained in rigorous legal research, statutory interpretation, statutory compliance awareness, structured documentation, and balanced analytical reasoning.',
    icon: Scale,
    color: '#d8a49b'
  },
  {
    num: '03',
    title: 'PROFESSIONAL GROWTH',
    subtitle: 'Eagerness to Learn & Contribute',
    desc: 'Driven by high accountability, disciplined execution, and a dedicated readiness to learn from seasoned leaders while contributing reliably to team goals.',
    icon: TrendingUp,
    color: '#e6ca85'
  }
];

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-label">BACKGROUND &amp; ASPIRATION</span>
          <h2 className="section-title">ABOUT SATARUPA</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Bridging commercial acumen with jurisprudence to deliver thoughtful,
            organized, and ethical value to modern institutions.
          </p>
        </div>

        {/* Large Editorial Glassmorphism Card */}
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '2.5rem',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '2rem',
              opacity: 0.12,
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 8vw, 7rem)',
              color: 'var(--champagne-gold)',
              lineHeight: 1,
              pointerEvents: 'none',
              fontWeight: 900
            }}
          >
            SD
          </div>

          <div style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--champagne-gold)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}
            >
              <Sparkles size={16} />
              <span>Personal Statement</span>
            </div>

            <blockquote
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)',
                lineHeight: 1.55,
                color: 'var(--warm-beige)',
                fontStyle: 'italic',
                marginBottom: '2rem',
                borderLeft: '2px solid var(--champagne-gold)',
                paddingLeft: '1.5rem'
              }}
            >
              &ldquo;I am a Bachelor of Business Administration and Bachelor of Legislative Law
              student with a strong interest in learning, professional development and contributing
              meaningfully to an organization. I consider myself a responsible and orderly person
              and I am looking forward to gaining new work experience.&rdquo;
            </blockquote>

            {/* Core Pillars Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="var(--champagne-gold)" />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  Responsible &amp; Orderly Execution
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="var(--dusty-rose)" />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  Multi-Disciplinary Mindset
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="var(--champagne-gold-light)" />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  Continuous Learning Commitment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Supporting Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.8rem'
          }}
        >
          {SUPPORTING_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="glass-panel"
                style={{
                  padding: '2.2rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: card.color,
                        letterSpacing: '0.05em'
                      }}
                    >
                      {card.num}
                    </span>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: card.color
                      }}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--warm-beige)',
                      letterSpacing: '0.08em',
                      marginBottom: '0.4rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    {card.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: card.color,
                      marginBottom: '1rem',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {card.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      lineHeight: 1.7,
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
