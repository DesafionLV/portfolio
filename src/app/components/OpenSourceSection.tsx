import { motion } from "motion/react";
import { openSourceCards } from "../content";
import { SectionHeading } from "./SectionHeading";

const activityLevels = [
  0, 1, 2, 3, 1, 2, 0, 1, 2, 3, 2, 1, 0, 1,
  1, 2, 3, 2, 1, 0, 2, 3, 2, 1, 0, 1, 2, 2,
  0, 1, 1, 2, 3, 1, 0, 1, 2, 3, 2, 1, 0, 0,
  1, 2, 1, 3, 2, 1, 0,
];

function getActivityClass(level: number) {
  if (level === 3) {
    return "bg-primary";
  }

  if (level === 2) {
    return "bg-secondary";
  }

  if (level === 1) {
    return "bg-emerald-500/60";
  }

  return "bg-muted";
}

export function OpenSourceSection() {
  return (
    <section className="section-gap px-6">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Исследование и эксперименты"
          title="Эксперименты, из которых растут продукты"
          description="Часть моей работы — постоянно тестировать новые гипотезы: AI, интерфейсы, automation-сценарии, брендинг и быстрые микро-MVP."
        />

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="glass-card p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Builder activity
                </div>
                <h3 className="mt-3 text-3xl font-bold">
                  Прототипы, промпты и pet projects — это мой R&D слой
                </h3>
              </div>
              <div className="rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-semibold text-muted-foreground">
                AI tools + startup ideas
              </div>
            </div>

            <div className="mt-8 rounded-[30px] border border-border bg-background/70 p-6">
              <div className="grid grid-cols-7 gap-2">
                {activityLevels.map((level, index) => (
                  <div
                    key={`${level}-${index}`}
                    className={`aspect-square rounded-md ${getActivityClass(level)}`}
                  />
                ))}
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Через личные эксперименты я быстрее понимаю, какие идеи действительно
              жизнеспособны: что работает в интерфейсе, где AI дает ценность, а что можно
              превратить в самостоятельный продукт или сильный MVP.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {openSourceCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass-card p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-5 text-sm font-semibold text-secondary">{item.accent}</div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
