const MASCOT_POSES = {
  neutral: { file: "neutral.png", label: "Kucing maskot" },
  happy: { file: "happy.png", label: "Kucing maskot sedang senang" },
  sleeping: { file: "sleeping.png", label: "Kucing maskot sedang tidur" },
  alert: { file: "alert.png", label: "Kucing maskot sedang waspada" },
  waving: { file: "waving.png", label: "Kucing maskot sedang melambai" },
  thinking: {
    file: "thinking.png",
    label: "Kucing maskot sedang berpikir",
  },
  cool: {
    file: "cool.png",
    label: "Kucing maskot memakai kacamata hitam",
  },
  focused: { file: "focused.png", label: "Kucing maskot sedang fokus" },
  coding: { file: "coding.png", label: "Kucing maskot sedang coding" },
  calm: { file: "calm.png", label: "Kucing maskot sedang santai" },
  napping: {
    file: "napping.png",
    label: "Kucing maskot sedang tidur pulas",
  },
  running: { file: "running.png", label: "Kucing maskot sedang berlari" },
  idea: { file: "idea.png", label: "Kucing maskot mendapat ide" },
  love: { file: "love.png", label: "Kucing maskot sedang jatuh cinta" },
  back: { file: "back.png", label: "Kucing maskot tampak dari belakang" },
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
      <img part="image" decoding="async">
    `;
    this.image = shadow.querySelector("img");
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
    this.image.src = new URL(
      `./public/images/mascots/${selectedPose.file}`,
      import.meta.url,
    ).href;
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
