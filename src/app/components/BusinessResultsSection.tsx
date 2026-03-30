import { motion } from "motion/react";
import { businessResults } from "../content";
import { SectionHeading } from "./SectionHeading";

export function BusinessResultsSection() {
  return (
    <section id="results" className="section-gap px-6">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Стиль мышления"
          title="Думаю как builder: продуктом, системой и масштабом"
          description="Мне интересно не просто написать функцию, а понять задачу целиком: зачем существует продукт, где его MVP, как он упакован и как может вырасти дальше."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {businessResults.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card group relative overflow-hidden p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-secondary opacity-70" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {item.accent}
                  </div>
                </div>
                <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="glass-card mt-8 grid gap-6 p-8 lg:grid-cols-[1fr_auto]"
        >
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              How I build
            </div>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Хороший проект для меня — это идея, которую можно довести до MVP,
              запустить и усилить.
            </h3>
          </div>
          <div className="flex items-center">
            <div className="rounded-[28px] border border-primary/20 bg-primary/10 px-6 py-4 text-sm leading-6 text-primary">
              Архитектура, визуал, AI, питч и масштабирование
              <br />
              должны работать как одна система.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
