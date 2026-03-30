import { motion } from "motion/react";
import { Globe, Laptop, Bot, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Разработка сайтов",
    description: "Современные сайты для компаний и стартапов.",
    features: [
      "Landing pages",
      "Корпоративные сайты",
      "E-commerce решения",
    ],
    color: "primary",
  },
  {
    icon: Laptop,
    title: "Веб-приложения",
    description: "Сложные платформы и онлайн-сервисы.",
    features: ["SaaS платформы", "Панели управления", "CRM системы"],
    color: "secondary",
  },
  {
    icon: Bot,
    title: "Автоматизация бизнеса",
    description: "Боты и автоматизированные системы.",
    features: [
      "Telegram боты",
      "Автоматизация процессов",
      "Интеграции API",
    ],
    color: "emerald-400",
  },
  {
    icon: Sparkles,
    title: "AI интеграции",
    description: "Внедрение искусственного интеллекта в бизнес.",
    features: [
      "ChatGPT интеграции",
      "AI ассистенты",
      "Обработка данных",
    ],
    color: "violet-400",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">Услуги</span>
          </div>
          <h2 className="font-['Space_Grotesk',sans-serif] text-4xl md:text-6xl font-bold mb-6">
            Что я разрабатываю
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный цикл разработки цифровых продуктов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-3xl bg-card border border-white/10 hover:border-primary/30 transition-all duration-300 h-full backdrop-blur-sm overflow-hidden">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Glow effect */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-${service.color}/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative">
                    <div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-${service.color}/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className={`w-8 h-8 text-${service.color}`} />
                    </div>

                    <h3 className="text-2xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-${service.color}`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`mt-8 w-full px-6 py-3 bg-${service.color}/10 hover:bg-${service.color} text-${service.color} hover:text-background border border-${service.color}/20 hover:border-${service.color} rounded-xl font-medium transition-all`}
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-emerald-500/10 border border-white/10 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать проект?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Обсудим вашу идею и найдем лучшее решение для вашего бизнеса
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-lg hover:shadow-primary/50 transition-all inline-flex items-center gap-2"
            >
              Связаться со мной
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}