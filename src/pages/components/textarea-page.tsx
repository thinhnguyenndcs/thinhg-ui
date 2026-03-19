import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TextareaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Textarea</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Textarea placeholder="Type your message here." className="max-w-sm" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Label</h2>
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Disabled</h2>
        <Textarea placeholder="Disabled textarea" disabled className="max-w-sm" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Text</h2>
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
          <p className="text-sm text-muted-foreground">
            You can use up to 500 characters.
          </p>
        </div>
      </section>
    </div>
  );
}
