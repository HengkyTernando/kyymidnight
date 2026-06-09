import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main
      className="relative min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
