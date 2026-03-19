import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<{ from: Date; to?: Date }>({
    from: new Date(),
  });

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Calendar</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-fit"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Range</h2>
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={(range) => range && setDateRange(range as { from: Date; to?: Date })}
          className="rounded-md border w-fit"
          numberOfMonths={2}
        />
      </section>
    </div>
  );
}
