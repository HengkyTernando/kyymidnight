"use client";

import { useEffect, useRef, useState } from "react";

function useReveal(threshold = 0.08) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, vis };
}

const DNA = [
  {
    title: "100% Legal & Safe",
    desc: "All game items and virtual goods are sourced from official channels and guaranteed secure.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: "Fast Manual Process",
    desc: "Transactions are processed manually but extremely fast by our active agents for safety and speed.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )
  },
  {
    title: "Cheapest Prices",
    desc: "We guarantee the best price points for gamers and reseller partners alike.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  }
];

export default function AboutSection() {
  const { ref, vis } = useReveal();

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="section" style={{ background: "var(--bg-sec)" }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          marginBottom: 48
        }}>
          <p className="section-label">About Us</p>
          <h2
            className="heading-xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginBottom: 20, color: "var(--text-1)" }}
          >
            Welcome to <span className="grad">KyyMidnight Store</span> 🌙
          </h2>
          <p style={{ color: "#CBD5E1", fontSize: "1.1rem", maxWidth: 640, lineHeight: 1.95 }}>
            We are the cheapest, most trusted, and 100% legal provider of <strong>Game Items</strong> and <strong>Virtual Goods</strong>.
          </p>
        </div>

        {/* ── Bio & Status Section ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
          marginBottom: 80,
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, color: "#CBD5E1", lineHeight: 1.95, fontSize: "1.05rem" }}>
            <p>
              KyyMidnight Store is dedicated to providing the best shopping experience for in-game items. All orders are processed manually by our active team members to ensure the highest safety and speed.
            </p>
            <p>
              With hundreads of successful manual transactions, we are the preferred choice for gamers seeking high-quality digital assets at budget-friendly price points.
            </p>

            {/* CS Active link button */}
            <a
              href="https://wa.me/62895385833237"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginTop: 12,
                padding: "12px 20px",
                borderRadius: 14,
                alignSelf: "flex-start",
                background: "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                boxShadow: "0 6px 15px rgba(168, 85, 247, 0.15), inset 2px 2px 4px rgba(255,255,255,0.15), inset -2px -2px 4px rgba(0, 0, 0, 0.4)",
                color: "var(--primary)",
                fontSize: 13,
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)"
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-2px) scale(1.02)";
                el.style.borderColor = "var(--primary)";
                el.style.boxShadow = "0 8px 20px rgba(168, 85, 247, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.2), inset -2px -2px 4px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.transform = "none";
                el.style.borderColor = "rgba(168, 85, 247, 0.3)";
                el.style.boxShadow = "0 6px 15px rgba(168, 85, 247, 0.15), inset 2px 2px 4px rgba(255, 255, 255, 0.15), inset -2px -2px 4px rgba(0, 0, 0, 0.4)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M21 14a8 8 0 0 0-16 0c0 4.99 4 5 4 5H4v-1.5" />
                <path d="M19 17.5V19a2 2 0 0 1-2 2H4" />
                <rect x="2" y="11" width="4" height="6" rx="1" />
                <rect x="18" y="11" width="4" height="6" rx="1" />
              </svg>
              <span>Customer Support &amp; CS Active (WhatsApp)</span>
              <span style={{ fontSize: 14 }}>→</span>
            </a>
          </div>

          {/* Visi & Misi blocks */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              className="clay-purple"
              style={{
                padding: 28,
                borderRadius: 24,
                transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseMove={e => {
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = ((x - centerX) / centerX) * 8; 
                const rotateX = -((y - centerY) / centerY) * 8; 
                
                el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale3d(1.03, 1.03, 1.03)`;
                el.style.borderColor = "rgba(168, 85, 247, 0.35)";
                el.style.boxShadow = "12px 12px 32px rgba(168, 85, 247, 0.18), inset 2px 2px 4px rgba(255, 255, 255, 0.15), inset -3px -3px 6px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                el.style.borderColor = "";
                el.style.boxShadow = "";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 22 }}>⚡</span>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--primary)", letterSpacing: "0.08em", margin: 0 }}>FAST MANUAL PROCESS</h3>
              </div>
              <p style={{ color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.7 }}>
                All your orders are processed manually but extremely fast by our active agents to ensure safe delivery.
              </p>
            </div>

            <div
              className="clay-purple"
              style={{
                padding: 28,
                borderRadius: 24,
                transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseMove={e => {
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = ((x - centerX) / centerX) * 8; 
                const rotateX = -((y - centerY) / centerY) * 8; 
                
                el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale3d(1.03, 1.03, 1.03)`;
                el.style.borderColor = "rgba(168, 85, 247, 0.35)";
                el.style.boxShadow = "12px 12px 32px rgba(168, 85, 247, 0.18), inset 2px 2px 4px rgba(255, 255, 255, 0.15), inset -3px -3px 6px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                el.style.borderColor = "";
                el.style.boxShadow = "";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 22 }}>🏷️</span>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--primary)", letterSpacing: "0.08em", margin: 0 }}>BEST PRICING</h3>
              </div>
              <p style={{ color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.7 }}>
                We offer the most budget-friendly pricing models alongside comprehensive safety guarantees on all virtual items.
              </p>
            </div>
          </div>
        </div>

        {/* ── DNA Section ── */}
        <div style={{
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
        }}>
          <h3 style={{
            fontSize: 24,
            fontWeight: 700,
            color: "var(--text-1)",
            textAlign: "center",
            marginBottom: 40
          }}>
            Why Shop at KyyMidnight Store?
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24
          }} className="dna-grid">
            {DNA.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="clay"
                style={{
                  padding: 32,
                  borderRadius: 24,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseMove={e => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateY = ((x - centerX) / centerX) * 8; 
                  const rotateX = -((y - centerY) / centerY) * 8; 
                  
                  el.style.borderColor = "rgba(168, 85, 247, 0.3)";
                  el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`;
                  el.style.boxShadow = "12px 12px 32px rgba(168, 85, 247, 0.2), inset 2px 2px 4px rgba(255, 255, 255, 0.18), inset -3px -3px 6px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = "";
                  el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                  el.style.boxShadow = "";
                }}
              >
                <div style={{
                  width: 56, height: 56,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.05) 100%)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  boxShadow: "inset 2px 2px 4px rgba(255, 255, 255, 0.15), inset -2px -2px 4px rgba(0, 0, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.2)"
                }}>
                  {icon}
                </div>
                <h4 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-1)", marginBottom: 12 }}>{title}</h4>
                <p style={{ fontSize: 13.5, color: "var(--text-2)", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #about [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .dna-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
