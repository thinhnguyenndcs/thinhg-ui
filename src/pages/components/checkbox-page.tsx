import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Checkbox</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Checked</h2>
        <div className="flex items-center space-x-2">
          <Checkbox id="checked" defaultChecked />
          <Label htmlFor="checked">This is checked by default</Label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Disabled</h2>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled" className="text-muted-foreground">Disabled checkbox</Label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Multiple Options</h2>
        <div className="space-y-2">
          {["Email notifications", "Push notifications", "SMS notifications"].map((label) => (
            <div key={label} className="flex items-center space-x-2">
              <Checkbox id={label} />
              <Label htmlFor={label}>{label}</Label>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
