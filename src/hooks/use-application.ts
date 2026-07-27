import { useCallback, useEffect, useState } from "react";

import type { DepartmentId } from "@/data/departments";

export type AnswerValue = string | string[];
export type Answers = Record<string, AnswerValue>;

export interface ApplicationState {
  first: DepartmentId | null;
  second: DepartmentId | null;
  appliedDepartments: DepartmentId[];
  answers: Answers;
}

const STORAGE_KEY = "enactus-vitc-application-v2";

const empty: ApplicationState = { first: null, second: null, appliedDepartments: [], answers: {} };

/**
 * Application draft state, persisted to localStorage.
 */
export function useApplication() {
  const [state, setState] = useState<ApplicationState>(empty);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...empty, ...(JSON.parse(raw) as ApplicationState) });
    } catch {
      /* ignore malformed drafts */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable */
    }
  }, [state, hydrated]);

  const setAnswer = useCallback((id: string, value: AnswerValue) => {
    setState((prev) => ({ ...prev, answers: { ...prev.answers, [id]: value } }));
  }, []);

  const setPreference = useCallback((slot: "first" | "second", value: DepartmentId | null) => {
    setState((prev) => {
      const next = { ...prev, [slot]: value } as ApplicationState;
      if (slot === "first" && next.second === value) next.second = null;
      return next;
    });
  }, []);

  const markDepartmentApplied = useCallback((id: DepartmentId) => {
    setState((prev) => {
      if (prev.appliedDepartments.includes(id)) return prev;
      return {
        ...prev,
        appliedDepartments: [...prev.appliedDepartments, id],
      };
    });
  }, []);

  const reset = useCallback(() => {
    setState((prev) => ({
      ...empty,
      appliedDepartments: prev.appliedDepartments, // Preserve already applied history
    }));
    try {
      // Remove temporary draft from storage but preserve appliedDepartments
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ApplicationState;
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ ...empty, appliedDepartments: parsed.appliedDepartments })
        );
      }
    } catch {
      /* noop */
    }
  }, []);

  return { state, hydrated, setAnswer, setPreference, markDepartmentApplied, reset };
}
