import React, { useState } from 'react';
import { BookOpen, Compass, HeartHandshake } from 'lucide-react';

const PRINCIPLES = [
  {
    num: '01',
    title: 'LEARN',
    statement: 'Continuously develop knowledge and professional skills.',
    detail: 'Actively studying case laws, commercial models, and industry best practices. Treating every professional task as an opportunity to absorb expertise.',
    icon: BookOpen,
    accent: '#c5a059'
  },
  {
    num: '02',
    title: 'ADAPT',
    statement: 'Approach new situations and workplace changes with flexibility.',
    detail: 'Embracing evolving project parameters, technological tools, and organizational shifts with an open, resilient, and constructive attitude.',
    icon: Compass,
    accent: '#d8a49b'
  },
  {
    num: '03',
    title: 'CONTRIBUTE',
    statement: 'Use skills, responsibility and teamwork to support organizational goals.',
    detail: 'Channeling thorough research, financial literacy, and disciplined work ethics to lighten team loads and advance organizational success.',
    icon: HeartHandshake,
    accent: '#e6ca85'
  }
];

export default function Philosophy() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="philosophy" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="section-label">GUIDING VALUES</span>
          <h2 className="section-title">PROFESSIONAL PHILOSOPHY</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Three core tenets that define my approach to every academic, legal, and business engagement.
          </p>
        </div>

        {/* Three Principles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {PRINCIPLES.map((p, idx) => {
            const Icon = p.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={p.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="glass-panel"
                style={{
                  padding: '2.8rem 2.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                  borderRadius: '24px',
                  transform: isHovered
                    ? 'translateY(-8px) scale(1.02)'
                    : 'translateY(0) scale(1)',
                  borderColor: isHovered ? p.accent : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered
                    ? `0 20px 45px -10px ${p.accent}28`
                    : 'var(--shadow-subtle)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.75rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.6rem',
                        fontWeight: 800,
                        color: p.accent,
                        letterSpacing: '0.04em'
                      }}
                    >
                      {p.num}
                    </span>

                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: `1px solid ${p.accent}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: p.accent
                      }}
                    >
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      color: 'var(--warm-beige)',
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    {p.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      fontStyle: 'italic',
                      lineHeight: 1.45,
                      color: p.accent,
                      marginBottom: '1.25rem'
                    }}
                  >
                    &ldquo;{p.statement}&rdquo;
                  </p>
                </div>

                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '1.25rem'
                  }}
                >
                  {p.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
