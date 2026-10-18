const MASCOT_POSES = {
  neutral: { file: "neutral.webp", label: "Kucing maskot" },
  happy: { file: "happy.webp", label: "Kucing maskot sedang senang" },
  sleeping: { file: "sleeping.webp", label: "Kucing maskot sedang tidur" },
  alert: { file: "alert.webp", label: "Kucing maskot sedang waspada" },
  waving: { file: "waving.webp", label: "Kucing maskot sedang melambai" },
  thinking: {
    file: "thinking.webp",
    label: "Kucing maskot sedang berpikir",
  },
  cool: {
    file: "cool.webp",
    label: "Kucing maskot memakai kacamata hitam",
  },
  focused: { file: "focused.webp", label: "Kucing maskot sedang fokus" },
  coding: { file: "coding.webp", label: "Kucing maskot sedang coding" },
  calm: { file: "calm.webp", label: "Kucing maskot sedang santai" },
  napping: {
    file: "napping.webp",
    label: "Kucing maskot sedang tidur pulas",
  },
  running: { file: "running.webp", label: "Kucing maskot sedang berlari" },
  idea: { file: "idea.webp", label: "Kucing maskot mendapat ide" },
  love: { file: "love.webp", label: "Kucing maskot sedang jatuh cinta" },
  back: { file: "back.webp", label: "Kucing maskot tampak dari belakang" },
};

const getMotionDuration = (token) => {
  const duration = Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(token),
  );
  if (!Number.isFinite(duration)) {
    throw new Error(`Missing animation duration token: ${token}`);
  }
  return duration;
};

class CodingMascot extends HTMLElement {
  static get observedAttributes() {
    return ["pose", "label", "loading"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: var(--mascot-size, 180px);
          aspect-ratio: 1;
          vertical-align: middle;
        }

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      </style>
      <img part="image" width="305" height="330" decoding="async">
    `;
    this.image = shadow.querySelector("img");
    this.currentPose = null;
    this.imageAnimation = null;
  }

  connectedCallback() {
    this.update();
  }

  attributeChangedCallback() {
    this.update();
  }

  update() {
    if (!this.image) return;

    const requestedPose = this.getAttribute("pose") || "coding";
    const pose = MASCOT_POSES[requestedPose];
    if (!pose) {
      console.warn(
        `<coding-mascot>: pose "${requestedPose}" tidak dikenal. ` +
          `Pilihan: ${Object.keys(MASCOT_POSES).join(", ")}.`,
      );
    }

    const selectedPose = pose || MASCOT_POSES.coding;
    if (selectedPose !== this.currentPose) {
      this.image.src = new URL(
        `./public/images/mascots/${selectedPose.file}`,
        import.meta.url,
      ).href;
      if (
        this.currentPose &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
        typeof this.image.animate === "function"
      ) {
        this.imageAnimation?.cancel();
        this.imageAnimation = this.image.animate(
          [
            { opacity: 0.72, transform: "scale(0.96) rotate(-2deg)" },
            { opacity: 1, transform: "scale(1.03) rotate(1deg)", offset: 0.55 },
            { opacity: 1, transform: "scale(1) rotate(0deg)" },
          ],
          {
            duration: getMotionDuration("--motion-medium"),
            easing: "ease-out",
          },
        );
      }
      this.currentPose = selectedPose;
    }
    this.image.loading = this.getAttribute("loading") === "eager" ? "eager" : "lazy";

    const label = this.hasAttribute("label")
      ? this.getAttribute("label")
      : selectedPose.label;
    if (label) {
      this.image.alt = label;
      this.image.removeAttribute("aria-hidden");
    } else {
      this.image.alt = "";
      this.image.setAttribute("aria-hidden", "true");
    }
  }
}

if (!customElements.get("coding-mascot")) {
  customElements.define("coding-mascot", CodingMascot);
}
