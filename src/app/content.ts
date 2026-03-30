import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Building2,
  CheckCircle2,
  Clock3,
  Code2,
  Container,
  Database,
  Gauge,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Lightbulb,
  Mail,
  Package,
  Rocket,
  Send,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

export type NavigationItem = {
  id: string;
  label: string;
  shortLabel?: string;
};

export type InfoCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
};

export type CaseStudy = {
  title: string;
  stack: string[];
  problem: string;
  solution: string;
  result: string;
};

export type StackLayer = {
  title: string;
  description: string;
  items: string[];
  accent: string;
};

export type Metric = {
  value: string;
  label: string;
  description: string;
};

export const navigationItems: NavigationItem[] = [
  { id: "about", label: "Обо мне", shortLabel: "Обо мне" },
  { id: "results", label: "Подход", shortLabel: "Подход" },
  { id: "cases", label: "Проекты", shortLabel: "Проекты" },
  { id: "audience", label: "Фокус", shortLabel: "Фокус" },
  { id: "stack", label: "Стек", shortLabel: "Стек" },
  { id: "contact", label: "Контакты", shortLabel: "Контакт" },
];

export const mobileDockItems: NavigationItem[] = [
  { id: "about", label: "Обо мне", shortLabel: "Обо мне" },
  { id: "cases", label: "Проекты", shortLabel: "Проекты" },
  { id: "stack", label: "Стек", shortLabel: "Стек" },
  { id: "contact", label: "Контакт", shortLabel: "Контакт" },
];

export const heroStats = [
  { value: "10+", label: "идей и проектов" },
  { value: "6+", label: "сильных инициатив" },
  { value: "15+", label: "технологий" },
];

export const aboutExpertise = [
  "Full-stack продукты: от интерфейса до backend, базы данных и деплоя.",
  "AI automation, агенты, LLM-интеграции и workflow-системы.",
  "MVP, архитектура, бренд, питч и упаковка стартап-идей.",
  "Цифровые проекты для бизнеса, сообщества и локально значимых задач.",
];

export const businessResults: InfoCard[] = [
  {
    icon: Zap,
    title: "Мыслю продуктом",
    description:
      "Сначала ищу проблему, аудиторию, MVP и реальную пользу, а уже потом выбираю стек и формат реализации.",
    accent: "problem -> product",
  },
  {
    icon: Clock3,
    title: "Собираю систему",
    description:
      "Люблю структуру, roadmap, архитектуру, роли, документы и понятные этапы, чтобы идея не растворялась в хаосе.",
    accent: "system thinking",
  },
  {
    icon: TrendingUp,
    title: "Смотрю на масштаб",
    description:
      "Думаю про запуск, монетизацию, AI-слой, локальный рынок и то, как решение может вырасти в платформу.",
    accent: "launch -> scale",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "UlytauGIS",
    stack: ["React", "TypeScript", "Mapbox", "PostGIS"],
    problem:
      "Концепт региональной GIS-платформы для туризма, геоданных и цифрового представления территории.",
    solution:
      "Идея включает интерактивную карту, точки интереса, маршруты, культурные объекты и инфраструктурный слой.",
    result:
      "Пока не реализован и временно отложен, но остается для меня сильной стратегической идеей.",
  },
  {
    title: "AI Editor",
    stack: ["Next.js", "FastAPI", "OpenAI API", "DOCX/PDF"],
    problem:
      "Хакатонный проект для ЖезУ, посвященный работе с научными статьями и автоматизации документного процесса.",
    solution:
      "В основе была идея AI-редактора для структурирования, оформления, редактирования и подготовки научных материалов.",
    result:
      "Это был проект в рамках хакатона, который хорошо показал мой интерес к AI-инструментам для практических задач.",
  },
  {
    title: "WHAIS",
    stack: ["Node.js", "OpenAI API", "WhatsApp", "CRM"],
    problem:
      "Многие бизнес-процессы в WhatsApp остаются ручными, разрозненными и плохо масштабируются.",
    solution:
      "Это моя главная платформа: AI/SaaS для автоматизации WhatsApp business-процессов, CRM-сценариев, ассистентов и интеграций.",
    result:
      "Сейчас проект в разработке, и именно его я планирую реализовать в ближайшее время как свой основной продукт.",
  },
];

export const audiences: InfoCard[] = [
  {
    icon: Rocket,
    title: "AI automation для бизнеса",
    description:
      "Где можно убрать рутину, ускорить ответы, выстроить pipeline и дать команде цифрового ассистента.",
    accent: "workflow",
  },
  {
    icon: Store,
    title: "SaaS и платформы",
    description:
      "Booking, CRM-like продукты, внутренние системы и сервисы, которые должны расти вместе с пользователем.",
    accent: "MVP first",
  },
  {
    icon: Building2,
    title: "Региональные tech-проекты",
    description:
      "Мне близки решения для цифровизации локальных сфер, карт, сервисов и полезной инфраструктуры.",
    accent: "local impact",
  },
  {
    icon: GraduationCap,
    title: "Хакатоны и комьюнити",
    description:
      "Среда, где нужно быстро понять проблему, собрать MVP, оформить pitch и показать ценность идеи.",
    accent: "builder mode",
  },
];

export const advantages: InfoCard[] = [
  {
    icon: Sparkles,
    title: "Продукт, а не просто код",
    description:
      "Смотрю на проблему, аудиторию, пользу и бизнес-модель, а не только на реализацию отдельной функции.",
    accent: "product mindset",
  },
  {
    icon: Workflow,
    title: "Системный подход",
    description:
      "Люблю планы, блоки, архитектуру, roadmap, документацию и понятные критерии результата.",
    accent: "от идеи до системы",
  },
  {
    icon: Gauge,
    title: "Чувство визуала",
    description:
      "Для меня важны не только функции, но и упаковка: интерфейс, бренд, pitch и общий premium startup-образ.",
    accent: "brand + UI",
  },
  {
    icon: Target,
    title: "Масштабное мышление",
    description:
      "Интересно строить решения, которые можно развивать на 5–10 лет вперед: от локального MVP до платформы.",
    accent: "long-term view",
  },
];

export const stackLayers: StackLayer[] = [
  {
    title: "Frontend",
    description:
      "Интерфейсы продуктового уровня, адаптивная верстка, компоненты и современный UX.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    accent: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    title: "Backend",
    description:
      "API, бизнес-логика, automation-сценарии, интеграции и серверная часть продукта.",
    items: ["Node.js", "Express", "Python", "FastAPI"],
    accent: "from-secondary/20 via-secondary/10 to-transparent",
  },
  {
    title: "Database",
    description:
      "Структурированные данные, быстрые запросы и модели хранения под реальные продуктовые сценарии.",
    items: ["PostgreSQL", "MongoDB", "Redis", "PostGIS"],
    accent: "from-emerald-500/20 via-emerald-500/10 to-transparent",
  },
  {
    title: "Infrastructure",
    description:
      "Контейнеризация, деплой, reverse proxy, CI/CD и готовность проекта к реальному запуску.",
    items: ["Docker", "Docker Compose", "Nginx", "GitHub Actions", "VPS"],
    accent: "from-sky-500/20 via-sky-500/10 to-transparent",
  },
  {
    title: "AI",
    description:
      "LLM-интеграции, AI-ассистенты, автоматизация коммуникаций и прикладные AI-сценарии.",
    items: ["OpenAI API", "LLM", "AI agents", "Prompt engineering"],
    accent: "from-violet-500/20 via-violet-500/10 to-transparent",
  },
];

export const roadmap = [
  {
    step: "1",
    title: "Проблема и контекст",
    description:
      "Сначала разбираю задачу, аудиторию, ограничения, рынок и зачем продукт вообще должен существовать.",
    icon: Lightbulb,
  },
  {
    step: "2",
    title: "MVP и архитектура",
    description:
      "Формирую ядро продукта: user flow, data model, backend-логику, стек и технический каркас.",
    icon: Layers,
  },
  {
    step: "3",
    title: "UX, бренд и упаковка",
    description:
      "Продумываю интерфейс, визуальный язык, презентацию, pitch и то, как идея будет читаться для людей.",
    icon: Sparkles,
  },
  {
    step: "4",
    title: "Разработка и AI-слой",
    description:
      "Собираю frontend, backend, интеграции, automation-сценарии и AI-функции без лишней сложности.",
    icon: Code2,
  },
  {
    step: "5",
    title: "Launch и масштабирование",
    description:
      "Готовлю деплой, первые тесты, обратную связь, дальнейший рост и путь от MVP к устойчивой платформе.",
    icon: Rocket,
  },
];

export const metrics: Metric[] = [
  {
    value: "3",
    label: "роли в одном профиле",
    description:
      "Full Stack Developer, AI Automation Engineer и Startup Builder в одной траектории.",
  },
  {
    value: "4+",
    label: "продуктовых направлений",
    description:
      "WHAIS, UlytauGIS, AI Editor, Digital Cemetery и другие линии, которые формируют мой профиль.",
  },
  {
    value: "15+",
    label: "технологий и инструментов",
    description:
      "React, Next.js, TypeScript, Node.js, FastAPI, PostgreSQL, Docker, OpenAI API и не только.",
  },
  {
    value: "1",
    label: "важный региональный фокус",
    description:
      "Хочу начинать улучшения с родного региона, а затем масштабировать сильные решения дальше.",
  },
];

export const openSourceCards: InfoCard[] = [
  {
    icon: Github,
    title: "Прототипирование",
    description:
      "Регулярно превращаю идеи в быстрые прототипы, чтобы проверять сценарии, интерфейсы и технические гипотезы на практике.",
    accent: "builder loop",
  },
  {
    icon: Package,
    title: "Startup sandbox",
    description:
      "Использую личные проекты как полигон для MVP, бренд-концепций, SaaS-механик, логики монетизации и product packaging.",
    accent: "MVP lab",
  },
  {
    icon: Brain,
    title: "AI experiments",
    description:
      "Тестирую AI-ассистентов, document workflows, WhatsApp/Telegram automation и LLM-интеграции для прикладных сценариев.",
    accent: "AI-native",
  },
];

export const journey = [
  {
    title: "Студент, который сразу смотрит шире",
    description:
      "Учусь по направлению разработки ПО, но с самого начала интересуюсь не только учебными задачами, а реальными цифровыми продуктами.",
    icon: Globe,
  },
  {
    title: "Переход к full-stack циклу",
    description:
      "Постепенно собрал для себя целостную картину: frontend, backend, базы данных, деплой и архитектура как единая система.",
    icon: Code2,
  },
  {
    title: "Стартапы, хакатоны и MVP",
    description:
      "Среда кейсов и быстрых запусков усилила во мне founder mindset: понять задачу, упаковать идею и довести ее до внятного решения.",
    icon: CheckCircle2,
  },
  {
    title: "AI automation как ключевой вектор",
    description:
      "Все сильнее ухожу в AI agents, automation workflows, business assistants и SaaS-сценарии вокруг OpenAI и LLM.",
    icon: Brain,
  },
  {
    title: "Регион, идентичность и tech-среда",
    description:
      "Мне важно строить не только продукты, но и среду вокруг них: через локальные инициативы, сильные идеи и полезные цифровые решения.",
    icon: Layers,
  },
];

export const seoTopics = [
  "Aliyar Janabayev",
  "Full Stack Developer Kazakhstan",
  "AI Automation Engineer",
  "Startup Builder Ulytau",
  "Kazakhstan tech portfolio",
];

export const contactLinks = {
  telegram: {
    label: "Telegram",
    href: "https://t.me/kladesa",
    icon: Send,
    value: "@kladesa",
  },
  email: {
    label: "Email",
    href: "mailto:neyron741@gmail.com?subject=Portfolio%20project%20request",
    icon: Mail,
    value: "neyron741@gmail.com",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/aliyarjanabayev",
    icon: Github,
    value: "github.com/aliyarjanabayev",
  },
};

export const stackOverview = [
  {
    icon: Code2,
    title: "Продуктовое мышление",
  },
  {
    icon: Database,
    title: "Full-stack цикл",
  },
  {
    icon: Container,
    title: "AI-ready MVP",
  },
];
