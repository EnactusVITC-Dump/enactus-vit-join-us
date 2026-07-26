import { departmentIcons } from "@/components/sections/DepartmentsSection";
import { departmentMap, type DepartmentId } from "@/data/departments";
import { cn } from "@/lib/utils";

/** Read-only tabs showing which preference round is active. */
export function DepartmentTabs({
  first,
  second,
  active,
}: {
  first: DepartmentId;
  second: DepartmentId;
  active: DepartmentId;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {[
        { id: first, slot: "First preference" },
        { id: second, slot: "Second preference" },
      ].map(({ id, slot }) => {
        const dept = departmentMap[id];
        const Icon = departmentIcons[id];
        const isActive = active === id;
        return (
          <div
            key={id}
            className={cn(
              "flex items-center gap-3 rounded-full border px-5 py-2.5 transition-colors duration-300",
              isActive ? "border-ink bg-primary" : "border-hairline bg-card text-muted-foreground",
            )}
          >
            <Icon className="size-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em]">
              {dept.shortName}
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.14em] opacity-60 sm:inline">
              {slot}
            </span>
          </div>
        );
      })}
    </div>
  );
}
