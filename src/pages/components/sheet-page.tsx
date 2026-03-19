import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SheetPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Sheet</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Right (Default)</h2>
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Open Right Sheet
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 p-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="sheet-name" className="text-right">Name</Label>
                <Input id="sheet-name" defaultValue="John Doe" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="sheet-username" className="text-right">Username</Label>
                <Input id="sheet-username" defaultValue="@johndoe" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Left</h2>
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Open Left Sheet
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>Browse through the app sections.</SheetDescription>
            </SheetHeader>
            <div className="p-4 space-y-2">
              {["Dashboard", "Profile", "Settings", "Help"].map((item) => (
                <div key={item} className="px-2 py-1.5 text-sm hover:bg-muted rounded-md cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Top</h2>
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Open Top Sheet
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Notification</SheetTitle>
              <SheetDescription>You have a new message.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Bottom</h2>
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Open Bottom Sheet
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Cookie Preferences</SheetTitle>
              <SheetDescription>
                Manage your cookie settings here.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>
    </div>
  );
}
