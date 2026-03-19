import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dialog</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>
            Open Dialog
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dialog-name" className="text-right">
                  Name
                </Label>
                <Input id="dialog-name" defaultValue="John Doe" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dialog-username" className="text-right">
                  Username
                </Label>
                <Input id="dialog-username" defaultValue="@johndoe" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Simple</h2>
        <Dialog>
          <DialogTrigger render={<Button />}>
            Share
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share this document</DialogTitle>
              <DialogDescription>
                Anyone with the link can view this document.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <Input readOnly value="https://example.com/doc/abc123" />
              <Button variant="secondary" className="shrink-0">
                Copy Link
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}
