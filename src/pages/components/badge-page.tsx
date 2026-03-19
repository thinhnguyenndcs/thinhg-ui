import { Badge } from "@/components/ui/badge";

export default function BadgePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Badge</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <div className="flex gap-2">
          <Badge>Badge</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Secondary</h2>
        <div className="flex gap-2">
          <Badge variant="secondary">Secondary</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Outline</h2>
        <div className="flex gap-2">
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Destructive</h2>
        <div className="flex gap-2">
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">All Variants</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>
    </div>
  );
}
