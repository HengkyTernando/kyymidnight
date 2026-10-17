import anime from "./public/vendor/anime.es.js";
import {
  exploringNext,
  interests,
  journey,
  navigation,
  projects,
  siteConfig,
  skillGroups,
} from "./site-content.js";

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

const mainNavigation = document.querySelector("#site-navigation");
mainNavigation.innerHTML = navigation
  .map(([label, href]) => {
    const contactClass = href === "#contact" ? ' class="nav-contact"' : "";
    const current = href === "#home" ? ' aria-current="location"' : "";
    const arrow = href === "#contact" ? ' <span aria-hidden="true">↗</span>' : "";
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
          <span class="skill-number">${escapeHtml(group.number)}</span>
          <div>
            <h3>${escapeHtml(group.title)}</h3>
            <p>${escapeHtml(group.note)}</p>
          </div>
        </div>
        <ul class="skill-tags" aria-label="${escapeHtml(group.title)}">
          ${group.skills
            .map(
              ([name, state]) => `
                <li><span>${escapeHtml(name)}</span><small>${escapeHtml(state)}</small></li>
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
        <div class="project-visual project-visual-${escapeHtml(project.visual)}" role="img" aria-label="${escapeHtml(project.visualLabel)}. ${project.visual === "kyymidnight" ? "Original artwork presented in a brand concept, not a project screenshot." : "Conceptual artwork, not a project screenshot."}">
          ${project.visual === "siswamart" ? `
            <span class="visual-kicker">discover something local</span>
            <span class="visual-large">siswa<span>mart</span></span>
            <span class="visual-bar"><i></i><i></i><i></i><i></i></span>
            <span class="visual-caption">school sellers · product discovery</span>
          ` : ""}
          ${project.visual === "kyymidnight" ? `
            <span class="visual-kicker">original artwork · ongoing identity</span>
            <img
              class="brand-mascot-art"
              src="./public/images/mascots/alert.png"
              alt=""
              loading="lazy"
              decoding="async"
            >
            <span class="visual-large visual-brand-name">Kyy<span>Midnight</span></span>
            <span class="visual-caption">blue scarf · watercolor · a little attitude</span>
          ` : ""}
          ${project.visual === "afterglow" ? `
            <span class="landscape-moon" aria-hidden="true"></span>
            <span class="landscape-hill hill-back" aria-hidden="true"></span>
            <span class="landscape-hill hill-front" aria-hidden="true"></span>
            <span class="landscape-dock" aria-hidden="true"></span>
            <span class="landscape-caption">afterglow · a quiet place to wander</span>
          ` : ""}
          <span class="visual-disclaimer">${project.visual === "kyymidnight" ? "original mascot · brand concept" : "concept preview · not a project screenshot"}</span>
        </div>
        <div class="project-content">
          <div class="project-meta">
            <span>${escapeHtml(project.category)}</span>
            <span class="project-number">${escapeHtml(project.number)}</span>
          </div>
          <div class="project-title-row">
            <h3>${escapeHtml(project.name)}</h3>
            <span class="project-status"><i></i>${escapeHtml(project.status)}</span>
          </div>
          <p class="project-description">${escapeHtml(project.description)}</p>
          <ul class="project-tags" aria-label="Project themes">
            ${project.technologies.map((technology) => `<li>${escapeHtml(technology)}</li>`).join("")}
          </ul>
          <details class="project-details">
            <summary>Project notes <span aria-hidden="true">↗</span></summary>
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
      </article>
    `,
  )
  .join("");

document.querySelector("#interest-grid").innerHTML = interests
  .map(
    (interest) => `
      <article class="interest-card ${escapeHtml(interest.tone)}">
        <div class="interest-top">
          <span class="interest-symbol" aria-hidden="true">${escapeHtml(interest.symbol)}</span>
          <span class="interest-number">${escapeHtml(interest.number)}</span>
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
      <li><span class="explore-arrow" aria-hidden="true">↗</span>${escapeHtml(topic)}</li>
    `,
  )
  .join("");

const contactAction = document.querySelector("#contact-action");
const contactNote = document.querySelector("#contact-note");
if (siteConfig.contact.email) {
  const email = escapeHtml(siteConfig.contact.email);
  contactAction.innerHTML = `<a class="button button-primary" href="mailto:${email}">Say hello <span aria-hidden="true">↗</span></a>`;
} else {
  contactAction.innerHTML = `
    <button class="button button-disabled" type="button" disabled>
      Contact details coming soon
    </button>
  `;
  contactNote.textContent =
    "No email or social links have been configured yet. Add real contact details in site-content.js when you're ready.";
}

const configuredSocials = siteConfig.contact.socials.filter(
  ({ label, url }) =>
    typeof label === "string" &&
    typeof url === "string" &&
    /^https?:\/\//.test(url),
);
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
    link.textContent = label;
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

const floatingTop = document.querySelector(".floating-top");
window.addEventListener(
  "scroll",
  () => {
    floatingTop.classList.toggle("is-visible", window.scrollY > 720);
  },
  { passive: true },
);

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

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
      duration: 760,
    },
  });

  intro
    .add({
      targets: ".hero-copy > *",
      opacity: [0, 1],
      translateY: [16, 0],
      delay: anime.stagger(100),
    })
    .add(
      {
        targets: ".moon-halo, .orbit, .star, .art-caption, .wave",
        opacity: [0, 1],
        delay: anime.stagger(75),
        duration: 850,
      },
      0,
    )
    .add(
      {
        targets: ".hero-mascot",
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 900,
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
      duration: 4600,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: ".moon-halo",
      opacity: [0.78, 1],
      duration: 3600,
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

  const reveal = (targets) => {
    anime({
      targets,
      opacity: [0, 1],
      translateY: [18, 0],
      delay: anime.stagger(90),
      duration: 740,
      easing: "easeOutCubic",
    });
  };

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        const visibleTargets = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target);

        if (visibleTargets.length === 0) return;

        revealObserver.unobserve(visibleTargets[0]);
        for (const target of visibleTargets.slice(1)) {
          revealObserver.unobserve(target);
        }
        reveal(visibleTargets);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
  } else {
    reveal(revealTargets);
  }
};

document.addEventListener("visibilitychange", initializeAnimations);
initializeAnimations();
