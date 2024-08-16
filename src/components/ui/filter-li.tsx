"use client";
import { useState } from "react";

import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export function FilterLi({
  filter,
}: {
  filter: {
    label: string;
    data: {
      label: React.ReactNode;
      value: string | number;
      Icon?: React.ReactNode;
    }[];
  };
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | number>();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? filter.data.find((f) => f.value === value)?.label : filter.label}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 overflow-hidden">
        <ul>
          {filter.data.map(f => <li key={f.value} className={cn("flex items-center justify-between px-2 py-1 hover:bg-neutral-100 cursor-pointer",{
            "bg-yellow-500 text-white": value === f.value
          })}
          onClick={()=>{
            setValue(f.value)
            setOpen(false);
          }}
          >{f.label}{f.Icon}</li>)}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
