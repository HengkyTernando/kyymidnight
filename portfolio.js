import anime from "./public/vendor/anime.es.js";
import {
  exploringNext,
  interests,
  journey,
  navigation,
  projects,
  siteConfig,
  skillGroups,
} from "./site-content.js?v=11";

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

const arrowIcon = (direction = "northeast") => {
  const paths = {
    northeast: "M7 17 17 7M8 7h9v9",
    right: "M5 12h14m-6-6 6 6-6 6",
    down: "M12 5v14m-7-7 7 7 7-7",
    up: "M12 19V5m-7 7 7-7 7 7",
    chevronDown: "m6 9 6 6 6-6",
  };
  return `<svg class="line-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${paths[direction]}"></path></svg>`;
};

const interestIcons = {
  "interest-music": '<svg viewBox="0 0 24 24" focusable="false"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>',
  "interest-design": '<svg viewBox="0 0 24 24" focusable="false"><path d="M5 5h14M12 5v14"></path><path d="M7 19h10"></path></svg>',
  "interest-tech": '<svg viewBox="0 0 24 24" focusable="false"><path d="m9 8-4 4 4 4m6-8 4 4-4 4m-2-11-2 14"></path></svg>',
  "interest-outdoors": '<svg viewBox="0 0 24 24" focusable="false"><circle cx="15" cy="5" r="2"></circle><path d="m13 8-4 5 4 2 2 5m-6-8-4-1-2 3m12-4 4 1"></path></svg>',
};

const mainNavigation = document.querySelector("#site-navigation");
mainNavigation.innerHTML = navigation
  .map(([label, href]) => {
    const contactClass = href === "#contact" ? ' class="nav-contact"' : "";
    const current = href === "#home" ? ' aria-current="location"' : "";
    const arrow = href === "#contact" ? ` ${arrowIcon("down")}` : "";
    return `<a href="${escapeHtml(href)}"${contactClass}${current}>${escapeHtml(label)}${arrow}</a>`;
  })
  .join("");

document.querySelector(".footer-nav").innerHTML = navigation
  .map(
    ([label, href]) =>
      `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`,
  )
  .join("");

const skillList = document.querySelector("#skill-list");
skillList.innerHTML = skillGroups
  .map(
    (group) => `
      <article class="skill-group">
        <div class="skill-group-heading">
          <div>
            <h3>${escapeHtml(group.title)}</h3>
            <p>${escapeHtml(group.note)}</p>
          </div>
        </div>
        <ul class="skill-tags" aria-label="${escapeHtml(group.title)}">
          ${group.skills
            .map(
              ([name, state]) => `
                <li><span>${escapeHtml(name)}</span><small data-state="${escapeHtml(state)}">${escapeHtml(state)}</small></li>
              `,
            )
            .join("")}
        </ul>
      </article>
    `,
  )
  .join("");

document.querySelector("#project-grid").innerHTML = projects
  .map(
    (project) => `
      <article class="project-card">
        <div class="project-visual project-visual-${escapeHtml(project.visual)}" role="img" aria-label="${escapeHtml(project.visualLabel)}. ${project.visual === "kyymidnight" ? "Original artwork presented in a brand concept." : "Illustrated to reflect the live website’s homepage."}">
          ${project.visual === "siswamart" ? `
            <div class="siswamart-preview" lang="id">
              <div class="siswamart-preview-nav">
                <span class="siswamart-preview-logo">SiswaMart</span>
                <span class="siswamart-preview-actions" aria-hidden="true"><i></i><i></i></span>
              </div>
              <div class="siswamart-preview-location">Untuk saat ini, SiswaMart melayani penjualan di area SMKN 11 Bandung.</div>
              <div class="siswamart-preview-hero">
                <div class="siswamart-preview-copy">
                  <span>MAKAN ENAK.</span>
                  <strong>BUATAN TEMAN SENDIRI.</strong>
                  <p>Temukan makanan dan minuman karya siswa, pesan langsung lewat WhatsApp.</p>
                  <div class="siswamart-preview-buttons"><i>JELAJAHI KATALOG</i><i>CARA MEMESAN</i></div>
                </div>
                <img src="./public/images/projects/siswamart-food.webp" alt="" width="1024" height="1024" loading="lazy" decoding="async">
              </div>
              <div class="siswamart-preview-categories"><i>DESSERT</i><i>MAKANAN BERAT</i><i>MINUMAN</i><i>SNACK</i></div>
            </div>
          ` : ""}
          ${project.visual === "kyymidnight" ? `
            <span class="visual-kicker">original artwork · ongoing identity</span>
            <img
              class="brand-mascot-art"
              src="./public/images/mascots/alert.webp"
              alt=""
              width="316"
              height="342"
              loading="lazy"
              decoding="async"
            >
            <span class="visual-large visual-brand-name">kyy<span>midnight</span></span>
            <span class="visual-caption">blue scarf · watercolor · a little attitude</span>
          ` : ""}
          ${project.visual === "kyymidnight" ? '<span class="visual-disclaimer">original mascot · brand concept</span>' : ""}
        </div>
        <div class="project-content">
          <div class="project-meta">
            <span>${escapeHtml(project.category)}</span>
          </div>
          <div class="project-title-row">
            <h3>${escapeHtml(project.name)}</h3>
            <span class="project-status status-pill status-${/live/i.test(project.status) ? "live" : /concept/i.test(project.status) ? "concept" : "ongoing"}"><i></i>${escapeHtml(project.status)}</span>
          </div>
          <p class="project-description">${escapeHtml(project.description)}</p>
          <ul class="project-tags" aria-label="Project themes">
            ${project.technologies.map((technology) => `<li>${escapeHtml(technology)}</li>`).join("")}
          </ul>
          <div class="project-actions">
            ${project.href ? `<a class="project-link" href="${escapeHtml(project.href)}" target="_blank" rel="noopener noreferrer">Visit live website ${arrowIcon()}</a>` : ""}
            <details class="project-details">
              <summary>Project notes <span>${arrowIcon("chevronDown")}</span></summary>
              <dl>
                ${project.notes
                  .map(
                    ([term, detail]) => `
                      <div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(detail)}</dd></div>
                    `,
                  )
                  .join("")}
              </dl>
            </details>
          </div>
        </div>
      </article>
    `,
  )
  .join("");

document.querySelector("#interest-grid").innerHTML = interests
  .map(
    (interest) => `
      <article class="interest-card card ${escapeHtml(interest.tone)}">
        <div class="interest-top">
          <span class="interest-symbol" aria-hidden="true">${interestIcons[interest.tone]}</span>
        </div>
        <h3>${escapeHtml(interest.title)}</h3>
        <p>${escapeHtml(interest.description)}</p>
      </article>
    `,
  )
  .join("");

document.querySelector("#timeline").innerHTML = journey
  .map(
    ([title, detail], index) => `
      <article class="timeline-item">
        <span class="timeline-marker">${String(index + 1).padStart(2, "0")}</span>
        <div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(detail)}</p></div>
        ${index === journey.length - 1 ? '<span class="timeline-now">and onward</span>' : ""}
      </article>
    `,
  )
  .join("");

document.querySelector("#explore-list").innerHTML = exploringNext
  .map(
    (topic) => `
      <li><span class="explore-bullet" aria-hidden="true"></span>${escapeHtml(topic)}</li>
    `,
  )
  .join("");

const contactAction = document.querySelector("#contact-action");
const contactNote = document.querySelector("#contact-note");
if (siteConfig.contact.whatsapp) {
  const whatsapp = siteConfig.contact.whatsapp.replace(/\D/g, "");
  if (!whatsapp) {
    throw new Error("siteConfig.contact.whatsapp must contain a valid phone number.");
  }
  contactAction.innerHTML = `
    <a class="button button-primary" href="https://wa.me/${encodeURIComponent(whatsapp)}" target="_blank" rel="noopener noreferrer">
      Chat on WhatsApp ${arrowIcon()}
    </a>
  `;
} else if (siteConfig.contact.email) {
  const email = escapeHtml(siteConfig.contact.email);
  contactAction.innerHTML = `<a class="button button-primary" href="mailto:${email}">Say hello ${arrowIcon()}</a>`;
} else {
  contactAction.innerHTML = `
    <button class="button button-disabled" type="button" disabled>
      Contact details coming soon
    </button>
  `;
  contactNote.textContent =
    "No email or social links have been configured yet. Add real contact details in site-content.js when you’re ready.";
}

const configuredSocials = siteConfig.contact.socials.filter(
  ({ label, url }) =>
    typeof label === "string" &&
    typeof url === "string" &&
    /^https?:\/\//.test(url),
);
const socialIcons = {
  Instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <circle class="icon-fill" cx="17.5" cy="6.5" r="1"></circle>
    </svg>
  `,
  TikTok: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14.5 4v10.2a4.5 4.5 0 1 1-4.5-4.5c.4 0 .8.1 1.2.2v3.3a1.5 1.5 0 1 0 0 2V4h3.3c.3 1.8 1.7 3.2 3.5 3.5v3.3a8.8 8.8 0 0 1-3.5-.8"></path>
    </svg>
  `,
  Discord: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M19.7 5.2a18 18 0 0 0-4.4-1.4l-.6 1.3a16.7 16.7 0 0 0-5.4 0l-.6-1.3a18 18 0 0 0-4.4 1.4C1.5 9.3.7 13.3 1.1 17.2a18 18 0 0 0 5.4 2.7l1.2-2a11.8 11.8 0 0 1-1.9-.9l.5-.4a12.8 12.8 0 0 0 11.4 0l.5.4a11.8 11.8 0 0 1-1.9.9l1.2 2a18 18 0 0 0 5.4-2.7c.5-4.5-.8-8.5-3.2-12Z"></path>
      <circle cx="8.7" cy="12.9" r="1"></circle>
      <circle cx="15.3" cy="12.9" r="1"></circle>
    </svg>
  `,
};
if (configuredSocials.length) {
  const socialList = document.createElement("ul");
  socialList.className = "social-links";
  socialList.setAttribute("aria-label", "Social links");
  for (const { label, url } of configuredSocials) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = `social-link social-link-${label.toLowerCase()}`;
    const socialUrl = new URL(url);
    const socialTarget = label === "Discord"
      ? `${socialUrl.hostname}${socialUrl.pathname.replace(/\/$/, "")}`
      : `@${socialUrl.pathname.split("/").filter(Boolean).at(-1)?.replace(/^@/, "") ?? label}`;
    link.setAttribute("aria-label", `${label}: ${socialTarget}`);
    link.title = `${label}: ${socialTarget}`;
    link.innerHTML =
      `${socialIcons[label]?.replace(/class="icon-fill"/g, "") ??
      `<span class="social-link-fallback">${escapeHtml(label)}</span>`}<span class="social-link-label">${escapeHtml(socialTarget)}</span>`;
    item.append(link);
    socialList.append(item);
  }
  contactAction.append(socialList);
}

document.querySelector("#year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = mainNavigation;
const mobileNavigation = window.matchMedia("(max-width: 700px)");
siteNav.inert = mobileNavigation.matches;
const setMenuOpen = (open) => {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  siteNav.inert = mobileNavigation.matches && !open;
  document.body.classList.toggle("menu-open", open);
};

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

mobileNavigation.addEventListener("change", () => {
  setMenuOpen(false);
});

const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      for (const link of sectionLinks) {
        if (link.getAttribute("href") === `#${visible.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      }
    },
    { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.35] },
  );
  sections.forEach((section) => observer.observe(section));
}

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const animationDuration = (token) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();
  const duration = Number.parseFloat(value);
  if (!Number.isFinite(duration)) {
    throw new Error(`Missing animation duration token: ${token}`);
  }
  return duration;
};

const heroMascot = document.querySelector(".hero-mascot");
const mascotMoodStatus = document.querySelector("#mascot-mood-status");
const mascotMoods = [
  "neutral",
  "happy",
  "idea",
  "love",
  "cool",
  "thinking",
  "alert",
  "waving",
  "coding",
  "focused",
  "calm",
];
let mascotMoodIndex = 0;

const changeMascotMood = () => {
  mascotMoodIndex = (mascotMoodIndex + 1) % mascotMoods.length;
  const mood = mascotMoods[mascotMoodIndex];
  heroMascot.setAttribute("pose", mood);
  mascotMoodStatus.textContent = `Mascot mood: ${mood}.`;
};

heroMascot.addEventListener("click", changeMascotMood);
heroMascot.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  changeMascotMood();
});

motionPreference.addEventListener("change", (event) => {
  if (!event.matches) return;
  anime.remove(".hero-mascot, .moon-halo");
  document
    .querySelectorAll(".scroll-reveal")
    .forEach((element) => element.classList.add("is-visible"));
});

const initializeAnimations = () => {
  if (
    motionPreference.matches ||
    document.visibilityState !== "visible"
  ) {
    return;
  }

  document.removeEventListener("visibilitychange", initializeAnimations);

  const intro = anime.timeline({
    defaults: {
      easing: "easeOutCubic",
      duration: animationDuration("--motion-intro"),
    },
  });

  intro
    .add({
      targets: ".hero-copy > *",
      opacity: [0, 1],
      translateY: [16, 0],
      delay: anime.stagger(animationDuration("--motion-stagger")),
    })
    .add(
      {
        targets: ".moon-halo, .orbit, .star, .art-caption, .wave",
        opacity: [0, 1],
        delay: anime.stagger(animationDuration("--motion-stagger-secondary")),
        duration: animationDuration("--motion-fade"),
      },
      0,
    )
    .add(
      {
        targets: ".hero-mascot",
        opacity: [0, 1],
        translateY: [10, 0],
        duration: animationDuration("--motion-mascot"),
      },
      "-=720",
    );

  intro.finished.then(() => {
    if (
      motionPreference.matches ||
      document.visibilityState !== "visible"
    ) {
      return;
    }

    anime({
      targets: ".hero-mascot",
      translateY: [0, -7],
      duration: animationDuration("--motion-ambient-float"),
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: ".moon-halo",
      opacity: [0.78, 1],
      duration: animationDuration("--motion-ambient-glow"),
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
    });
  });

  const revealSelector = [
    ".section-heading",
    ".about-copy",
    ".about-figure",
    ".principles .principle",
    ".personal-quote",
    ".skill-group",
    ".skills-note",
    ".project-card",
    ".project-footnote",
    ".interest-card",
    ".hobby-mascot",
    ".timeline-item",
    ".journey-quote",
    ".exploring-layout > *",
    ".contact-copy",
    ".contact-art",
  ].join(", ");
  const revealTargets = [...document.querySelectorAll(revealSelector)];

  if ("IntersectionObserver" in window) {
    revealTargets.forEach((target) => target.classList.add("scroll-reveal"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.05 },
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
  }
};

document.addEventListener("visibilitychange", initializeAnimations);
initializeAnimations();
