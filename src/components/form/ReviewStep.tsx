import { Pencil } from "lucide-react";

import { Button } from "@/components/kit/Button";
import { departmentMap, type DepartmentId } from "@/data/departments";
import { getFilteredQuestions, personalQuestions, projectQuestions, type Question } from "@/data/questions";
import type { Answers } from "@/hooks/use-application";

function formatValue(answers: Answers, q: Question) {
  const v = answers[q.id];
  if (Array.isArray(v)) return v.length ? v.join(", ") : "—";
  return v && v.trim() ? v : "—";
}

function ReviewBlock({
  title,
  questions,
  answers,
  onEdit,
}: {
  title: string;
  questions: Question[];
  answers: Answers;
  onEdit: () => void;
}) {
  return (
    <div className="rounded-2xl border border-hairline bg-card p-6 shadow-soft sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="display text-2xl">{title}</h3>
        <Button size="sm" variant="outline" onClick={onEdit}>
          <Pencil /> Edit
        </Button>
      </div>
      <dl className="mt-6 space-y-5">
        {questions.map((q) => (
          <div key={q.id} className="border-t border-hairline pt-5 first:border-0 first:pt-0">
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {q.label}
            </dt>
            <dd className="mt-2 whitespace-pre-wrap text-sm leading-relaxed">
              {formatValue(answers, q)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ReviewStep({
  first,
  second,
  answers,
  onEdit,
}: {
  first: DepartmentId;
  second: DepartmentId;
  answers: Answers;
  onEdit: (step: number) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-hairline bg-card p-6 shadow-soft sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <h3 className="display text-2xl">Department preferences</h3>
          <Button size="sm" variant="outline" onClick={() => onEdit(0)}>
            <Pencil /> Edit
          </Button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { slot: "First preference", id: first },
            { slot: "Second preference", id: second },
          ].map((p) => (
            <div key={p.slot} className="rounded-xl bg-muted p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {p.slot}
              </p>
              <p className="display mt-2 text-2xl">{departmentMap[p.id].name}</p>
            </div>
          ))}
        </div>
      </div>

      <ReviewBlock
        title="Personal details"
        questions={personalQuestions}
        answers={answers}
        onEdit={() => onEdit(1)}
      />
      <ReviewBlock
        title={`${departmentMap[first].shortName} answers`}
        questions={getFilteredQuestions(first, answers)}
        answers={answers}
        onEdit={() => onEdit(2)}
      />
      <ReviewBlock
        title={`${departmentMap[second].shortName} answers`}
        questions={getFilteredQuestions(second, answers)}
        answers={answers}
        onEdit={() => onEdit(3)}
      />
      <ReviewBlock
        title="Projects & links"
        questions={projectQuestions}
        answers={answers}
        onEdit={() => onEdit(4)}
      />
    </div>
  );
}
