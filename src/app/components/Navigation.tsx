import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import {
  mobileDockItems,
  navigationItems,
} from "../content";
import { scrollToSection } from "../utils/scroll";
import { ThemeToggle } from "./ThemeToggle";

type NavigationProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export function Navigation({ theme, onToggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    navigationItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-[28px] border px-4 py-3 transition-all duration-300 sm:px-6 ${
            isScrolled
              ? "border-border bg-background/80 shadow-[0_20px_60px_rgba(3,9,24,0.14)] backdrop-blur-2xl dark:shadow-[0_20px_60px_rgba(2,6,23,0.55)]"
              : "border-transparent bg-background/40 backdrop-blur-md"
          }`}
        >
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left"
          >
            <div className="font-['Space_Grotesk',sans-serif] text-lg font-bold sm:text-xl">
              <span className="text-primary">desafio</span>
              <span className="text-foreground">.tech</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Aliyar Janabayev • Full Stack x AI x Builder
            </div>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[0_12px_30px_rgba(16,185,129,0.35)]"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <button
              type="button"
              onClick={() => handleNavigate("contact")}
              className="hidden rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(16,185,129,0.35)] sm:inline-flex"
            >
              Связаться
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card/80 lg:hidden"
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-background/92 px-6 pb-10 pt-28 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto flex h-full max-w-xl flex-col justify-between rounded-[32px] border border-border bg-card/80 p-6">
            <div className="space-y-3">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigate(item.id)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/60 text-foreground"
                    }`}
                  >
                    <span className="text-base font-semibold">{item.label}</span>
                    <span className="text-sm opacity-75">#{item.id}</span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[28px] border border-border bg-background/70 p-5">
              <div className="text-sm font-semibold text-foreground">
                Builder profile
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Строю цифровые продукты, AI automation и startup MVP с фокусом на
                полезность, визуал и реальный запуск.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="fixed inset-x-0 bottom-4 z-40 px-4 lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-2 rounded-[26px] border border-border bg-background/82 p-2 shadow-[0_18px_40px_rgba(4,10,25,0.18)] backdrop-blur-2xl dark:shadow-[0_18px_40px_rgba(2,6,23,0.55)]">
          {mobileDockItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={`rounded-2xl px-3 py-3 text-center text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.shortLabel ?? item.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
