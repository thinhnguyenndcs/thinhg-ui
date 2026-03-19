import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Accordion</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Accordion className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match your design system.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default with smooth transitions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Multiple</h2>
        <Accordion multiple className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>First item</AccordionTrigger>
            <AccordionContent>
              You can open multiple items at the same time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Second item</AccordionTrigger>
            <AccordionContent>
              Each item can be toggled independently.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Third item</AccordionTrigger>
            <AccordionContent>
              All items can be open simultaneously.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
