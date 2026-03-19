import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map((_, i) => `Tag ${i + 1}`);

export default function ScrollAreaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Scroll Area</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Vertical</h2>
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Horizontal</h2>
        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="w-32 h-20 rounded-md bg-muted flex items-center justify-center shrink-0"
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </section>
    </div>
  );
}
