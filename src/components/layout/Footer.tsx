import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Button } from "@/components/kit/Button";
import { departments } from "@/data/departments";
import { contact, navLinks } from "@/data/navigation";

const socialIcons = { Instagram, Linkedin, Youtube };

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="section-x py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="size-9" aria-hidden="true">
                <path d="M4 4 L26 12 L14 18 Z" fill="var(--primary)" />
                <path d="M14 18 L26 12 L20 32 Z" fill="var(--primary)" opacity="0.55" />
              </svg>
              <span className="leading-none">
                <span className="block text-2xl font-bold tracking-tight">enactus</span>
                <span className="block text-[10px] font-semibold tracking-[0.35em] text-primary">
                  VITC
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-foreground/65">
              A student-run organisation at VIT Chennai using entrepreneurial action to create
              lasting social impact.
            </p>
            <p className="display mt-8 text-lg">
              We see <span className="text-primary">opportunity</span> where others don&apos;t.
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { label: "Instagram", href: "https://instagram.com", icon: "Instagram" as const },
                { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" as const },
                { label: "YouTube", href: "https://youtube.com", icon: "Youtube" as const },
              ].map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-full border border-primary/50 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="display text-lg text-primary">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group flex items-center gap-2 text-ink-foreground/70 transition-colors hover:text-primary"
                  >
                    <ChevronRight className="size-3.5 text-primary" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="display text-lg text-primary">Departments</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {departments.map((d) => (
                <li key={d.id}>
                  <a
                    href={`/apply/${d.id}`}
                    className="group flex items-center gap-2 text-ink-foreground/70 transition-colors hover:text-primary"
                  >
                    <ChevronRight className="size-3.5 text-primary" />
                    {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="display text-lg text-primary">Contact Us</h3>
            <ul className="mt-6 space-y-4 text-sm text-ink-foreground/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  {contact.address[0]}
                  <br />
                  {contact.address[1]}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary">
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 shrink-0 text-primary" />
                {contact.phone}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="section-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Enactus VIT Chennai. All rights reserved.</p>
          <p>Recruitment 2026 · Built by the Enactus VITC Web Team</p>
        </div>
      </div>
    </footer>
  );
}
