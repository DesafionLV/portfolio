import { motion } from "motion/react";
import { advantages } from "../content";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseMeSection() {
  return (
    <section className="section-gap px-6">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Подход"
          title="Что отличает мой подход"
          description="Мой профиль сильнее всего раскрывается не одним стеком, а тем, как я мыслю, собираю систему и довожу идею до внятной формы."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item, index) => {
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
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 text-sm font-semibold text-primary">
                  {item.accent}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
