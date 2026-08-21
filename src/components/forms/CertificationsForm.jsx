import { Plus } from "lucide-react";
import { Input, Button, CardBlock } from "../Field";
import { uid } from "../../lib/portfolioData";

export default function CertificationsForm({ items, onChange }) {
  const update = (id, key, value) =>
    onChange(items.map((it) => (it.id === id ? { ...it, [key]: value } : it)));

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <CardBlock
          key={item.id}
          title={item.name || `Certificate ${i + 1}`}
          onRemove={() => onChange(items.filter((x) => x.id !== item.id))}
        >
          <Input
            label="Certificate name"
            value={item.name}
            onChange={(e) => update(item.id, "name", e.target.value)}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <Input
              label="Organization"
              value={item.org}
              onChange={(e) => update(item.id, "org", e.target.value)}
            />
            <Input
              label="Date"
              value={item.date}
              onChange={(e) => update(item.id, "date", e.target.value)}
              placeholder="Mar 2025"
            />
          </div>
        </CardBlock>
      ))}
      <Button
        variant="soft"
        onClick={() => onChange([...items, { id: uid("ce"), name: "", org: "", date: "" }])}
      >
        <Plus size={15} /> Add certification
      </Button>
    </div>
  );
}
