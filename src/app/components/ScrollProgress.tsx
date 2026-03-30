import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const doc = document.documentElement;
      const scrollableHeight = doc.scrollHeight - doc.clientHeight;

      if (scrollableHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress((window.scrollY / scrollableHeight) * 100);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary via-emerald-400 to-secondary shadow-[0_0_24px_rgba(50,211,153,0.65)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
