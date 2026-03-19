import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Select</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Groups</h2>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
              <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
              <SelectItem value="cet">Central European Time (CET)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Disabled</h2>
        <Select disabled>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Disabled" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option">Option</SelectItem>
          </SelectContent>
        </Select>
      </section>
    </div>
  );
}
