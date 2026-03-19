import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "@/layouts/app-layout";
import { lazy, Suspense } from "react";
import { LoaderCircleIcon } from "lucide-react";

const ComponentsIndex = lazy(() => import("@/pages/components/index"));
const AccordionPage = lazy(() => import("@/pages/components/accordion-page"));
const AlertPage = lazy(() => import("@/pages/components/alert-page"));
const AlertDialogPage = lazy(
  () => import("@/pages/components/alert-dialog-page"),
);
const AvatarPage = lazy(() => import("@/pages/components/avatar-page"));
const BadgePage = lazy(() => import("@/pages/components/badge-page"));
const BreadcrumbPage = lazy(() => import("@/pages/components/breadcrumb-page"));
const ButtonPage = lazy(() => import("@/pages/components/button-page"));
const CalendarPage = lazy(() => import("@/pages/components/calendar-page"));
const CardPage = lazy(() => import("@/pages/components/card-page"));
const CheckboxPage = lazy(() => import("@/pages/components/checkbox-page"));
const CollapsiblePage = lazy(
  () => import("@/pages/components/collapsible-page"),
);
const CommandPage = lazy(() => import("@/pages/components/command-page"));
const DialogPage = lazy(() => import("@/pages/components/dialog-page"));
const DropdownMenuPage = lazy(
  () => import("@/pages/components/dropdown-menu-page"),
);
const InputPage = lazy(() => import("@/pages/components/input-page"));
const LabelPage = lazy(() => import("@/pages/components/label-page"));
const MenubarPage = lazy(() => import("@/pages/components/menubar-page"));
const NavigationMenuPage = lazy(
  () => import("@/pages/components/navigation-menu-page"),
);
const PaginationPage = lazy(() => import("@/pages/components/pagination-page"));
const PopoverPage = lazy(() => import("@/pages/components/popover-page"));
const ProgressPage = lazy(() => import("@/pages/components/progress-page"));
const RadioGroupPage = lazy(
  () => import("@/pages/components/radio-group-page"),
);
const ScrollAreaPage = lazy(
  () => import("@/pages/components/scroll-area-page"),
);
const SelectPage = lazy(() => import("@/pages/components/select-page"));
const SeparatorPage = lazy(() => import("@/pages/components/separator-page"));
const SheetPage = lazy(() => import("@/pages/components/sheet-page"));
const SkeletonPage = lazy(() => import("@/pages/components/skeleton-page"));
const SliderPage = lazy(() => import("@/pages/components/slider-page"));
const SonnerPage = lazy(() => import("@/pages/components/sonner-page"));
const SwitchPage = lazy(() => import("@/pages/components/switch-page"));
const TablePage = lazy(() => import("@/pages/components/table-page"));
const TabsPage = lazy(() => import("@/pages/components/tabs-page"));
const TextareaPage = lazy(() => import("@/pages/components/textarea-page"));
const TogglePage = lazy(() => import("@/pages/components/toggle-page"));
const ToggleGroupPage = lazy(
  () => import("@/pages/components/toggle-group-page"),
);
const TooltipPage = lazy(() => import("@/pages/components/tooltip-page"));

function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/components" replace />} />
          <Route
            path="/components"
            element={
              <AppLayout>
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center h-screen">
                      <LoaderCircleIcon className="animate-spin" />
                    </div>
                  }
                >
                  <Outlet />
                </Suspense>
              </AppLayout>
            }
          >
            <Route index element={<ComponentsIndex />} />
            <Route path="accordion" element={<AccordionPage />} />
            <Route path="alert" element={<AlertPage />} />
            <Route path="alert-dialog" element={<AlertDialogPage />} />
            <Route path="avatar" element={<AvatarPage />} />
            <Route path="badge" element={<BadgePage />} />
            <Route path="breadcrumb" element={<BreadcrumbPage />} />
            <Route path="button" element={<ButtonPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="card" element={<CardPage />} />
            <Route path="checkbox" element={<CheckboxPage />} />
            <Route path="collapsible" element={<CollapsiblePage />} />
            <Route path="command" element={<CommandPage />} />
            <Route path="dialog" element={<DialogPage />} />
            <Route path="dropdown-menu" element={<DropdownMenuPage />} />
            <Route path="input" element={<InputPage />} />
            <Route path="label" element={<LabelPage />} />
            <Route path="menubar" element={<MenubarPage />} />
            <Route path="navigation-menu" element={<NavigationMenuPage />} />
            <Route path="pagination" element={<PaginationPage />} />
            <Route path="popover" element={<PopoverPage />} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="radio-group" element={<RadioGroupPage />} />
            <Route path="scroll-area" element={<ScrollAreaPage />} />
            <Route path="select" element={<SelectPage />} />
            <Route path="separator" element={<SeparatorPage />} />
            <Route path="sheet" element={<SheetPage />} />
            <Route path="skeleton" element={<SkeletonPage />} />
            <Route path="slider" element={<SliderPage />} />
            <Route path="sonner" element={<SonnerPage />} />
            <Route path="switch" element={<SwitchPage />} />
            <Route path="table" element={<TablePage />} />
            <Route path="tabs" element={<TabsPage />} />
            <Route path="textarea" element={<TextareaPage />} />
            <Route path="toggle" element={<TogglePage />} />
            <Route path="toggle-group" element={<ToggleGroupPage />} />
            <Route path="tooltip" element={<TooltipPage />} />
          </Route>
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
