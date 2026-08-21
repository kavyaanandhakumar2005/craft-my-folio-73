import { Plus } from "lucide-react";
import { Input, TextArea, Button, CardBlock } from "../Field";
import { uid } from "../../lib/portfolioData";

export default function EducationForm({ items, onChange }) {
  const update = (id, key, value) =>
    onChange(items.map((it) => (it.id === id ? { ...it, [key]: value } : it)));

  const add = () =>
    onChange([
      ...items,
      { id: uid("edu"), degree: "", institution: "", year: "", description: "" },
    ]);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <CardBlock
          key={item.id}
          title={item.degree || `Education ${i + 1}`}
          onRemove={() => onChange(items.filter((x) => x.id !== item.id))}
        >
          <Input
            label="Degree"
            value={item.degree}
            onChange={(e) => update(item.id, "degree", e.target.value)}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <Input
              label="Institution"
              value={item.institution}
              onChange={(e) => update(item.id, "institution", e.target.value)}
            />
            <Input
              label="Year"
              value={item.year}
              onChange={(e) => update(item.id, "year", e.target.value)}
              placeholder="2022 - 2026"
            />
          </div>
          <TextArea
            label="Description"
            value={item.description}
            onChange={(e) => update(item.id, "description", e.target.value)}
          />
        </CardBlock>
      ))}
      <Button variant="soft" onClick={add}>
        <Plus size={15} /> Add education
      </Button>
    </div>
  );
}
