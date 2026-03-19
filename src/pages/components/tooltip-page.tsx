import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TooltipPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Tooltip</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            Hover me
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Positions</h2>
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Top
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Top tooltip</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Bottom
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Bottom tooltip</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Left
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Left tooltip</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Right
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Right tooltip</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>
    </div>
  );
}
