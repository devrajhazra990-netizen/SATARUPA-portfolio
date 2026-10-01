import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const DIRECTIONS = [
  {
    title: 'BUSINESS',
    tagline: 'Commercial Principles & Analytical Strategy',
    detail: 'Integrating modern administrative structures, financial accountability, and data-driven analysis to foster institutional productivity.',
    accent: '#c5a059',
    number: '01'
  },
  {
    title: 'LAW',
    tagline: 'Statutory Research & Regulatory Rigor',
    detail: 'Applying deep legal methodology, compliance awareness, and critical thinking to safeguard ethics, rights, and regulatory adherence.',
    accent: '#d8a49b',
    number: '02'
  },
  {
    title: 'LEADERSHIP',
    tagline: 'Accountability, Guidance & Integrity',
    detail: 'Cultivating teamwork, transparent communication, empathetic mentorship, and dedicated ownership in collaborative environments.',
    accent: '#e6ca85',
    number: '03'
  },
  {
    title: 'MANAGEMENT',
    tagline: 'Systemic Planning & Problem Solving',
    detail: 'Structuring schedules, coordinating responsibilities, handling client relationships, and turning complex challenges into streamlined execution.',
    accent: '#f5efe6',
    number: '04'
  }
];

export default function ProfessionalDirection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="direction" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="section-label">STRATEGIC FOCUS</span>
          <h2 className="section-title">MY PROFESSIONAL DIRECTION</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Four interconnected pillars shaping a cohesive, high-standard professional career.
          </p>
        </div>

        {/* 4 Pillars Grid with 3D Depth & Large Typography */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {DIRECTIONS.map((dir, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={dir.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="glass-panel"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '360px',
                  transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  borderColor: isHovered ? dir.accent : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered
                    ? `0 20px 45px -10px ${dir.accent}33`
                    : 'var(--shadow-subtle)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background Watermark Number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '15px',
                    fontSize: '6.5rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    color: dir.accent,
                    opacity: isHovered ? 0.12 : 0.04,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    transition: 'opacity 0.4s ease'
                  }}
                >
                  {dir.number}
                </div>

                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '2rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        color: dir.accent,
                        textTransform: 'uppercase'
                      }}
                    >
                      Pillar {dir.number}
                    </span>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: `1px solid ${dir.accent}55`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: dir.accent,
                        transform: isHovered ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.4s ease'
                      }}
                    >
                      <ArrowUpRight size={15} />
                    </div>
                  </div>

                  {/* Dominant Word */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      color: 'var(--warm-beige)',
                      lineHeight: 1.05,
                      marginBottom: '0.9rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    {dir.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: dir.accent,
                      marginBottom: '1.2rem',
                      lineHeight: 1.4
                    }}
                  >
                    {dir.tagline}
                  </div>
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
                  {dir.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
