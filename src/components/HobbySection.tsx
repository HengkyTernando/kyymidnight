"use client";

import { useEffect, useRef, useState } from "react";

function useReveal(threshold = 0.1) {
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

const HOBBIES = [
  {
    name: "Fish It Item",
    desc: "Virtual items, limited collectibles, pets, and custom gamepasses delivered manually and quickly via direct join or trade.",
    color: "#a855f7", // Purple
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    name: "In-Game Currencies",
    desc: "Direct game top-ups for Mobile Legends Diamonds, Free Fire Diamonds, PUBG UC, Valorant Points, etc. processed manually with top-tier security.",
    color: "#ec4899", // Magenta/pink
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <line x1="15" y1="13" x2="15.01" y2="13" />
        <line x1="18" y1="11" x2="18.01" y2="11" />
        <rect x="2" y="6" width="20" height="12" rx="3" />
      </svg>
    )
  },
  {
    name: "Digital Game Vouchers",
    desc: "Official digital gift codes and keys for Steam Wallet, Google Play, Roblox, iTunes, and Razer Gold, sent safely to your chat.",
    color: "#6366f1", // Indigo
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="16" y1="8" x2="16" y2="16" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="8" x2="8" y2="16" />
      </svg>
    )
  }
];

export default function HobbySection() {
  const { ref, vis } = useReveal();

  return (
    <section id="hobbies" ref={ref as React.RefObject<HTMLElement>} className="section" style={{ background: "var(--bg)" }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          marginBottom: 48,
        }}>
          <p className="section-label">Product Catalog</p>
          <h2
            className="heading-xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginBottom: 16, color: "var(--text-1)" }}
          >
            Best Services from <span className="grad">KyyMidnight Store</span>
          </h2>
          <p style={{ color: "var(--text-2)", fontSize: "1rem", maxWidth: 450, lineHeight: 1.7 }}>
            A curated selection of game items, Roblox passes, and digital vouchers with the cheapest prices and fast manual delivery.
          </p>
        </div>

        {/* ── Hobbies grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(20px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}>
          {HOBBIES.map(({ name, desc, color, icon }, i) => {
            const clayBg = `${color}06`;
            const clayBorder = `${color}25`;
            const clayShadow = `8px 8px 24px rgba(0, 0, 0, 0.45), inset 2px 2px 4px rgba(255, 255, 255, 0.12), inset -3px -3px 6px ${color}40`;
            const clayShadowHover = `12px 12px 32px ${color}30, inset 2px 2px 4px rgba(255, 255, 255, 0.18), inset -3px -3px 6px ${color}30`;

            return (
              <div
                key={name}
                style={{
                  borderRadius: 24,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 16,
                  cursor: "default",
                  background: clayBg,
                  border: `1px solid ${clayBorder}`,
                  boxShadow: clayShadow,
                  transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  transitionDelay: `${i * 50}ms`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = `${color}40`;
                  el.style.background = `${color}0c`;
                  el.style.transform = "translateY(-6px) scale(1.02)";
                  el.style.boxShadow = clayShadowHover;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = clayBorder;
                  el.style.background = clayBg;
                  el.style.transform = "none";
                  el.style.boxShadow = clayShadow;
                }}
              >
                {/* Icon box */}
                <div style={{
                  width: 48, height: 48,
                  borderRadius: 14,
                  background: `${color}15`,
                  border: `1px solid ${color}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color,
                  boxShadow: `inset 1px 1px 2px rgba(255, 255, 255, 0.2), inset -1px -1px 2px ${color}40`
                }}>
                  {icon}
                </div>

                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-1)", marginBottom: 8 }}>
                    {name}
                  </h4>
                  <p style={{ fontSize: 13.5, color: "var(--text-2)", lineHeight: 1.7 }}>
                    {desc}
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
