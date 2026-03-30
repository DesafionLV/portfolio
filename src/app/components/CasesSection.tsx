import { motion } from "motion/react";
import { caseStudies } from "../content";
import { SectionHeading } from "./SectionHeading";

export function CasesSection() {
  return (
    <section id="cases" className="section-gap px-6">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Проекты"
          title="Проекты, которые формируют мой профиль"
          description="Здесь лучше всего видно, как я мыслю: что уже делалось, что отложено и какой продукт для меня сейчас главный."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-card p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="max-w-xs text-2xl font-bold">{item.title}</h3>
                <div className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  проект #{index + 1}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-muted/70 px-3 py-1 text-xs font-semibold text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                {[
                  { label: "Контекст", value: item.problem },
                  { label: "Суть", value: item.solution },
                  { label: "Статус", value: item.result },
                ].map((section) => (
                  <div
                    key={section.label}
                    className="rounded-[24px] border border-border bg-background/70 p-5"
                  >
                    <div className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                      {section.label}
                    </div>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                      {section.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
