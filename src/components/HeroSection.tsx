"use client";

import { useEffect, useState } from "react";

const ROLES = ["Fish It Item", "Fast Manual Delivery", "Cheapest Price Points", "Safe & Trusted Goods"];

/* ── Typewriter hook ───────────────────── */
function useTypewriter(words: string[]) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDel] = useState(false);
  const [charI, setCharI] = useState(0);

  useEffect(() => {
    const word = words[idx];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && charI <= word.length) {
      t = setTimeout(() => { setText(word.slice(0, charI)); setCharI(c => c + 1); }, 75);
    } else if (deleting && charI >= 0) {
      t = setTimeout(() => { setText(word.slice(0, charI)); setCharI(c => c - 1); }, 40);
    } else if (!deleting && charI > word.length) {
      t = setTimeout(() => setDel(true), 2000);
    } else {
      setDel(false);
      setIdx(i => (i + 1) % words.length);
      setCharI(0);
    }
    return () => clearTimeout(t);
  }, [charI, deleting, idx, words]);

  return text;
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const typed = useTypewriter(ROLES);

  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="mesh-bg dot-grid"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ paddingTop: 120, paddingBottom: 80, position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 80,
          alignItems: "center",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}>

          {/* ── Left: Text ── */}
          <div style={{ maxWidth: 580 }}>

            {/* Status badge */}
            <div className="tag" style={{ marginBottom: 28 }}>
              <span style={{
                width: 7, height: 7,
                borderRadius: "50%",
                background: "var(--primary)",
                display: "inline-block",
                animation: "pulse-dot 2s ease-in-out infinite",
              }} />
              100% Safe &amp; Trusted
            </div>

            {/* Name */}
            <h1
              className="heading-xl grad"
              style={{ fontSize: "clamp(3.2rem, 7vw, 6rem)", marginBottom: 20 }}
            >
              KyyMidnight Store
            </h1>

            {/* Typewriter role */}
            <div style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              color: "var(--text-1)",
              marginBottom: 24,
              minHeight: "2.2rem",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}>
              <span>{typed}</span>
              <span className="anim-blink" style={{
                display: "inline-block",
                width: 2,
                height: "1.2em",
                background: "var(--primary)",
                borderRadius: 1,
                marginLeft: 2,
                flexShrink: 0,
              }} />
            </div>

            {/* Tagline */}
            <p style={{
              fontSize: "1.05rem",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: 40,
              maxWidth: 460,
            }}>
              Find your fish it items at the{" "}
              <span style={{ color: "var(--primary)", fontWeight: 600 }}>cheapest</span>,{" "}
              <span style={{ color: "var(--primary)", fontWeight: 600 }}>safest</span>, and most{" "}
              <span style={{ color: "var(--primary)", fontWeight: 600 }}>trusted</span> rates — fast manual delivery via CS!
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                className="btn-primary"
                id="hero-cta-contact"
                href="https://t.me/kyyrblx"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Visit Store
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
              <button className="btn-ghost" onClick={() => go("about")}>
                About Store
              </button>
            </div>
          </div>

          {/* ── Right: Avatar ── */}
          <div
            className="anim-float hidden-sm"
            style={{ position: "relative", flexShrink: 0 }}
          >
            {/* Outer spinning ring */}
            <div style={{
              position: "absolute",
              inset: -20,
              borderRadius: "50%",
              border: "1px dashed rgba(168, 85, 247, 0.25)",
              animation: "spin-slow 20s linear infinite",
            }}>
              {/* Ring dots */}
              {[0, 90, 180, 270].map(deg => (
                <span key={deg} style={{
                  position: "absolute",
                  width: 8, height: 8,
                  borderRadius: "50%",
                  background: deg === 0 ? "#a855f7" : deg === 90 ? "#ec4899" : deg === 180 ? "#7c3aed" : "#f472b6",
                  top: "50%", left: "50%",
                  transform: `rotate(${deg}deg) translateX(calc(50% + 60px)) translateY(-50%)`,
                }} />
              ))}
            </div>

            {/* Main circle */}
            <div style={{
              width: 260, height: 260,
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.15) 0%, rgba(12, 12, 18, 0.9) 100%)",
              border: "2px solid rgba(168, 85, 247, 0.25)",
              boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.5), inset 6px 6px 16px rgba(255, 255, 255, 0.15), inset -8px -8px 20px rgba(0, 0, 0, 0.7)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}>
              {/* Shine */}
              <div style={{
                position: "absolute",
                top: "6%", left: "12%",
                width: "55%", height: "25%",
                background: "radial-gradient(ellipse, rgba(255,255,255,0.25) 0%, transparent 80%)",
                borderRadius: "50%",
                transform: "rotate(-15deg)",
                pointerEvents: "none",
              }} />
              <img
                src="/avatar.png"
                alt="KyyMidnight Store"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* Floating skill badges */}
            {[
              {
                label: "Fast Delivery", top: -10, left: -70, color: "#10b981",
                bg: "rgba(16, 185, 129, 0.08)", border: "rgba(16, 185, 129, 0.25)",
                shadow: "0 8px 16px rgba(0,0,0,0.3), inset 2px 2px 4px rgba(255,255,255,0.15), inset -2px -2px 4px rgba(16,185,129,0.3)"
              },
              {
                label: "100% Legal", bottom: 20, right: -75, color: "#f59e0b",
                bg: "rgba(245, 158, 11, 0.08)", border: "rgba(245, 158, 11, 0.25)",
                shadow: "0 8px 16px rgba(0,0,0,0.3), inset 2px 2px 4px rgba(255,255,255,0.15), inset -2px -2px 4px rgba(245,158,11,0.3)"
              },
              {
                label: "Best Price", bottom: -20, left: -20, color: "#a855f7",
                bg: "rgba(168, 85, 247, 0.08)", border: "rgba(168, 85, 247, 0.25)",
                shadow: "0 8px 16px rgba(0,0,0,0.3), inset 2px 2px 4px rgba(255,255,255,0.15), inset -2px -2px 4px rgba(168,85,247,0.3)"
              },
            ].map(({ label, top, left, bottom, right, color, bg, border, shadow }) => (
              <div key={label} style={{
                position: "absolute",
                top, left, bottom, right,
                padding: "10px 18px",
                borderRadius: 14,
                background: bg,
                border: `1px solid ${border}`,
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                fontSize: 12,
                fontWeight: 700,
                color,
                whiteSpace: "nowrap",
                boxShadow: shadow,
                transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
                cursor: "default"
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-4px) scale(1.05)";
                  el.style.boxShadow = shadow.replace("0 8px 16px", "0 12px 24px");
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = "none";
                  el.style.boxShadow = shadow;
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "var(--text-3)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          cursor: "pointer",
          animation: "float 2.5s ease-in-out infinite",
        }} onClick={() => go("about")}>
          <span>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
        </div>
      </div>

      <style>{`
        .hidden-sm { display: block; }
        @media (max-width: 640px) { .hidden-sm { display: none; } }
        @media (max-width: 768px) {
          [style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
