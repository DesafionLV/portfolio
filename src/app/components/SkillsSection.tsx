import { motion } from "motion/react";
import {
  Code2,
  Server,
  Database,
  Brain,
  Container,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend разработка",
    icon: Code2,
    color: "primary",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    description: "Современные UI/UX интерфейсы",
  },
  {
    title: "Backend разработка",
    icon: Server,
    color: "secondary",
    skills: ["Node.js", "Express", "FastAPI", "Python"],
    description: "Масштабируемые серверные решения",
  },
  {
    title: "Базы данных",
    icon: Database,
    color: "emerald-400",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
    description: "Эффективное хранение данных",
  },
  {
    title: "AI технологии",
    icon: Brain,
    color: "violet-400",
    skills: ["OpenAI API", "LLM", "AI-агенты"],
    description: "Интеллектуальные решения",
  },
  {
    title: "DevOps",
    icon: Container,
    color: "cyan-400",
    skills: ["Docker", "GitHub Actions", "Nginx", "VPS деплой"],
    description: "Автоматизация и развертывание",
  },
  {
    title: "Архитектура",
    icon: Layers,
    color: "orange-400",
    skills: ["REST API", "Microservices", "WebSockets"],
    description: "Проектирование систем",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">Технологии</span>
          </div>
          <h2 className="font-['Space_Grotesk',sans-serif] text-4xl md:text-6xl font-bold mb-6">
            Навыки и экспертиза
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный стек технологий для создания современных цифровых продуктов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-card border border-white/10 hover:border-primary/30 transition-all duration-300 h-full backdrop-blur-sm">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />

                  <div className="relative">
                    <div
                      className={`w-14 h-14 mb-4 rounded-xl bg-${category.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-7 h-7 text-${category.color}`} />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-muted/50 border border-border rounded-lg text-xs font-medium hover:border-primary/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">
            Дополнительные навыки
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git",
              "Linux",
              "CI/CD",
              "Testing",
              "Agile",
              "UI/UX Design",
              "Team Lead",
              "Project Management",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-background/50 border border-border rounded-full text-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}