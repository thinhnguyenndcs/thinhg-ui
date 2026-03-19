import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Radio Group</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-three" />
            <Label htmlFor="option-three">Option Three</Label>
          </div>
        </RadioGroup>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Description</h2>
        <RadioGroup defaultValue="card">
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="card" id="payment-card" className="mt-1" />
            <div>
              <Label htmlFor="payment-card">Credit Card</Label>
              <p className="text-sm text-muted-foreground">Pay with Visa, Mastercard, or American Express.</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="paypal" id="payment-paypal" className="mt-1" />
            <div>
              <Label htmlFor="payment-paypal">PayPal</Label>
              <p className="text-sm text-muted-foreground">Pay using your PayPal account.</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="bank" id="payment-bank" className="mt-1" />
            <div>
              <Label htmlFor="payment-bank">Bank Transfer</Label>
              <p className="text-sm text-muted-foreground">Transfer directly from your bank account.</p>
            </div>
          </div>
        </RadioGroup>
      </section>
    </div>
  );
}
