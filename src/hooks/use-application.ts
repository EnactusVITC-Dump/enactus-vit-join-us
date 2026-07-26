import { useCallback, useEffect, useState } from "react";

import type { DepartmentId } from "@/data/departments";

export type AnswerValue = string | string[];
export type Answers = Record<string, AnswerValue>;

export interface ApplicationState {
  first: DepartmentId | null;
  second: DepartmentId | null;
  answers: Answers;
}

const STORAGE_KEY = "enactus-vitc-application";

const empty: ApplicationState = { first: null, second: null, answers: {} };

/**
 * Application draft state, persisted to sessionStorage so a refresh mid-flow
 * doesn't lose answers. Swap this hook's internals for Supabase/Firebase later
 * without touching any UI component.
 */
export function useApplication() {
  const [state, setState] = useState<ApplicationState>(empty);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...empty, ...(JSON.parse(raw) as ApplicationState) });
    } catch {
      /* ignore malformed drafts */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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

  const reset = useCallback(() => {
    setState(empty);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* noop */
    }
  }, []);

  return { state, hydrated, setAnswer, setPreference, reset };
}
