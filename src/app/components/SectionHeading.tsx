import { motion } from "motion/react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className={`mb-12 sm:mb-14 ${
        isCentered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"
      }`}
    >
      <div className="section-tag border-primary/20 bg-primary/10 text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-5 font-['Space_Grotesk',sans-serif] text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
