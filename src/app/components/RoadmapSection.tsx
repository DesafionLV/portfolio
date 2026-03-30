import { motion } from "motion/react";
import { roadmap } from "../content";
import { SectionHeading } from "./SectionHeading";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="section-gap px-6">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Builder workflow"
          title="Как я превращаю идею в продукт"
          description="Мне важно доводить замысел до ясной системы: от контекста и MVP до упаковки, запуска и дальнейшего роста."
        />

        <div className="grid gap-4 lg:grid-cols-5">
          {roadmap.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="glass-card relative p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold text-primary">{item.step}</div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
