import { createFileRoute, redirect } from "@tanstack/react-router";

import { departmentMap, type DepartmentId } from "@/data/departments";

export const Route = createFileRoute("/apply/$departmentId")({
  beforeLoad: ({ params }) => {
    const depId = params.departmentId as DepartmentId;
    if (!departmentMap[depId]) {
      throw redirect({
        to: "/",
      });
    }
    throw redirect({
      to: "/apply",
      search: {
        first: depId,
      },
    });
  },
});
