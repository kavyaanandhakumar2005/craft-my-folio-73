import { Plus } from "lucide-react";
import { Input, TextArea, Button, CardBlock } from "../Field";
import { uid } from "../../lib/portfolioData";

export default function AchievementsForm({ items, onChange }) {
  const update = (id, key, value) =>
    onChange(items.map((it) => (it.id === id ? { ...it, [key]: value } : it)));

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <CardBlock
          key={item.id}
          title={item.title || `Achievement ${i + 1}`}
          onRemove={() => onChange(items.filter((x) => x.id !== item.id))}
        >
          <Input
            label="Achievement title"
            value={item.title}
            onChange={(e) => update(item.id, "title", e.target.value)}
          />
          <TextArea
            label="Description"
            value={item.description}
            onChange={(e) => update(item.id, "description", e.target.value)}
          />
        </CardBlock>
      ))}
      <Button
        variant="soft"
        onClick={() => onChange([...items, { id: uid("ac"), title: "", description: "" }])}
      >
        <Plus size={15} /> Add achievement
      </Button>
    </div>
  );
}
