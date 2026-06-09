"use client";

import { useState, useEffect } from "react";

const NAV = [
  { label: "Home",     href: "home" },
  { label: "About Us", href: "about" },
  { label: "Contact",  href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("home");
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = NAV.map(n => n.href).reverse();
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(12, 13, 20, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", height: 68, justifyContent: "space-between" }}>
          {/* Logo */}
          <button
            onClick={() => go("home")}
            className="heading-xl grad-2"
            style={{ fontSize: 18, background: "none", border: "none", cursor: "pointer" }}
          >
            KyyMidnight Store
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {NAV.map(n => {
              const isActive = active === n.href;
              return (
                <button
                  key={n.href}
                  onClick={() => go(n.href)}
                  style={{
                    background: isActive ? "rgba(168, 85, 247, 0.12)" : "transparent",
                    border: "1px solid",
                    borderColor: isActive ? "rgba(168, 85, 247, 0.25)" : "transparent",
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 600,
                    color: isActive ? "var(--primary)" : "var(--text-2)",
                    boxShadow: isActive 
                      ? "0 4px 10px rgba(168, 85, 247, 0.15), inset 1px 1px 2px rgba(255, 255, 255, 0.15), inset -2px -2px 4px rgba(0, 0, 0, 0.3)" 
                      : "none",
                    transition: "all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      const el = e.currentTarget;
                      el.style.color = "var(--primary)";
                      el.style.background = "rgba(255, 255, 255, 0.02)";
                      el.style.borderColor = "rgba(255, 255, 255, 0.08)";
                      el.style.boxShadow = "inset 1px 1px 2px rgba(255, 255, 255, 0.05), inset -1px -1px 2px rgba(0, 0, 0, 0.2)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      const el = e.currentTarget;
                      el.style.color = "var(--text-2)";
                      el.style.background = "transparent";
                      el.style.borderColor = "transparent";
                      el.style.boxShadow = "none";
                    }
                  }}
                >
                  {n.label}
                </button>
              );
            })}
            <button
              className="btn-primary"
              onClick={() => go("contact")}
              style={{ marginLeft: 18, padding: "10px 20px", fontSize: 13, borderRadius: 14 }}
            >
              Order Now
            </button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col items-center justify-center"
            style={{
              background: open ? "rgba(168, 85, 247, 0.15)" : "rgba(255, 255, 255, 0.03)",
              border: open ? "1px solid rgba(168, 85, 247, 0.3)" : "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 12,
              width: 40, height: 40,
              cursor: "pointer",
              gap: 5,
              boxShadow: open 
                ? "0 4px 8px rgba(168, 85, 247, 0.2), inset 1px 1px 2px rgba(255, 255, 255, 0.2), inset -2px -2px 4px rgba(0, 0, 0, 0.4)"
                : "0 2px 5px rgba(0, 0, 0, 0.2), inset 1px 1px 2px rgba(255, 255, 255, 0.05), inset -1px -1px 2px rgba(0, 0, 0, 0.3)",
              transition: "all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            {[0,1,2].map(i => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: i === 1 ? (open ? 0 : 16) : 20,
                  height: 2,
                  background: "var(--text-1)",
                  borderRadius: 2,
                  transition: "all 0.3s",
                  opacity: i === 1 && open ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div style={{
        position: "fixed",
        inset: "68px 0 0 0",
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
        padding: "24px",
        gap: 8,
        background: "rgba(15, 16, 25, 0.97)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.05)",
        transform: open ? "translateY(0)" : "translateY(-110%)",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: open ? "auto" : "none",
      }}
        className="md:hidden flex"
      >
        {NAV.map(n => {
          const isActive = active === n.href;
          return (
            <button
              key={n.href}
              onClick={() => go(n.href)}
              style={{
                background: isActive ? "rgba(168, 85, 247, 0.12)" : "rgba(255, 255, 255, 0.01)",
                border: "1px solid",
                borderColor: isActive ? "rgba(168, 85, 247, 0.25)" : "rgba(255, 255, 255, 0.04)",
                borderRadius: 14,
                padding: "14px 18px",
                textAlign: "left",
                fontSize: 15,
                fontWeight: 600,
                color: isActive ? "var(--primary)" : "var(--text-2)",
                cursor: "pointer",
                fontFamily: "inherit",
                boxShadow: isActive 
                  ? "0 4px 10px rgba(168, 85, 247, 0.15), inset 1px 1px 2px rgba(255, 255, 255, 0.15), inset -2px -2px 4px rgba(0, 0, 0, 0.3)"
                  : "none",
                transition: "all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              {n.label}
            </button>
          );
        })}
        <button
          onClick={() => go("contact")}
          className="btn-primary"
          style={{ marginTop: 12, justifyContent: "center", borderRadius: 14 }}
        >
          Order Now
        </button>
      </div>


    </>
  );
}
