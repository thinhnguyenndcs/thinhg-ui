import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";

export default function CollapsiblePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Collapsible</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              @radix-ui/primitives has 3 repositories
            </h4>
            <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm">
              @radix-ui/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </section>
    </div>
  );
}
