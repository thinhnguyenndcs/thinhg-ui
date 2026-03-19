import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SwitchPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Switch</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Checked</h2>
        <div className="flex items-center space-x-2">
          <Switch id="switch-checked" defaultChecked />
          <Label htmlFor="switch-checked">Enabled by default</Label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Disabled</h2>
        <div className="flex items-center space-x-2">
          <Switch id="switch-disabled" disabled />
          <Label htmlFor="switch-disabled" className="text-muted-foreground">
            Disabled
          </Label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Settings List</h2>
        <div className="space-y-4 max-w-sm">
          {[
            { id: "notifications", label: "Push Notifications", desc: "Receive push notifications" },
            { id: "marketing", label: "Marketing Emails", desc: "Receive marketing emails" },
            { id: "security", label: "Security Alerts", desc: "Get notified about security events" },
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor={item.id}>{item.label}</Label>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <Switch id={item.id} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
