import { Separator } from "@/components/ui/separator";

export default function SeparatorPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Separator</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Horizontal</h2>
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Vertical</h2>
        <div className="flex h-10 items-center space-x-4">
          <span>Item 1</span>
          <Separator orientation="vertical" />
          <span>Item 2</span>
          <Separator orientation="vertical" />
          <span>Item 3</span>
        </div>
      </section>
    </div>
  );
}
