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

/* ── SVG Icons ────────────────────────── */
const WhatsAppSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);
const TelegramSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const DiscordSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 1-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
  </svg>
);
const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7"/><path d="M7 7h10v10"/>
  </svg>
);

const SOCIALS = [
  { id: "telegram-store", label: "Telegram Store",  handle: "@kyyrblx",        href: "https://t.me/kyyrblx",           Icon: TelegramSVG,  color: "#a855f7" },
  { id: "telegram-cs",    label: "Telegram CS",     handle: "@kyyroblox",       href: "https://t.me/kyyroblox",         Icon: TelegramSVG,  color: "#0088cc" },
  { id: "whatsapp",       label: "WhatsApp CS",     handle: "0895385833237",    href: "https://wa.me/62895385833237",   Icon: WhatsAppSVG,  color: "#25d366" },
  { id: "discord",        label: "Discord CS",      handle: "@kyymidnight",     href: "https://discord.com",            Icon: DiscordSVG,   color: "#5865f2" },
  { id: "telegram-proof", label: "Transaction Proofs", handle: "@testiekyyrblx",   href: "https://t.me/testiekyyrblx",     Icon: TelegramSVG,  color: "#10b981" },
];

export default function ContactSection() {
  const { ref, vis } = useReveal();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="section" style={{ background: "var(--bg-sec)" }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{
          textAlign: "center",
          maxWidth: 560,
          margin: "0 auto",
          marginBottom: 72,
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Contact &amp; Support</p>
          <h2
            className="heading-xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginBottom: 16, color: "var(--text-1)" }}
          >
            Contact <span className="grad">Our Support</span>
          </h2>
          <p style={{ color: "#CBD5E1", lineHeight: 1.85, fontSize: "1rem" }}>
            Please reach out to our customer support through our official channels below for manual orders, product inquiries, or transaction assistance.
          </p>
        </div>

        {/* ── Social grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 16,
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(28px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}>
          {SOCIALS.map(({ id, label, handle, href, Icon, color }, i) => {
            const isHov = hovered === id;
            const clayShadow = "8px 8px 24px rgba(0, 0, 0, 0.4), inset 2px 2px 4px rgba(255, 255, 255, 0.1), inset -3px -3px 6px rgba(0, 0, 0, 0.5)";
            const clayShadowHover = `12px 12px 32px rgba(168, 85, 247, 0.18), inset 2px 2px 4px rgba(255, 255, 255, 0.18), inset -3px -3px 6px rgba(168, 85, 247, 0.255)`;
            
            return (
              <a
                key={id}
                id={`social-${id}`}
                href={href}
                target={id !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "20px 22px",
                  borderRadius: 24,
                  textDecoration: "none",
                  transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  background: "rgba(255, 255, 255, 0.035)",
                  boxShadow: clayShadow,
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
                  
                  el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale3d(1.02, 1.02, 1.02)`;
                  el.style.borderColor = "rgba(168, 85, 247, 0.3)";
                  el.style.background = "rgba(168, 85, 247, 0.08)";
                  el.style.boxShadow = clayShadowHover;
                }}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={e => {
                  setHovered(null);
                  const el = e.currentTarget;
                  el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                  el.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  el.style.background = "rgba(255, 255, 255, 0.035)";
                  el.style.boxShadow = clayShadow;
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 48, height: 48,
                  borderRadius: 16,
                  background: isHov ? "rgba(168, 85, 247, 0.15)" : "rgba(255,255,255,0.03)",
                  border: "1px solid",
                  borderColor: isHov ? "rgba(168, 85, 247, 0.3)" : "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: isHov ? "var(--primary)" : color,
                  boxShadow: isHov 
                    ? "inset 1px 1px 2px rgba(255,255,255,0.2), inset -2px -2px 4px rgba(0,0,0,0.4)"
                    : "inset 1px 1px 2px rgba(255,255,255,0.1), inset -1px -1px 2px rgba(0,0,0,0.3)",
                  transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}>
                  <Icon />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: isHov ? "var(--primary)" : "var(--text-1)",
                    marginBottom: 2,
                    fontFamily: "'Space Grotesk', sans-serif",
                    transition: "color 0.2s",
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: isHov ? "var(--primary)" : "var(--text-2)",
                    fontWeight: 600,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s",
                  }}>
                    {handle}
                  </div>
                </div>

                {/* Arrow */}
                <div style={{
                  color: isHov ? "var(--primary)" : "var(--text-3)",
                  transform: isHov ? "translate(2px, -2px)" : "translate(0,0)",
                  transition: "all 0.2s ease",
                  flexShrink: 0,
                }}>
                  <ArrowUpRight />
                </div>
              </a>
            );
          })}
        </div>

        {/* ── Footer ── */}
        <div style={{
          marginTop: 100,
          paddingTop: 40,
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          opacity: vis ? 1 : 0,
          transition: "opacity 0.8s ease 0.4s",
        }}>
          <span className="heading-xl grad-2" style={{ fontSize: "1.2rem" }}>
            KyyMidnight Store
          </span>
          <span style={{ fontSize: 12, color: "var(--text-3)", opacity: 0.8 }}>
            © {new Date().getFullYear()} KyyMidnight Store. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
}
