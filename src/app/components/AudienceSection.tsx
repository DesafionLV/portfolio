import { motion } from "motion/react";
import { audiences } from "../content";
import { SectionHeading } from "./SectionHeading";

export function AudienceSection() {
  return (
    <section id="audience" className="section-gap px-6">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Фокус"
          title="Направления, где мне особенно интересно создавать"
          description="Меня тянет туда, где можно соединить код, продукт, AI и реальную пользу для бизнеса, сообщества или региона."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {audiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card group p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-5 rounded-full border border-border bg-background/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
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
