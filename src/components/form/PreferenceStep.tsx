import { Check } from "lucide-react";

import { departmentIcons } from "@/components/sections/DepartmentsSection";
import { departments, type DepartmentId } from "@/data/departments";
import { cn } from "@/lib/utils";

function PreferenceColumn({
  slotLabel,
  helper,
  selected,
  disabledId,
  onSelect,
}: {
  slotLabel: string;
  helper: string;
  selected: DepartmentId | null;
  disabledId?: DepartmentId | null;
  onSelect: (id: DepartmentId) => void;
}) {
  return (
    <div>
      <span className="eyebrow">{slotLabel}</span>
      <p className="mt-3 text-sm text-muted-foreground">{helper}</p>
      <div className="mt-6 space-y-3">
        {departments.map((d) => {
          const Icon = departmentIcons[d.id];
          const active = selected === d.id;
          const disabled = disabledId === d.id;
          return (
            <button
              type="button"
              key={d.id}
              disabled={disabled}
              onClick={() => onSelect(d.id)}
              className={cn(
                "flex w-full items-center gap-4 rounded-2xl border bg-card px-5 py-4 text-left transition-all duration-300",
                active
                  ? "border-ink shadow-lift"
                  : "border-hairline hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-soft",
                disabled && "cursor-not-allowed opacity-35 hover:translate-y-0 hover:shadow-none",
              )}
            >
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-xl",
                  active ? "bg-primary" : "bg-muted",
                )}
              >
                <Icon className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">{d.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{d.tagline}</span>
              </span>
              {active ? (
                <span className="flex size-6 items-center justify-center rounded-full bg-ink">
                  <Check className="size-3.5 text-ink-foreground" />
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function PreferenceStep({
  first,
  second,
  onSelect,
}: {
  first: DepartmentId | null;
  second: DepartmentId | null;
  onSelect: (slot: "first" | "second", id: DepartmentId) => void;
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <PreferenceColumn
        slotLabel="First preference"
        helper="The department you most want to work in."
        selected={first}
        onSelect={(id) => onSelect("first", id)}
      />
      <PreferenceColumn
        slotLabel="Second preference"
        helper="A different department — your backup allocation."
        selected={second}
        disabledId={first}
        onSelect={(id) => onSelect("second", id)}
      />
    </div>
  );
}
