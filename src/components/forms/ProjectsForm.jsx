import { Plus } from "lucide-react";
import { Input, TextArea, Button, CardBlock } from "../Field";
import { uid } from "../../lib/portfolioData";

export default function ProjectsForm({ items, onChange }) {
  const update = (id, key, value) =>
    onChange(items.map((it) => (it.id === id ? { ...it, [key]: value } : it)));

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <CardBlock
          key={item.id}
          title={item.title || `Project ${i + 1}`}
          onRemove={() => onChange(items.filter((x) => x.id !== item.id))}
        >
          <Input
            label="Project title"
            value={item.title}
            onChange={(e) => update(item.id, "title", e.target.value)}
          />
          <TextArea
            label="Description"
            value={item.description}
            onChange={(e) => update(item.id, "description", e.target.value)}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <Input
              label="Technologies used"
              value={item.tech}
              onChange={(e) => update(item.id, "tech", e.target.value)}
              placeholder="React, Vite, CSS"
            />
            <Input
              label="Project link"
              value={item.link}
              onChange={(e) => update(item.id, "link", e.target.value)}
              placeholder="https://github.com/..."
            />
          </div>
        </CardBlock>
      ))}
      <Button
        variant="soft"
        onClick={() =>
          onChange([...items, { id: uid("pr"), title: "", description: "", tech: "", link: "" }])
        }
      >
        <Plus size={15} /> Add project
      </Button>
    </div>
  );
}
