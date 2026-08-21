import { Input, TextArea } from "../Field";

export default function PersonalInfoForm({ data, onChange }) {
  const set = (key) => (e) => onChange({ ...data, [key]: e.target.value });

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 shadow-soft">
        <img
          src={data.photo}
          alt={`${data.name} profile preview`}
          className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-brand-soft/40"
        />
        <div className="w-full">
          <Input
            label="Profile photo URL"
            value={data.photo}
            onChange={set("photo")}
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Full name" value={data.name} onChange={set("name")} placeholder="Your name" />
        <Input
          label="Professional title"
          value={data.title}
          onChange={set("title")}
          placeholder="Frontend Developer"
        />
      </div>

      <TextArea label="About / Bio" rows={4} value={data.bio} onChange={set("bio")} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Email" type="email" value={data.email} onChange={set("email")} />
        <Input label="Phone" value={data.phone} onChange={set("phone")} />
      </div>
      <Input label="Location" value={data.location} onChange={set("location")} />
    </div>
  );
}
