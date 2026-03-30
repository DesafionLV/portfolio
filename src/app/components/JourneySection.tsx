import { motion } from "motion/react";
import { journey } from "../content";
import { SectionHeading } from "./SectionHeading";

export function JourneySection() {
  return (
    <section className="section-gap px-6">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Траектория"
          title="Как формируется моя траектория"
          description="Мой путь идет сразу в несколько сторон: учеба, практика, стартапы, AI, региональные идеи и сборка личного бренда."
        />

        <div className="mx-auto max-w-4xl">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="relative pl-20 last:pb-0"
              >
                {index !== journey.length - 1 ? (
                  <div className="absolute left-[29px] top-16 h-full w-px bg-gradient-to-b from-primary via-secondary/40 to-transparent" />
                ) : null}

                <div className="absolute left-0 top-0 flex h-[58px] w-[58px] items-center justify-center rounded-[22px] border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="glass-card mb-6 p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    этап {index + 1}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
