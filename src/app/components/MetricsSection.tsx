import { motion } from "motion/react";
import { metrics } from "../content";
import { SectionHeading } from "./SectionHeading";

export function MetricsSection() {
  return (
    <section id="metrics" className="section-gap px-6">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Портрет в цифрах"
          title="Профиль в цифрах"
          description="Короткий срез того, как во мне сочетаются разработка, AI, продуктовый взгляд и региональный фокус."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass-card p-7"
            >
              <div className="text-5xl font-bold text-primary">{metric.value}</div>
              <div className="mt-4 text-xl font-bold">{metric.label}</div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {metric.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
