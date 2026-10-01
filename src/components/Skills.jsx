import React, { useState } from 'react';
import {
  Users,
  UserCheck,
  Clock,
  ShieldCheck,
  Award,
  RefreshCw,
  TrendingUp,
  LineChart,
  Handshake,
  Database,
  Lightbulb,
  Scale,
  FileText,
  FileCheck,
  MessageSquare,
  Table,
  Layers,
  Sparkles
} from 'lucide-react';
import SkillConstellation from './3d/SkillConstellation';

const CORE_STRENGTHS = [
  'LEADERSHIP',
  'PROBLEM SOLVING',
  'FINANCIAL MANAGEMENT',
  'LEGAL RESEARCH',
  'COMMUNICATION',
  'ADAPTABILITY'
];

const SKILL_CATEGORIES = [
  {
    id: 'leadership',
    tag: '01',
    category: 'LEADERSHIP & MANAGEMENT',
    description: 'Guiding teams, instilling operational integrity, and stewarding collaborative responsibility.',
    accent: '#c5a059',
    skills: [
      {
        name: 'Leadership & Team Management',
        icon: Users,
        desc: 'Fostering collective direction, delegating roles with clarity, and keeping group objectives on track.'
      },
      {
        name: 'Employee Mentoring',
        icon: UserCheck,
        desc: 'Supporting peer development, encouraging constructive dialogue, and facilitating knowledge transfer.'
      },
      {
        name: 'Time Management',
        icon: Clock,
        desc: 'Structuring rigorous schedules and meeting demanding legal and academic deadlines efficiently.'
      },
      {
        name: 'Accountability',
        icon: ShieldCheck,
        desc: 'Taking full ownership of tasks, honoring commitments, and prioritizing institutional integrity.'
      },
      {
        name: 'Professionalism',
        icon: Award,
        desc: 'Maintaining high standards of workplace etiquette, punctuality, and measured communication.'
      },
      {
        name: 'Adaptability',
        icon: RefreshCw,
        desc: 'Quickly absorbing dynamic requirements, responding flexibly, and thriving amidst organizational evolution.'
      }
    ]
  },
  {
    id: 'business',
    tag: '02',
    category: 'BUSINESS & FINANCE',
    description: 'Applying commercial frameworks, financial discipline, and structured problem-solving methodologies.',
    accent: '#d8a49b',
    skills: [
      {
        name: 'Financial Management',
        icon: LineChart,
        desc: 'Understanding budgeting fundamentals, commercial statements, and cost-benefit evaluations.'
      },
      {
        name: 'Client Relationship Management',
        icon: Handshake,
        desc: 'Engaging stakeholders with empathy, active listening, and responsive professional service.'
      },
      {
        name: 'Data Management',
        icon: Database,
        desc: 'Organizing structured records, ensuring data accuracy, and maintaining information pipelines.'
      },
      {
        name: 'Analytical Thinking',
        icon: TrendingUp,
        desc: 'Breaking down intricate scenarios into logical, quantifiable components to guide decisions.'
      },
      {
        name: 'Problem Solving',
        icon: Lightbulb,
        desc: 'Synthesizing business hurdles into step-by-step, actionable, and sustainable resolutions.'
      }
    ]
  },
  {
    id: 'law',
    tag: '03',
    category: 'LAW & PROFESSIONAL PRACTICE',
    description: 'Harnessing legislative awareness, statutory research, and regulatory adherence.',
    accent: '#e6ca85',
    skills: [
      {
        name: 'Legal Research & Documentation',
        icon: Scale,
        desc: 'Investigating statutory precedents, compiling rigorous legal briefs, and drafting structured documents.'
      },
      {
        name: 'Compliance Awareness',
        icon: FileCheck,
        desc: 'Understanding regulatory obligations, statutory policies, and standards of corporate governance.'
      },
      {
        name: 'Communication & Negotiation',
        icon: MessageSquare,
        desc: 'Articulating legal arguments with clarity, balance, and persuasive negotiation techniques.'
      }
    ]
  },
  {
    id: 'digital',
    tag: '04',
    category: 'DIGITAL & OFFICE SKILLS',
    description: 'Leveraging productivity tools, quantitative spreadsheets, and structured information systems.',
    accent: '#f5efe6',
    skills: [
      {
        name: 'MS Office & Excel',
        icon: Table,
        desc: 'Utilizing spreadsheets for financial models, data synthesis, document layouts, and executive reports.'
      },
      {
        name: 'Data Management',
        icon: Database,
        desc: 'Structuring digital archives, tracking information logs, and ensuring seamless document retrieval.'
      },
      {
        name: 'Analytical Thinking',
        icon: TrendingUp,
        desc: 'Applying objective, structured evaluation techniques across digital datasets and scenarios.'
      }
    ]
  }
];

export default function Skills() {
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredCategories = selectedCat === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.id === selectedCat);

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-label">PRACTICAL COMPETENCIES</span>
          <h2 className="section-title">SKILLS &amp; PROFESSIONAL EXPERTISE</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A disciplined synthesis of leadership, business management, legal research,
            and digital organizational capabilities.
          </p>
        </div>

        {/* FEATURED SKILLS: CORE STRENGTHS 3D FLOATING MARQUEE */}
        <div
          className="glass-panel"
          style={{
            padding: '2rem 1.5rem',
            marginBottom: '4rem',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: 'var(--champagne-gold)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem'
            }}
          >
            <Sparkles size={16} />
            <span>CORE STRENGTHS</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            {CORE_STRENGTHS.map((strength, i) => (
              <div
                key={strength}
                style={{
                  padding: '0.85rem 1.6rem',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  color: 'var(--warm-beige)',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                className="strength-tag"
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: i % 2 === 0 ? 'var(--champagne-gold)' : 'var(--dusty-rose)'
                  }}
                />
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3D SKILL CONSTELLATION DISPLAY */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--champagne-gold)',
                textTransform: 'uppercase'
              }}
            >
              INTERACTIVE 3D COMPETENCY MAP
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                color: 'var(--warm-beige)',
                marginTop: '0.4rem'
              }}
            >
              The Competency Constellation
            </h3>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '1rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              border: '1px solid rgba(197, 160, 89, 0.25)'
            }}
          >
            <SkillConstellation />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem'
          }}
        >
          <button
            onClick={() => setSelectedCat('all')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: '999px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              border: selectedCat === 'all'
                ? '1px solid var(--champagne-gold)'
                : '1px solid rgba(255, 255, 255, 0.08)',
              background: selectedCat === 'all'
                ? 'rgba(197, 160, 89, 0.2)'
                : 'rgba(255, 255, 255, 0.02)',
              color: selectedCat === 'all' ? 'var(--champagne-gold-light)' : 'var(--text-secondary)',
              transition: 'all 0.25s ease'
            }}
          >
            ALL CATEGORIES
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '999px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                border: selectedCat === cat.id
                  ? `1px solid ${cat.accent}`
                  : '1px solid rgba(255, 255, 255, 0.08)',
                background: selectedCat === cat.id
                  ? `${cat.accent}24`
                  : 'rgba(255, 255, 255, 0.02)',
                color: selectedCat === cat.id ? 'var(--warm-beige)' : 'var(--text-secondary)',
                transition: 'all 0.25s ease'
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* 4 Skill Categories Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {filteredCategories.map((cat) => (
            <div key={cat.id}>
              {/* Category Heading Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingBottom: '1rem',
                  borderBottom: `1px solid ${cat.accent}33`,
                  marginBottom: '1.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: cat.accent
                    }}
                  >
                    {cat.tag}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: 'var(--warm-beige)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {cat.category}
                  </h3>
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {cat.description}
                </div>
              </div>

              {/* Skill Cards Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1.5rem'
                }}
              >
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="glass-panel skill-card"
                      style={{
                        padding: '1.85rem 1.6rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '190px',
                        cursor: 'default',
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <div>
                        {/* Icon and Accent */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '1.2rem'
                          }}
                        >
                          <div
                            className="skill-icon-wrap"
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '12px',
                              background: 'rgba(255, 255, 255, 0.04)',
                              border: `1px solid ${cat.accent}44`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: cat.accent,
                              transition: 'transform 0.3s ease, border-color 0.3s ease'
                            }}
                          >
                            <Icon size={22} />
                          </div>
                          <span
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: cat.accent,
                              opacity: 0.6
                            }}
                          />
                        </div>

                        {/* Skill Name */}
                        <h4
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            letterSpacing: '0.02em',
                            color: 'var(--warm-beige)',
                            marginBottom: '0.6rem',
                            lineHeight: 1.3
                          }}
                        >
                          {skill.name}
                        </h4>
                      </div>

                      {/* One-Line Description */}
                      <p
                        style={{
                          fontSize: '0.86rem',
                          lineHeight: 1.55,
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {skill.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .strength-tag:hover {
          border-color: var(--champagne-gold) !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(197, 160, 89, 0.25) !important;
        }
        .skill-card:hover {
          transform: translateY(-6px) perspective(800px) rotateX(2deg);
          border-color: rgba(197, 160, 89, 0.45) !important;
          box-shadow: 0 16px 35px -10px rgba(197, 160, 89, 0.2) !important;
        }
        .skill-card:hover .skill-icon-wrap {
          transform: scale(1.1) rotate(5deg);
          border-color: var(--champagne-gold) !important;
        }
      `}</style>
    </section>
  );
}
