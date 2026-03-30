import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, FileText, ImageIcon, Repeat2, Sparkles } from "lucide-react";
import lightThemeProfileImage from "../../assets/aliyar-profile-light.webp";
import darkThemeProfileImage from "../../assets/aliyar-profile-dark.webp";
import { heroStats, stackOverview } from "../content";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { scrollToSection } from "../utils/scroll";

export function HeroSection() {
  const [isProfileFlipped, setIsProfileFlipped] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const isShowingBack = isProfileHovered || isProfileFlipped;
  const profileStatusCards = [
    {
      title: "WHAIS",
      note: "main platform",
      status: "in development",
      tone: "text-primary",
      badge: "bg-primary/10 text-primary border-primary/20",
    },
    {
      title: "AI Editor",
      note: "hackathon project",
      status: "for ZhezU",
      tone: "text-secondary",
      badge: "bg-secondary/10 text-secondary border-secondary/20",
    },
    {
      title: "UlytauGIS",
      note: "strategic idea",
      status: "on hold",
      tone: "text-foreground",
      badge: "bg-muted text-muted-foreground border-border",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
      <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            builder mindset • AI x startup
          </div>

          <h1 className="mt-6 font-['Space_Grotesk',sans-serif] text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Full Stack Developer
            <span className="mt-3 block bg-gradient-to-r from-primary via-emerald-400 to-secondary bg-clip-text text-transparent">
              AI Automation Engineer и Startup Builder
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Я молодой технарь и предприниматель, который мыслит как builder: собираю
            цифровые продукты, AI-автоматизации и платформы на стыке разработки,
            стартап-мышления и сильной упаковки.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection("cases")}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(16,185,129,0.35)]"
            >
              Посмотреть проекты
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center rounded-2xl border border-border bg-card/80 px-7 py-4 font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-muted"
            >
              Связаться со мной
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:max-w-xl">
            {heroStats.map((stat, index) => (
              <div key={stat.label}>
                <div
                  className={`text-3xl font-bold ${
                    index === 1
                      ? "text-secondary"
                      : index === 2
                        ? "text-emerald-500"
                        : "text-primary"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-6 right-0 h-44 w-44 rounded-full bg-secondary/20 blur-3xl" />

          <button
            type="button"
            onClick={() => setIsProfileFlipped((current) => !current)}
            onMouseEnter={() => setIsProfileHovered(true)}
            onMouseLeave={() => setIsProfileHovered(false)}
            onFocus={() => setIsProfileHovered(true)}
            onBlur={() => setIsProfileHovered(false)}
            aria-pressed={isProfileFlipped}
            aria-label={
              isShowingBack
                ? "Показать лицевую сторону карточки"
                : "Показать обратную сторону карточки"
            }
            className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            style={{ perspective: "1800px", touchAction: "manipulation" }}
          >
            <div className="pointer-events-none absolute -right-3 top-1/2 z-20 -translate-y-1/2">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ x: [0, 4, 0], scale: [1, 1.04, 1] }}
                  transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background/92 shadow-[0_18px_40px_rgba(6,18,29,0.12)] backdrop-blur-xl"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5.5v6.5" />
                    <path d="M9.7 10.4V9.2a1 1 0 0 1 2 0v3.2" />
                    <path d="M14.3 11V9.8a1 1 0 0 1 2 0v4.1" />
                    <path d="M7.2 12v-.8a1 1 0 0 1 2 0v2.7" />
                    <path d="M16.3 14.1l1 .8a2.5 2.5 0 0 1 .9 2v.4A3.7 3.7 0 0 1 14.5 21h-1.9a4 4 0 0 1-2.7-1l-2-1.8A3.2 3.2 0 0 1 6.8 16v-1.7a1.1 1.1 0 0 1 2.1-.4l.8 1.5" />
                    <path d="M14.8 4.2c1.4.4 2.5 1.5 2.9 2.9" opacity="0.65" />
                    <path d="M17.2 3a3.9 3.9 0 0 1 3.8 3.8" opacity="0.45" />
                  </svg>
                </motion.div>

                <div className="flex flex-col items-center gap-2 rounded-full border border-primary/20 bg-background/88 px-2 py-3 shadow-[0_18px_40px_rgba(6,18,29,0.12)] backdrop-blur-xl">
                  <FileText className="h-4 w-4 text-primary" />
                  <Repeat2 className="h-4 w-4 text-secondary" />
                  <ImageIcon className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                rotateY: isShowingBack ? 180 : -10,
                rotateZ: isShowingBack ? 0 : 1,
                rotateX: isShowingBack ? 0 : 2,
                y: isProfileHovered ? -4 : 0,
                x: isShowingBack ? 0 : 4,
                scale: isShowingBack ? 1 : 0.996,
              }}
              transition={{ type: "spring", stiffness: 135, damping: 18 }}
              whileTap={{ scale: 0.985 }}
              className="relative grid min-h-[560px] sm:min-h-[680px]"
              style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
            >
              <div
                className="[grid-area:1/1]"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                <div className="glass-card relative overflow-hidden p-4 sm:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,167,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.18),transparent_30%)]" />
                  <div className="pointer-events-none absolute inset-y-8 -right-3 w-6 rounded-full bg-gradient-to-r from-transparent via-primary/20 to-primary/35 blur-sm" />

                  <div className="relative flex flex-col">
                    <div className="mb-4 flex items-center justify-between gap-4 sm:mb-6">
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                          Builder profile
                        </div>
                        <div className="mt-1 text-xl font-bold sm:text-2xl">
                          От идеи до запуска
                        </div>
                      </div>
                      <div className="h-9 w-9 rounded-full border border-primary/20 bg-primary/10 sm:h-10 sm:w-10" />
                    </div>

                    <div className="flex flex-col rounded-[28px] border border-border bg-background/70 p-4 sm:p-5 lg:p-4">
                      <div>
                        <div className="grid grid-cols-3 gap-3 sm:gap-4">
                          {stackOverview.map((item, index) => {
                            const Icon = item.icon;

                            return (
                              <div
                                key={item.title}
                                className={`rounded-3xl border border-border p-3 transition-transform duration-300 group-hover:-translate-y-1 sm:p-4 lg:p-3 ${
                                  index === 1 ? "bg-secondary/10" : "bg-muted/60"
                                }`}
                              >
                                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-background sm:h-11 sm:w-11">
                                  <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                                </div>
                                <div className="mt-3 text-xs font-semibold leading-5 sm:mt-4 sm:text-base lg:mt-3 lg:text-sm">
                                  {item.title}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-4 rounded-[24px] border border-border bg-card/80 p-4 sm:mt-5 sm:p-5 lg:p-4">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                Workflow
                              </div>
                              <div className="mt-2 text-lg font-bold sm:text-xl lg:text-lg">
                                Idea → MVP → Brand → Launch
                              </div>
                            </div>
                            <div className="hidden rounded-2xl bg-primary/10 px-4 py-2 text-sm font-semibold text-primary sm:block">
                              startup mindset
                            </div>
                          </div>

                          <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
                            {[
                              "Разбираю проблему, аудиторию и смысл продукта.",
                              "Собираю MVP, архитектуру, визуал и AI-слой.",
                              "Готовлю запуск и понятную логику роста.",
                            ].map((line) => (
                              <div
                                key={line}
                                className="rounded-2xl border border-border bg-background/60 px-3 py-2.5 text-xs leading-5 text-muted-foreground sm:px-4 sm:py-3 sm:text-sm sm:leading-6 lg:px-3.5 lg:py-2.5"
                              >
                                {line}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-[24px] border border-border bg-card/70 p-4 lg:mt-5">
                        <div className="flex items-center justify-between gap-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            Current board
                          </div>
                          <div className="h-px flex-1 bg-border" />
                        </div>

                        <div className="mt-4 grid gap-3 sm:grid-cols-3">
                          {profileStatusCards.map((item) => (
                            <div
                              key={item.title}
                              className="rounded-[22px] border border-border bg-background/65 p-3"
                            >
                              <div className={`text-sm font-bold ${item.tone}`}>{item.title}</div>
                              <div className="mt-1 text-xs leading-5 text-muted-foreground">
                                {item.note}
                              </div>
                              <div
                                className={`mt-3 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${item.badge}`}
                              >
                                {item.status}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="[grid-area:1/1]"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="glass-card relative overflow-hidden p-4 sm:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(90,167,255,0.22),transparent_34%)]" />

                  <div className="relative flex flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                          Photo side
                        </div>
                        <div className="mt-1 text-xl font-bold sm:text-2xl">
                          Aliyar Janabayev
                        </div>
                      </div>
                      <div className="h-9 w-9 rounded-full border border-secondary/20 bg-secondary/10 sm:h-10 sm:w-10" />
                    </div>

                    <div className="mt-4 flex flex-col rounded-[28px] border border-border bg-background/75 p-4 sm:mt-6 sm:p-5">
                      <div className="relative flex-1 overflow-hidden rounded-[24px] border border-primary/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.12),rgba(90,167,255,0.18))] p-3 sm:p-4">
                        <div className="mx-auto aspect-[2/3] w-full max-w-[320px] overflow-hidden rounded-[20px] sm:max-w-[360px] lg:max-w-[400px]">
                          <ImageWithFallback
                            src={lightThemeProfileImage}
                            alt="Aliyar Janabayev portrait for light theme"
                            className="h-full w-full object-cover object-center dark:hidden"
                          />
                          <ImageWithFallback
                            src={darkThemeProfileImage}
                            alt="Aliyar Janabayev portrait for dark theme"
                            className="hidden h-full w-full object-cover object-center dark:block"
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_28%),linear-gradient(180deg,transparent_55%,rgba(6,18,29,0.22))]" />
                        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/20 bg-background/52 px-3 py-2 text-xs font-semibold text-foreground/85 backdrop-blur-md">
                          <span>Photo side</span>
                          <span className="rounded-full border border-foreground/10 bg-foreground/5 px-2 py-1 text-foreground dark:border-primary/20 dark:bg-primary/10 dark:text-primary">
                            auto theme
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
