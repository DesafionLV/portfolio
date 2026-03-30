import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card/80 text-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
      aria-label={
        isDark ? "Переключить на светлую тему" : "Переключить на темную тему"
      }
      title={isDark ? "Светлая тема" : "Темная тема"}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
