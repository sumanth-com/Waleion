import type { ReactNode } from "react";
import Link from "next/link";
import { PRIVACY_NOTICE_VERSION } from "@/constants/privacy";
import { cn } from "@/lib/utils";

type ConsentCheckboxProps = {
  id: string;
  name: string;
  required?: boolean;
  children: ReactNode;
  error?: boolean;
};

/**
 * Unticked-by-default opt-in. Do not pre-check this in callers.
 */
export function ConsentCheckbox({
  id,
  name,
  required = true,
  children,
  error = false,
}: ConsentCheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex cursor-pointer items-start gap-3 text-[12.5px] leading-relaxed text-muted-foreground",
        error && "text-rose-700 dark:text-rose-300"
      )}
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        value="true"
        required={required}
        defaultChecked={false}
        className="mt-0.5 size-4 shrink-0 rounded border-black/20 text-neutral-950 accent-neutral-950"
      />
      <span>{children}</span>
    </label>
  );
}

export function PrivacyNoticeLink({
  className,
}: {
  className?: string;
}) {
  return (
    <Link
      href="/privacy"
      className={cn(
        "text-foreground/80 underline-offset-2 hover:underline",
        className
      )}
    >
      Privacy Notice
    </Link>
  );
}

export function NoticeVersionNote() {
  return (
    <span className="text-muted-foreground/80">
      (notice version {PRIVACY_NOTICE_VERSION})
    </span>
  );
}
