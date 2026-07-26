import { createFileRoute, redirect, Link } from "@tanstack/react-router";
import { ArrowLeft, Ban } from "lucide-react";

import { DepartmentApplyFlow } from "@/components/form/DepartmentApplyFlow";
import { Button } from "@/components/kit/Button";
import { Card } from "@/components/kit/Card";
import { departmentMap, type DepartmentId, departments } from "@/data/departments";
import { useApplication } from "@/hooks/use-application";

export const Route = createFileRoute("/apply/$departmentId")({
  component: ApplyDepartment,
  beforeLoad: ({ params }) => {
    // Validate departmentId
    if (!departmentMap[params.departmentId as DepartmentId]) {
      throw redirect({
        to: "/",
      });
    }
  },
});

function ApplyDepartment() {
  const { departmentId } = Route.useParams();
  const { state, hydrated } = useApplication();
  
  const depId = departmentId as DepartmentId;

  if (!hydrated) {
    return <div className="min-h-screen" />; // Wait for hydration
  }

  // Check if they've already applied to 2 OTHER departments
  const hasAppliedHere = state.appliedDepartments.includes(depId);
  const reachedLimit = !hasAppliedHere && state.appliedDepartments.length >= 2;

  if (reachedLimit) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
        <Card className="max-w-md items-center justify-center flex flex-col p-8 bg-card border border-hairline shadow-soft rounded-2xl">
          <div className="flex size-14 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-6">
            <Ban className="size-6" />
          </div>
          <h2 className="display text-2xl mb-3">Application Limit Reached</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            You can only apply to a maximum of 2 departments. You have already submitted applications for{" "}
            <span className="font-semibold text-foreground">
              {state.appliedDepartments.map((d) => departmentMap[d].name).join(" and ")}
            </span>
            . We look forward to reviewing them!
          </p>
          <Button asChild size="md" className="w-full">
            <Link to="/">
              <ArrowLeft className="mr-2" /> Back to Home
            </Link>
          </Button>
        </Card>
      </div>
    );
  }

  if (hasAppliedHere) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
        <Card className="max-w-md items-center justify-center flex flex-col p-8 bg-card border border-hairline shadow-soft rounded-2xl">
          <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-2xl">🎉</span>
          </div>
          <h2 className="display text-2xl mb-3">Already Applied</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            You have already submitted an application for the <strong>{departmentMap[depId].name}</strong> department. 
            We'll be in touch soon!
          </p>
          <Button asChild size="md" className="w-full">
            <Link to="/">
              <ArrowLeft className="mr-2" /> Back to Home
            </Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <DepartmentApplyFlow departmentId={depId} />
    </div>
  );
}
