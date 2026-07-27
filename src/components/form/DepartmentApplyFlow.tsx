import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/kit/Button";
import { StepHeader } from "@/components/kit/Progress";
import { QuestionRenderer, missingIds } from "@/components/questions/QuestionRenderer";
import { departmentMap, type DepartmentId } from "@/data/departments";
import { departmentQuestions, personalQuestions, projectQuestions } from "@/data/questions";
import { useApplication } from "@/hooks/use-application";

const TOTAL_STEPS = 3;

export function DepartmentApplyFlow({ departmentId }: { departmentId: DepartmentId }) {
  const navigate = useNavigate();
  const { state, setAnswer, markDepartmentApplied } = useApplication();
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);
  const [emailError, setEmailError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { answers } = state;

  const activeQuestions = useMemo(() => {
    if (step === 0) return personalQuestions;
    if (step === 1) return departmentQuestions[departmentId];
    if (step === 2) return projectQuestions;
    return [];
  }, [step, departmentId]);

  const meta = useMemo(() => {
    switch (step) {
      case 0:
        return { title: "Tell us about you.", subtitle: "The basics, so we know who we're reading." };
      case 1:
        return {
          title: `${departmentMap[departmentId].shortName} round.`,
          subtitle: `Questions for the ${departmentMap[departmentId].name} team.`,
        };
      case 2:
      default:
        return { title: "Show your work.", subtitle: "Links, and the project you're proudest of." };
    }
  }, [step, departmentId]);

  const goTo = (next: number) => {
    setErrors([]);
    setEmailError(false);
    setStep(next);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    const missing = missingIds(activeQuestions, answers);
    if (missing.length) {
      setErrors(missing);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (step === 0) {
      const email = answers["email"];
      if (typeof email === "string" && !email.endsWith("@vitstudent.ac.in")) {
        setEmailError(true);
        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    goTo(step + 1);
  };

  const handleSubmit = () => {
    const missing = missingIds(activeQuestions, answers);
    if (missing.length) {
      setErrors(missing);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSubmitting(true);
    // Submission hook-up point: post `state` to Lovable Cloud / Supabase here.
    window.setTimeout(() => {
      markDepartmentApplied(departmentId);
      navigate({ to: "/success" });
    }, 450);
  };

  return (
    <div className="section-x max-w-4xl py-16 lg:py-24">
      <StepHeader step={step + 1} total={TOTAL_STEPS} title={meta.title} subtitle={meta.subtitle} />

      {emailError ? (
        <p className="mt-8 rounded-xl border border-destructive/30 bg-destructive/5 px-5 py-4 text-sm font-medium text-destructive">
          Please use a valid @vitstudent.ac.in email address.
        </p>
      ) : null}

      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <QuestionRenderer
              questions={activeQuestions}
              answers={answers}
              onChange={setAnswer}
              errors={errors}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-8">
        <Button
          variant="outline"
          size="md"
          onClick={() => goTo(Math.max(step - 1, 0))}
          disabled={step === 0}
        >
          <ArrowLeft /> Back
        </Button>

        {step < TOTAL_STEPS - 1 ? (
          <Button size="lg" onClick={handleNext}>
            Continue <ArrowRight />
          </Button>
        ) : (
          <Button size="lg" variant="ink" onClick={handleSubmit} disabled={submitting}>
            {submitting ? "Submitting…" : "Submit application"} <Check />
          </Button>
        )}
      </div>
    </div>
  );
}
