import { motion } from "motion/react";
import { Award, Code, Users, Zap } from "lucide-react";

const timeline = [
  {
    year: "2023-2026",
    title: "Студент-разработчик",
    description:
      "Разработка стартап-проектов и цифровых платформ. Участие в хакатонах и технологических мероприятиях.",
    icon: Code,
    color: "primary",
  },
  {
    year: "2024-2026",
    title: "AI & Automation Specialist",
    description:
      "Специализация на AI-интеграциях и автоматизации бизнес-процессов. Внедрение OpenAI API в реальные проекты.",
    icon: Zap,
    color: "secondary",
  },
  {
    year: "2025-2026",
    title: "Startup Builder",
    description:
      "Создание собственных продуктов и участие в стартап-программах. Развитие навыков в области продуктового мышления.",
    icon: Award,
    color: "emerald-400",
  },
];

const achievements = [
  {
    icon: Award,
    title: "Хакатоны",
    description: "Участие в технологических соревнованиях",
  },
  {
    icon: Users,
    title: "Стартап-программы",
    description: "Опыт работы в стартап-экосистеме",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Вклад в открытые проекты",
  },
];

export function ExperienceSection() {
  return (
    <section className="relative py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">
              Карьера
            </span>
          </div>
          <h2 className="font-['Space_Grotesk',sans-serif] text-4xl md:text-6xl font-bold mb-6">
            Опыт и развитие
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Постоянное обучение и работа над реальными проектами
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-20">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div
                    className={`absolute left-[19px] top-12 w-0.5 h-full bg-gradient-to-b from-${item.color} to-transparent opacity-20`}
                  />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-1">
                  <div
                    className={`w-10 h-10 rounded-full bg-${item.color}/10 border-2 border-${item.color} flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 text-${item.color}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-6">
                  <div
                    className={`inline-block px-3 py-1 bg-${item.color}/10 border border-${item.color}/20 rounded-full text-xs text-${item.color} mb-2`}
                  >
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Focus areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Основные направления развития
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "AI-разработка",
              "Автоматизация",
              "Цифровые платформы",
            ].map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/10 text-center hover:border-primary/30 transition-all"
              >
                <div className="text-lg font-semibold">{area}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-white/10 text-center hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
