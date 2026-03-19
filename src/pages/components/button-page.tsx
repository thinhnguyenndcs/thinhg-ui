import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail, Plus } from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Button</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <div className="flex gap-2">
          <Button>Button</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Secondary</h2>
        <div className="flex gap-2">
          <Button variant="secondary">Secondary</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Destructive</h2>
        <div className="flex gap-2">
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Outline</h2>
        <div className="flex gap-2">
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Ghost</h2>
        <div className="flex gap-2">
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Link</h2>
        <div className="flex gap-2">
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Icon</h2>
        <div className="flex gap-2">
          <Button>
            <Mail /> Login with Email
          </Button>
          <Button variant="secondary">
            <Plus /> Create New
          </Button>
          <Button variant="outline">
            Next <ChevronRight />
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Loading</h2>
        <div className="flex gap-2">
          <Button disabled>
            <Loader2 className="animate-spin" />
            Please wait
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Plus /></Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">All Variants</h2>
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>
    </div>
  );
}
