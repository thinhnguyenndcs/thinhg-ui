import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export default function TogglePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Toggle</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Outline</h2>
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Text</h2>
        <Toggle aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
          Underline
        </Toggle>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Disabled</h2>
        <Toggle aria-label="Toggle disabled" disabled>
          <Bold className="h-4 w-4" />
        </Toggle>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex items-center gap-2">
          <Toggle size="sm" aria-label="Small toggle">
            <Bold className="h-3 w-3" />
          </Toggle>
          <Toggle size="default" aria-label="Default toggle">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Large toggle">
            <Bold className="h-5 w-5" />
          </Toggle>
        </div>
      </section>
    </div>
  );
}
