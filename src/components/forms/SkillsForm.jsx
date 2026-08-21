import { Plus, X } from "lucide-react";
import { Button, Field } from "../Field";
import { uid } from "../../lib/portfolioData";

export default function SkillsForm({ items, onChange }) {
  const update = (id, key, value) =>
    onChange(items.map((it) => (it.id === id ? { ...it, [key]: value } : it)));

  return (
    <div className="space-y-3">
      {items.map((skill) => (
        <div
          key={skill.id}
          className="rounded-xl border border-border bg-surface p-4 shadow-soft transition-shadow hover:shadow-lift"
        >
          <div className="flex items-center gap-3">
            <input
              value={skill.name}
              onChange={(e) => update(skill.id, "name", e.target.value)}
              placeholder="Skill name"
              className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium outline-none transition-all focus:border-brand-soft focus:ring-2 focus:ring-ring/30"
            />
            <button
              onClick={() => onChange(items.filter((x) => x.id !== skill.id))}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
              aria-label={`Remove ${skill.name}`}
            >
              <X size={16} />
            </button>
          </div>
          <div className="mt-3">
            <Field label={`Skill level — ${skill.level}%`}>
              <input
                type="range"
                min="0"
                max="100"
                value={skill.level}
                onChange={(e) => update(skill.id, "level", Number(e.target.value))}
                className="w-full accent-[var(--brand)]"
              />
            </Field>
          </div>
        </div>
      ))}
      <Button
        variant="soft"
        onClick={() => onChange([...items, { id: uid("sk"), name: "", level: 60 }])}
      >
        <Plus size={15} /> Add skill
      </Button>
    </div>
  );
}
