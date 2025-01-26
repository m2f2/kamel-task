import { Info } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export interface SelectSection {
  label: string;
  fieldName: string;
  defaultValue: string;
  options: {
    value: string;
    label: string;
    avatar?: string;
    statusColor?: string;
    textColor?: string;
  }[];
  icon?: React.ReactNode;
}

const SelectField = ({ section }: { section: SelectSection }) => {
  const [value, setValue] = useState(section.defaultValue);
  const selectedOption = section.options.find((opt) => opt.value === value);
  return (
    <div className="space-y-2">
      {/* Label Section */}
      <div className="flex items-center justify-between">
        <Info className="w-5 h-5 text-muted-foreground" />
        <span className="text-muted-foreground">{section.label}</span>
      </div>

      {/* Select Field */}
      <Select value={value} onValueChange={setValue} dir="rtl">
        <SelectTrigger className="w-full justify-between rounded-xl">
          <div className="flex items-center gap-2">
            {/* Status Color Indicator */}
            {selectedOption?.statusColor && (
              <span
                className={`w-2 h-2 rounded-full ${selectedOption.statusColor}`}
              />
            )}

            {/* Avatar */}
            {selectedOption?.avatar && (
              <Avatar className="w-6 h-6">
                <AvatarImage src={selectedOption.avatar} />
                <AvatarFallback>
                  {selectedOption.label.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            )}

            {/* Selected Value */}
            <h3
              className={`${selectedOption?.textColor || ""}`}
              aria-label={selectedOption?.label || "Select an option"}
            >
              {selectedOption?.label}
            </h3>
          </div>
        </SelectTrigger>

        {/* Dropdown Options */}
        <SelectContent className="rounded-xl">
          {section.options.map(({ value, label, avatar, statusColor }) => (
            <SelectItem key={value} value={value}>
              <div className="flex items-center gap-2">
                {/* Status Color Indicator */}
                {statusColor && (
                  <span className={`w-2 h-2 rounded-full ${statusColor}`} />
                )}

                {/* Avatar */}
                {avatar && (
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={avatar} />
                    <AvatarFallback>{label.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                )}

                {/* Option Label */}
                {label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;