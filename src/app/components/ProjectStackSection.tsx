import { motion } from "motion/react";
import { stackLayers } from "../content";
import { SectionHeading } from "./SectionHeading";

export function ProjectStackSection() {
  return (
    <section id="stack" className="section-gap px-6">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Стек и зоны силы"
          title="Стек, на котором я строю продукты"
          description="Мне интересно держать весь цикл: интерфейс, backend, данные, инфраструктуру, AI-интеграции и готовность проекта к запуску."
        />

        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {stackLayers.map((layer, index) => (
              <motion.article
                key={layer.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="glass-card relative overflow-hidden p-7"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${layer.accent}`} />
                <div className="relative">
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    {layer.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {layer.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background/70 px-3 py-2 text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="glass-card relative overflow-hidden p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(90,167,255,0.16),transparent_35%)]" />

            <div className="relative">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Full-cycle builder
              </div>
              <h3 className="mt-3 text-3xl font-bold">От интерфейса до AI-слоя</h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
                Я одинаково смотрю на React-интерфейс, backend-логику, data model,
                Docker-деплой и AI-функции. Такой full-stack обзор помогает собирать не
                куски, а цельный продукт.
              </p>

              <div className="mt-8 rounded-[30px] border border-border bg-background/70 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Frontend превращает идею в понятный интерфейс и сильный пользовательский опыт.",
                    "Backend и данные делают продукт системой, а не набором экранов.",
                    "Infrastructure дает проекту стабильный запуск, деплой и готовность к росту.",
                    "AI-слой расширяет продукт автоматизацией, ассистентами и новыми сценариями.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-border bg-card/80 p-4 text-sm leading-6 text-muted-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  "React / Next.js / TypeScript",
                  "Node.js / Python / PostgreSQL",
                  "OpenAI / Docker / VPS",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border bg-muted/70 px-4 py-3 text-sm font-semibold text-foreground"
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
