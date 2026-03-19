import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Navigation Menu</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <NavigationMenuLink render={<a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground" />}>
                      <div className="text-sm font-medium leading-none">Introduction</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Re-usable components built with Radix UI and Tailwind CSS.
                      </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink render={<a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground" />}>
                      <div className="text-sm font-medium leading-none">Installation</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        How to install dependencies and structure your app.
                      </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {["Alert Dialog", "Button", "Card", "Dialog"].map((item) => (
                    <NavigationMenuLink key={item} render={<a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground" />}>
                        <div className="text-sm font-medium leading-none">{item}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          A {item.toLowerCase()} component.
                        </p>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
    </div>
  );
}
