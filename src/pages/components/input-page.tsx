import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Input</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Input type="text" placeholder="Enter text..." className="max-w-sm" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Label</h2>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Disabled</h2>
        <Input type="text" disabled placeholder="Disabled" className="max-w-sm" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">File Input</h2>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Types</h2>
        <div className="grid w-full max-w-sm gap-4">
          <Input type="text" placeholder="Text" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Number" />
          <Input type="search" placeholder="Search" />
          <Input type="url" placeholder="URL" />
        </div>
      </section>
    </div>
  );
}
