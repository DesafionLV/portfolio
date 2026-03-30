import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { contactLinks } from "../content";

const contactCards = Object.values(contactLinks);

export function ContactSection() {
  return (
    <section id="contact" className="section-gap px-6 pb-32">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="glass-card relative overflow-hidden p-8 sm:p-10 lg:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(90,167,255,0.22),transparent_34%)]" />

          <div className="relative">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Контакты
            </div>
            <h2 className="mt-4 max-w-3xl font-['Space_Grotesk',sans-serif] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Открыт к проектам, коллаборациям и сильным идеям
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Если у вас есть продукт, AI automation, SaaS-гипотеза или региональная
              инициатива — давайте обсудим.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={contactLinks.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(16,185,129,0.35)]"
              >
                Написать в Telegram
              </a>
              <a
                href={contactLinks.email.href}
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-card/80 px-7 py-4 font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-muted"
              >
                Написать на email
              </a>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {contactCards.map((item, index) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("http");

                return (
                  <motion.a
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="rounded-[28px] border border-border bg-background/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="mt-5 text-lg font-bold">{item.label}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{item.value}</div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
