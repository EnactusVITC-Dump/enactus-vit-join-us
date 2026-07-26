import { Check, ChevronDown, Upload } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border border-hairline bg-card px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 shadow-soft transition-all duration-200 focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-primary/60";

export function FieldShell({
  label,
  help,
  required,
  error,
  children,
}: {
  label: string;
  help?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
        {label}
        {required ? <span className="ml-1 text-primary">*</span> : null}
      </label>
      {children}
      {help ? <p className="text-xs text-muted-foreground">{help}</p> : null}
      {error ? <p className="text-xs font-medium text-destructive">{error}</p> : null}
    </div>
  );
}

export function TextInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBase, className)} {...props} />;
}

export function TextArea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={5} className={cn(fieldBase, "resize-none leading-relaxed", className)} {...props} />;
}

export function Select({
  options,
  placeholder = "Select an option",
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { options: string[]; placeholder?: string }) {
  return (
    <div className="relative">
      <select className={cn(fieldBase, "appearance-none pr-11", className)} {...props}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}

export function RadioGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            type="button"
            key={o}
            onClick={() => onChange(o)}
            className={cn(
              "flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-all duration-200",
              active
                ? "border-ink bg-card shadow-soft"
                : "border-hairline bg-card/60 hover:border-ink/30",
            )}
          >
            <span
              className={cn(
                "flex size-4 shrink-0 items-center justify-center rounded-full border",
                active ? "border-ink bg-primary" : "border-ink/30",
              )}
            >
              {active ? <span className="size-1.5 rounded-full bg-ink" /> : null}
            </span>
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function CheckboxGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (o: string) =>
    onChange(value.includes(o) ? value.filter((v) => v !== o) : [...value, o]);

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((o) => {
        const active = value.includes(o);
        return (
          <button
            type="button"
            key={o}
            onClick={() => toggle(o)}
            className={cn(
              "flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all duration-200",
              active
                ? "border-ink bg-primary text-primary-foreground"
                : "border-hairline bg-card hover:border-ink/30",
            )}
          >
            {active ? <Check className="size-3.5" /> : null}
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function FileUpload({
  fileName,
  onFile,
}: {
  fileName: string;
  onFile: (name: string) => void;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex w-full items-center justify-between gap-4 rounded-xl border border-dashed border-ink/25 bg-card px-4 py-5 text-left text-sm transition-colors hover:border-ink/50"
      >
        <span className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary">
            <Upload className="size-4 text-primary-foreground" />
          </span>
          <span className={fileName ? "font-medium" : "text-muted-foreground"}>
            {fileName || "Click to upload your resume"}
          </span>
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {fileName ? "Replace" : "Browse"}
        </span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onFile(file.name);
        }}
      />
    </div>
  );
}
