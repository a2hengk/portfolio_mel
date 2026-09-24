"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/content";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/image.png"
            alt="Profilbild"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border-2 border-[var(--primary)] object-cover object-[50%_20%] shadow-[0_4px_14px_-4px_rgba(200,30,60,0.7)]"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="heading-font text-sm font-bold text-[var(--foreground)]">
              {site.name}
            </span>
            <span className="text-xs text-[var(--muted)]">{site.role}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`heading-font rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-[var(--accent-soft)] text-[var(--primary-light)]"
                    : "text-[var(--muted)] hover:bg-[var(--accent-soft)]/60 hover:text-[var(--primary-light)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--primary-light)] md:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          <span className="heading-font text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--border)] bg-[var(--background)] px-6 py-3 md:hidden">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`heading-font rounded-xl px-4 py-2.5 text-sm font-semibold ${
                  active
                    ? "bg-[var(--accent-soft)] text-[var(--primary-light)]"
                    : "text-[var(--muted)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
