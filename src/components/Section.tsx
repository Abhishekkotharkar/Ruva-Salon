import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  copy?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, copy, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {(eyebrow || title || copy) && (
          <div className="reveal mb-10 max-w-3xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {copy && <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">{copy}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
