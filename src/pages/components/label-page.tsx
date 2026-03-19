import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function LabelPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Label</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Label>This is a label</Label>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Input</h2>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="label-email">Email</Label>
          <Input type="email" id="label-email" placeholder="Enter your email" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Checkbox</h2>
        <div className="flex items-center space-x-2">
          <Checkbox id="label-terms" />
          <Label htmlFor="label-terms">Accept terms and conditions</Label>
        </div>
      </section>
    </div>
  );
}
