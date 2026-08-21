import { Check } from "lucide-react";
import { templates } from "../lib/portfolioData";

export default function TemplateSelector({ value, onChange }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {templates.map((t) => {
        const active = value === t.id;
        return (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={`group relative overflow-hidden rounded-xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift ${
              active
                ? "border-brand-soft bg-secondary shadow-soft ring-2 ring-ring/30"
                : "border-border bg-surface shadow-soft"
            }`}
          >
            <div
              className={`mb-3 h-12 rounded-lg ${
                t.id === "minimal"
                  ? "bg-muted"
                  : t.id === "professional"
                    ? "bg-secondary border border-border"
                    : "bg-gradient-brand"
              }`}
            />
            <p className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
              {t.name}
              {active && <Check size={14} className="text-brand" />}
            </p>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">{t.desc}</p>
          </button>
        );
      })}
    </div>
  );
}
