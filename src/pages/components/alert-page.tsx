import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Info, TriangleAlert } from "lucide-react";

export default function AlertPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Alert</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Destructive</h2>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Success (Custom)</h2>
        <Alert className="border-success text-success">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Warning (Custom)</h2>
        <Alert className="border-amber-500 text-amber-600">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Your account is about to reach its storage limit.
          </AlertDescription>
        </Alert>
      </section>
    </div>
  );
}
