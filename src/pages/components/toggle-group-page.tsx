import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Underline } from "lucide-react";

export default function ToggleGroupPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Toggle Group</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Single Selection</h2>
        <ToggleGroup>
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Multiple Selection</h2>
        <ToggleGroup multiple>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Outline Variant</h2>
        <ToggleGroup variant="outline">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="space-y-4">
          <ToggleGroup size="sm">
            <ToggleGroupItem value="left"><AlignLeft className="h-3 w-3" /></ToggleGroupItem>
            <ToggleGroupItem value="center"><AlignCenter className="h-3 w-3" /></ToggleGroupItem>
            <ToggleGroupItem value="right"><AlignRight className="h-3 w-3" /></ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup size="default">
            <ToggleGroupItem value="left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup size="lg">
            <ToggleGroupItem value="left"><AlignLeft className="h-5 w-5" /></ToggleGroupItem>
            <ToggleGroupItem value="center"><AlignCenter className="h-5 w-5" /></ToggleGroupItem>
            <ToggleGroupItem value="right"><AlignRight className="h-5 w-5" /></ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>
    </div>
  );
}
