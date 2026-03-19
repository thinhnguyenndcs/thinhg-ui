import { Slider } from "@/components/ui/slider";

export default function SliderPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Slider</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Slider defaultValue={[50]} max={100} step={1} className="max-w-sm" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Range</h2>
        <Slider defaultValue={[25, 75]} max={100} step={1} className="max-w-sm" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Step (10)</h2>
        <Slider defaultValue={[30]} max={100} step={10} className="max-w-sm" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Custom Values</h2>
        <div className="space-y-4 max-w-sm">
          <div>
            <p className="text-sm mb-2">Volume: 0%</p>
            <Slider defaultValue={[0]} max={100} step={1} />
          </div>
          <div>
            <p className="text-sm mb-2">Volume: 50%</p>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
          <div>
            <p className="text-sm mb-2">Volume: 100%</p>
            <Slider defaultValue={[100]} max={100} step={1} />
          </div>
        </div>
      </section>
    </div>
  );
}
