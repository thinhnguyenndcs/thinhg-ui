import { Progress } from "@/components/ui/progress";

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Progress</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default (60%)</h2>
        <Progress value={60} className="w-full max-w-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Empty (0%)</h2>
        <Progress value={0} className="w-full max-w-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Half (50%)</h2>
        <Progress value={50} className="w-full max-w-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Complete (100%)</h2>
        <Progress value={100} className="w-full max-w-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Multiple</h2>
        <div className="space-y-3 max-w-md">
          <div className="flex justify-between text-sm">
            <span>Design</span>
            <span>80%</span>
          </div>
          <Progress value={80} />
          <div className="flex justify-between text-sm">
            <span>Development</span>
            <span>45%</span>
          </div>
          <Progress value={45} />
          <div className="flex justify-between text-sm">
            <span>Testing</span>
            <span>20%</span>
          </div>
          <Progress value={20} />
        </div>
      </section>
    </div>
  );
}
