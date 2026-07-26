import { useCallback, useEffect, useState } from "react";

import type { DepartmentId } from "@/data/departments";

export type AnswerValue = string | string[];
export type Answers = Record<string, AnswerValue>;

export interface ApplicationState {
  appliedDepartments: DepartmentId[];
  answers: Answers;
}

const STORAGE_KEY = "enactus-vitc-application-v2";

const empty: ApplicationState = { appliedDepartments: [], answers: {} };

/**
 * Application state, persisted to localStorage so we can track the maximum 2 departments rule
 * across multiple sessions/tabs.
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
    setState(empty);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* noop */
    }
  }, []);

  return { state, hydrated, setAnswer, markDepartmentApplied, reset };
}
