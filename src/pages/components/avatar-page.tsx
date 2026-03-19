import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Avatar</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Image</h2>
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Fallback</h2>
        <div className="flex gap-4">
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex items-center gap-4">
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-xs">S</AvatarFallback>
          </Avatar>
          <Avatar className="h-10 w-10">
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-14 w-14">
            <AvatarFallback className="text-lg">LG</AvatarFallback>
          </Avatar>
          <Avatar className="h-20 w-20">
            <AvatarFallback className="text-xl">XL</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </div>
  );
}
