import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

export default function SonnerPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Sonner (Toast)</h1>
      <Toaster />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Button
          variant="outline"
          onClick={() => toast("Event has been created.")}
        >
          Show Toast
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Description</h2>
        <Button
          variant="outline"
          onClick={() =>
            toast("Event Created", {
              description: "Sunday, December 03, 2024 at 9:00 AM",
            })
          }
        >
          With Description
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Success</h2>
        <Button
          variant="outline"
          onClick={() => toast.success("Successfully saved!")}
        >
          Success Toast
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Error</h2>
        <Button
          variant="outline"
          onClick={() => toast.error("Something went wrong.")}
        >
          Error Toast
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Action</h2>
        <Button
          variant="outline"
          onClick={() =>
            toast("File deleted", {
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          With Action
        </Button>
      </section>
    </div>
  );
}
