import { motion } from "motion/react";
import { MapPin, Rocket, Sparkles, Workflow } from "lucide-react";
import { aboutExpertise } from "../content";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="section-gap px-6">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Кто я"
          title="Я не просто изучаю разработку — я строю продукты, сервисы и возможности вокруг себя"
          description="Мне интересны не лабораторные ради лабораторных, а реальные digital-системы: с продуктовой логикой, понятной пользой, сильной упаковкой и потенциалом роста."
          align="left"
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="glass-card p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Profile
                </div>
                <h3 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-bold">
                  Aliyar Janabayev
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Full Stack Developer",
                    "AI Automation Engineer",
                    "Startup Builder",
                  ].map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-border bg-muted/70 px-3 py-1 text-sm text-muted-foreground"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/10 px-3 py-2 text-sm font-semibold text-primary">
                Open to collabs
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-border bg-background/70 p-5">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                Kazakhstan
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: Rocket,
                    title: "Builder",
                    note: "продукты и MVP",
                  },
                  {
                    icon: Workflow,
                    title: "Automation",
                    note: "AI и workflow",
                  },
                  {
                    icon: Sparkles,
                    title: "Ulytau",
                    note: "локальный tech-фокус",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-border bg-card/80 p-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="mt-4 text-base font-semibold">{item.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{item.note}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="grid gap-6"
          >
            <div className="glass-card p-8">
              <p className="text-lg leading-8 text-muted-foreground">
                Я мыслю не как человек, который просто пишет код по задаче, а как
                builder: от идеи к продукту, от продукта к MVP, от MVP к запуску. Мне
                важно понимать проблему, аудиторию, архитектуру, бренд, питч и то, как
                решение будет жить на реальном рынке.
              </p>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Поэтому меня тянет к full-stack разработке, AI automation и
                стартап-направлению одновременно. Я из Жезказгана и хочу начинать
                улучшения с собственного региона, а затем масштабировать сильные решения
                дальше. Мне близки modern startup aesthetic и полезные системы для
                бизнеса и людей.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Что я развиваю
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {aboutExpertise.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-border bg-background/70 px-4 py-4 text-sm leading-6 text-muted-foreground transition-transform duration-300 hover:-translate-y-1 hover:border-primary/30"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
