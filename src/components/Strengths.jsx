import React, { useState } from 'react';
import { ShieldCheck, FolderKanban, MessageSquare, Compass, BookOpenCheck } from 'lucide-react';

const STRENGTHS_DATA = [
  {
    title: 'RESPONSIBLE',
    tagline: 'Reliability & Dedication',
    desc: 'Taking thorough ownership of tasks, honoring commitments punctually, and upholding institutional trust.',
    icon: ShieldCheck,
    accent: '#c5a059'
  },
  {
    title: 'ORGANIZED',
    tagline: 'Structure & Discipline',
    desc: 'Maintaining structured documentation, tidy workflows, and systematic schedules to eliminate operational clutter.',
    icon: FolderKanban,
    accent: '#d8a49b'
  },
  {
    title: 'COMMUNICATIVE',
    tagline: 'Clarity & Empathy',
    desc: 'Engaging with active listening, articulate expression, and transparent teamwork across multi-level groups.',
    icon: MessageSquare,
    accent: '#e6ca85'
  },
  {
    title: 'ADAPTABLE',
    tagline: 'Agility & Resilience',
    desc: 'Pivoting smoothly when operational parameters shift and quickly embracing new methodologies with optimism.',
    icon: Compass,
    accent: '#f5efe6'
  },
  {
    title: 'EAGER TO LEARN',
    tagline: 'Continuous Curiosity',
    desc: 'Passionate about assimilating insights from mentors, expanding legal and business expertise daily.',
    icon: BookOpenCheck,
    accent: '#dfba53'
  }
];

export default function Strengths() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="strengths" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="section-label">CORE ATTRIBUTES</span>
          <h2 className="section-title">WHAT I BRING</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Personal principles and work ethic that underpin my development as a young professional.
          </p>
        </div>

        {/* 5 Floating Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {STRENGTHS_DATA.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="glass-panel"
                style={{
                  padding: '2.4rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '280px',
                  borderRadius: '20px',
                  transform: isHovered
                    ? 'translateY(-10px) perspective(800px) rotateX(3deg)'
                    : 'translateY(0)',
                  borderColor: isHovered ? item.accent : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered
                    ? `0 20px 40px -10px ${item.accent}25`
                    : 'var(--shadow-subtle)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Minimal Icon */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${item.accent}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.accent,
                      marginBottom: '1.5rem',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: 'var(--warm-beige)',
                      marginBottom: '0.35rem',
                      textTransform: 'uppercase',
                      lineHeight: 1.2
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: item.accent,
                      letterSpacing: '0.04em',
                      marginBottom: '1rem'
                    }}
                  >
                    {item.tagline}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)'
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
