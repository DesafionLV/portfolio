import { motion } from "motion/react";

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Docker", color: "#2496ED" },
  { name: "OpenAI", color: "#10B981" },
  { name: "TailwindCSS", color: "#06B6D4" },
  { name: "FastAPI", color: "#009688" },
  { name: "Redis", color: "#DC382D" },
];

export function TechnologiesSection() {
  return (
    <section className="relative py-32 px-6">
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
              Tech Stack
            </span>
          </div>
          <h2 className="font-['Space_Grotesk',sans-serif] text-4xl md:text-6xl font-bold mb-6">
            Технологии
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Современный стек для разработки масштабируемых решений
          </p>
        </motion.div>

        {/* Desktop: Floating tech logos */}
        <div className="hidden lg:block relative min-h-[400px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-4xl aspect-square">
              {technologies.map((tech, index) => {
                const angle = (index / technologies.length) * 2 * Math.PI;
                const radius = 45; // percentage
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                    }}
                    whileHover={{
                      scale: 1.2,
                      zIndex: 10,
                    }}
                    style={{
                      position: "absolute",
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div
                        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                        style={{ backgroundColor: tech.color }}
                      />

                      {/* Card */}
                      <div className="relative px-6 py-4 bg-card border border-white/10 rounded-2xl backdrop-blur-sm group-hover:border-primary/50 transition-all shadow-lg">
                        <div
                          className="w-3 h-3 rounded-full mb-2 mx-auto"
                          style={{ backgroundColor: tech.color }}
                        />
                        <div className="text-sm font-medium whitespace-nowrap">
                          {tech.name}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Center circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold">12+</div>
                      <div className="text-xs text-muted-foreground">
                        технологий
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet: Grid layout */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative p-4 bg-card border border-white/10 rounded-2xl backdrop-blur-sm hover:border-primary/50 transition-all text-center">
                <div
                  className="w-3 h-3 rounded-full mb-2 mx-auto"
                  style={{ backgroundColor: tech.color }}
                />
                <div className="text-sm font-medium">{tech.name}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          <div className="text-center p-4 sm:p-6 rounded-2xl bg-card border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
              100%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Актуальные технологии
            </div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-2xl bg-card border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-secondary mb-2">
              24/7
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Готовность к разработке
            </div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-2xl bg-card border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">
              ∞
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Возможности интеграции
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
