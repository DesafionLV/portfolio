import { contactLinks, navigationItems } from "../content";
import { scrollToSection } from "../utils/scroll";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-border bg-background/60 px-6 pb-28 pt-10 backdrop-blur-xl lg:pb-10">
      <div className="page-shell grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-start">
        <div>
          <div className="font-['Space_Grotesk',sans-serif] text-2xl font-bold">
            <span className="text-primary">desafio</span>
            <span className="text-foreground">.tech</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            Портфолио full-stack разработчика, AI automation engineer и startup builder,
            который соединяет разработку, автоматизацию и продуктовый подход.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Навигация
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Контакты
          </div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <a
              href={contactLinks.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Telegram
            </a>
            <a
              href={contactLinks.email.href}
              className="transition-colors hover:text-foreground"
            >
              Email
            </a>
            <a
              href={contactLinks.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="page-shell mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
        © {year} Aliyar Janabayev
      </div>
    </footer>
  );
}
