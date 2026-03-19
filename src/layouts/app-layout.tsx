import { Link, useLocation } from "react-router";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const components = [
  "Accordion",
  "Alert",
  "Alert Dialog",
  "Avatar",
  "Badge",
  "Breadcrumb",
  "Button",
  "Calendar",
  "Card",
  "Checkbox",
  "Collapsible",
  "Command",
  "Dialog",
  "Dropdown Menu",
  "Input",
  "Label",
  "Menubar",
  "Navigation Menu",
  "Pagination",
  "Popover",
  "Progress",
  "Radio Group",
  "Scroll Area",
  "Select",
  "Separator",
  "Sheet",
  "Skeleton",
  "Slider",
  "Sonner",
  "Switch",
  "Table",
  "Tabs",
  "Textarea",
  "Toggle",
  "Toggle Group",
  "Tooltip",
];

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="h-14 shrink-0 flex items-center px-6 bg-primary">
        <h1 className="text-lg font-semibold text-white">G-ui</h1>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 border-r border-secondary/50 flex flex-col">
          <ScrollArea className="flex-1 px-3 py-4 h-full">
            <nav className="flex flex-col gap-1">
              {components.map((name) => {
                const slug = toSlug(name);
                const isActive = location.pathname === `/components/${slug}`;
                return (
                  <Link
                    key={slug}
                    to={`/components/${slug}`}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm transition-colors",
                      isActive
                        ? "bg-primary text-white font-medium"
                        : "text-black/70 hover:bg-secondary/70",
                    )}
                  >
                    {name}
                  </Link>
                );
              })}
            </nav>
          </ScrollArea>
        </aside>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
