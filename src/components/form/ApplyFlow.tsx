import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

import { DepartmentTabs } from "@/components/form/DepartmentTabs";
import { PreferenceStep } from "@/components/form/PreferenceStep";
import { ReviewStep } from "@/components/form/ReviewStep";
import { Button } from "@/components/kit/Button";
import { StepHeader } from "@/components/kit/Progress";
import { QuestionRenderer, missingIds } from "@/components/questions/QuestionRenderer";
import { departmentMap } from "@/data/departments";
import { departmentQuestions, personalQuestions, projectQuestions } from "@/data/questions";
import { useApplication } from "@/hooks/use-application";

const TOTAL_STEPS = 6;

export function ApplyFlow() {
  const navigate = useNavigate();
  const { state, setAnswer, setPreference, reset } = useApplication();
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const { first, second, answers } = state;

  const activeQuestions = useMemo(() => {
    if (step === 1) return personalQuestions;
    if (step === 2 && first) return departmentQuestions[first];
    if (step === 3 && second) return departmentQuestions[second];
    if (step === 4) return projectQuestions;
    return [];
  }, [step, first, second]);

  const meta = useMemo(() => {
    switch (step) {
      case 0:
        return {
          title: "Choose your path.",
          subtitle: "Pick two departments. Your second preference has to be different from the first.",
        };
      case 1:
        return { title: "Tell us about you.", subtitle: "The basics, so we know who we're reading." };
      case 2:
        return {
          title: `${first ? departmentMap[first].shortName : ""} round.`,
          subtitle: "Questions for your first preference.",
        };
      case 3:
        return {
          title: `${second ? departmentMap[second].shortName : ""} round.`,
          subtitle: "Questions for your second preference.",
        };
      case 4:
        return { title: "Show your work.", subtitle: "Links, resume and the project you're proudest of." };
      default:
        return { title: "Review & submit.", subtitle: "Check everything once. You can still edit any section." };
    }
  }, [step, first, second]);

  const goTo = useCallback((next: number) => {
    setErrors([]);
    setStep(next);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNext = () => {
    if (step === 0) {
      if (!first || !second) {
        setErrors(["preferences"]);
        return;
      }
      goTo(1);
      return;
    }
    const missing = missingIds(activeQuestions, answers);
    if (missing.length) {
      setErrors(missing);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    goTo(step + 1);
  };

  const handleSubmit = () => {
    setSubmitting(true);
    // Submission hook-up point: post `state` to Lovable Cloud / Supabase here.
    window.setTimeout(() => {
      reset();
      navigate({ to: "/success" });
    }, 450);
  };

  return (
    <div className="section-x max-w-4xl py-16 lg:py-24">
      <StepHeader step={step + 1} total={TOTAL_STEPS} title={meta.title} subtitle={meta.subtitle} />

      {first && second && step >= 2 ? (
        <div className="mt-10">
          <DepartmentTabs
            first={first}
            second={second}
            active={step === 3 ? second : first}
          />
        </div>
      ) : null}

      {errors.includes("preferences") ? (
        <p className="mt-8 rounded-xl border border-destructive/30 bg-destructive/5 px-5 py-4 text-sm font-medium text-destructive">
          Select both a first and a second preference to continue.
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
            {step === 0 ? (
              <PreferenceStep first={first} second={second} onSelect={setPreference} />
            ) : null}

            {step >= 1 && step <= 4 ? (
              <QuestionRenderer
                questions={activeQuestions}
                answers={answers}
                onChange={setAnswer}
                errors={errors}
              />
            ) : null}

            {step === 5 && first && second ? (
              <ReviewStep first={first} second={second} answers={answers} onEdit={goTo} />
            ) : null}
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
