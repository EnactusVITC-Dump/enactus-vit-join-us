import { Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Ban, Check } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { DepartmentTabs } from "@/components/form/DepartmentTabs";
import { PreferenceStep } from "@/components/form/PreferenceStep";
import { ReviewStep } from "@/components/form/ReviewStep";
import { Button } from "@/components/kit/Button";
import { Card } from "@/components/kit/Card";
import { StepHeader } from "@/components/kit/Progress";
import { QuestionRenderer, missingIds } from "@/components/questions/QuestionRenderer";
import { departmentMap, type DepartmentId } from "@/data/departments";
import { getFilteredQuestions, personalQuestions, projectQuestions } from "@/data/questions";
import { useApplication } from "@/hooks/use-application";

const TOTAL_STEPS = 6;

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRemoNG3Fu66GCmOx50tmghujMCVx0j75vvT5MiCubzhttJnyzjBz1B4tR7am2sTk/exec";

export function ApplyFlow({ defaultFirst }: { defaultFirst?: string }) {
  const navigate = useNavigate();
  const { state, hydrated, setAnswer, setPreference, markDepartmentApplied, reset } = useApplication();
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);
  const [emailError, setEmailError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const { first, second, answers } = state;

  useEffect(() => {
    if (defaultFirst && !state.first && hydrated) {
      setPreference("first", defaultFirst as DepartmentId);
    }
  }, [defaultFirst, state.first, setPreference, hydrated]);

  const activeQuestions = useMemo(() => {
    if (step === 1) return personalQuestions;
    if (step === 2 && first) return getFilteredQuestions(first, answers);
    if (step === 3 && second) return getFilteredQuestions(second, answers);
    if (step === 4) return projectQuestions;
    return [];
  }, [step, first, second, answers]);

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
        return { title: "Show your work.", subtitle: "Links, and the project you're proudest of." };
      default:
        return { title: "Review & submit.", subtitle: "Check everything once. You can still edit any section." };
    }
  }, [step, first, second]);

  const goTo = useCallback((next: number) => {
    setErrors([]);
    setEmailError(false);
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

    if (step === 1) {
      const email = answers["email"];
      if (typeof email === "string" && !email.endsWith("@vitstudent.ac.in")) {
        setEmailError(true);
        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    goTo(step + 1);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(false);
    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        // text/plain avoids a CORS preflight (OPTIONS) request, which Apps
        // Script web apps can't handle — the body is still a JSON string.
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ first, second, answers }),
      });

      const result = await response.json();
      if (result.status !== "success") {
        throw new Error(result.message || "Submission failed");
      }

      if (first) markDepartmentApplied(first);
      if (second) markDepartmentApplied(second);
      reset();
      navigate({ to: "/success" });
    } catch (err) {
      console.error("Application submission failed:", err);
      setSubmitError(true);
      setSubmitting(false);
    }
  };

  if (!hydrated) {
    return <div className="min-h-screen" />; // Wait for hydration
  }

  if (state.appliedDepartments.length >= 2) {
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

      {emailError ? (
        <p className="mt-8 rounded-xl border border-destructive/30 bg-destructive/5 px-5 py-4 text-sm font-medium text-destructive">
          Please use a valid @vitstudent.ac.in email address.
        </p>
      ) : null}

      {submitError ? (
        <p className="mt-8 rounded-xl border border-destructive/30 bg-destructive/5 px-5 py-4 text-sm font-medium text-destructive">
          Something went wrong submitting your application. Please check your connection and try again.
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
