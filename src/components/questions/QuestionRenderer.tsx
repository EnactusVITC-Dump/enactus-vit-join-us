import {
  CheckboxGroup,
  FieldShell,
  RadioGroup,
  Select,
  TextArea,
  TextInput,
} from "@/components/kit/Field";
import type { Question } from "@/data/questions";
import type { Answers, AnswerValue } from "@/hooks/use-application";

export function isAnswered(q: Question, value: AnswerValue | undefined) {
  if (!q.required) return true;
  if (Array.isArray(value)) return value.length > 0;
  return Boolean(value && value.trim().length > 0);
}

export function missingIds(questions: Question[], answers: Answers) {
  return questions.filter((q) => !isAnswered(q, answers[q.id])).map((q) => q.id);
}

function QuestionField({
  question,
  value,
  onChange,
  error,
}: {
  question: Question;
  value: AnswerValue | undefined;
  onChange: (v: AnswerValue) => void;
  error?: string;
}) {
  const text = typeof value === "string" ? value : "";
  const list = Array.isArray(value) ? value : [];

  return (
    <FieldShell label={question.label} help={question.help} required={question.required} error={error}>
      {question.type === "text" ? (
        <TextInput
          value={text}
          placeholder={question.placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : null}

      {question.type === "link" ? (
        <TextInput
          type="url"
          inputMode="url"
          value={text}
          placeholder={question.placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : null}

      {question.type === "textarea" ? (
        <TextArea
          value={text}
          placeholder={question.placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : null}

      {question.type === "select" ? (
        <Select
          options={question.options ?? []}
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : null}

      {question.type === "radio" ? (
        <RadioGroup options={question.options ?? []} value={text} onChange={onChange} />
      ) : null}

      {question.type === "checkbox" ? (
        <CheckboxGroup options={question.options ?? []} value={list} onChange={onChange} />
      ) : null}


    </FieldShell>
  );
}

/** Renders any question array — used for personal, department and project steps. */
export function QuestionRenderer({
  questions,
  answers,
  onChange,
  errors = [],
}: {
  questions: Question[];
  answers: Answers;
  onChange: (id: string, value: AnswerValue) => void;
  errors?: string[];
}) {
  return (
    <div className="space-y-8">
      {questions.map((q) => (
        <div
          key={q.id}
          className="rounded-2xl border border-hairline bg-card p-6 shadow-soft sm:p-8"
        >
          <QuestionField
            question={q}
            value={answers[q.id]}
            onChange={(v) => onChange(q.id, v)}
            error={errors.includes(q.id) ? "This one is required." : undefined}
          />
        </div>
      ))}
    </div>
  );
}
