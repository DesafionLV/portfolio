import { motion } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "WHAIS",
    description: "Моя главная AI/SaaS-платформа для WhatsApp Business Automation.",
    features: [
      "AI automation для WhatsApp",
      "CRM-сценарии и ассистенты",
      "платформа находится в разработке",
    ],
    technologies: ["Node.js", "OpenAI API", "WhatsApp", "CRM"],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwYWl8ZW58MXx8fHwxNzc5NDYxMjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-primary/20 to-emerald-500/20",
  },
  {
    title: "AI Editor",
    description: "Хакатонный AI-проект для ЖезУ по работе с научными статьями.",
    features: [
      "структурирование и редактирование статей",
      "оформление и document workflow",
      "хакатонный формат проекта",
    ],
    technologies: ["Next.js", "OpenAI API", "Python", "FastAPI"],
    image:
      "https://images.unsplash.com/photo-1652834028068-237ca3b6af0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRvY3VtZW50JTIwYXV0b21hdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczMzk0MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-secondary/20 to-violet-500/20",
  },
  {
    title: "UlytauGIS",
    description: "Концепт интерактивной GIS-платформы, который пока отложен.",
    features: [
      "интерактивная карта и геоданные",
      "туристические и культурные объекты",
      "проект пока не реализован",
    ],
    technologies: ["React", "Mapbox", "TypeScript", "Express"],
    image:
      "https://images.unsplash.com/photo-1614783702763-48dcc1f32a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMDNEJTIwbWFwJTIwdG91cmlzbXxlbnwxfHx8fDE3NzMzOTQwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">Портфолио</span>
          </div>
          <h2 className="font-['Space_Grotesk',sans-serif] text-4xl md:text-6xl font-bold mb-6">
            Мои проекты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные решения для бизнеса и стартапов
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-card border border-white/10 hover:border-primary/30 transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-30 transition-opacity`}
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all group-hover:rotate-45 duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted border border-border rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-full px-6 py-3 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 hover:border-primary rounded-xl font-medium transition-all flex items-center justify-center gap-2 group/btn">
                    Посмотреть проект
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
