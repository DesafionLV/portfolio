import { useEffect, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { AudienceSection } from "./components/AudienceSection";
import { BusinessResultsSection } from "./components/BusinessResultsSection";
import { CasesSection } from "./components/CasesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { JourneySection } from "./components/JourneySection";
import { MetricsSection } from "./components/MetricsSection";
import { Navigation } from "./components/Navigation";
import { OpenSourceSection } from "./components/OpenSourceSection";
import { ProjectStackSection } from "./components/ProjectStackSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { ScrollProgress } from "./components/ScrollProgress";
import { WhyChooseMeSection } from "./components/WhyChooseMeSection";
import { seoTopics } from "./content";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
    ) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollProgress />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_26%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:72px_72px] dark:opacity-15" />

      <Navigation
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
          )
        }
      />

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <BusinessResultsSection />
        <CasesSection />
        <AudienceSection />
        <WhyChooseMeSection />
        <ProjectStackSection />
        <RoadmapSection />
        <MetricsSection />
        <OpenSourceSection />
        <JourneySection />
        <ContactSection />

        <section className="sr-only" aria-hidden="true">
          <h2>SEO Topics</h2>
          {seoTopics.map((topic) => (
            <p key={topic}>{topic}</p>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
