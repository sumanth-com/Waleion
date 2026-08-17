"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/constants/site";
import { DATA_RIGHTS_TYPES } from "@/constants/privacy";
import {
  ConsentCheckbox,
  NoticeVersionNote,
  PrivacyNoticeLink,
} from "@/components/privacy/consent-checkbox";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-11 rounded-2xl border-black/[0.08] bg-white px-3.5 text-[14px] shadow-none focus-visible:border-neutral-400 focus-visible:ring-neutral-400/20 dark:border-white/12 dark:bg-white/[0.04]";

export function DataRightsForm() {
  const searchParams = useSearchParams();
  const [pending, setPending] = useState(false);
  const [page, setPage] = useState("");
  const error = searchParams.get("error");
  const sent = searchParams.get("sent") === "1";

  useEffect(() => {
    setPage(window.location.href.split("?")[0] || "");
  }, []);

  useEffect(() => {
    if (!pending) return;
    const id = window.setTimeout(() => setPending(false), 8000);
    return () => window.clearTimeout(id);
  }, [pending]);

  if (sent) {
    return (
      <div className="space-y-4 rounded-[1.5rem] border border-black/[0.06] bg-white/90 p-6 dark:border-white/10 dark:bg-white/[0.06]">
        <p className="text-[15px] font-semibold tracking-tight text-foreground">
          Request received
        </p>
        <p className="text-[14px] leading-relaxed text-muted-foreground">
          We recorded your request for internal handling. This page does not
          display personal data. If we need to verify the request, we will use
          the email address you submitted.
        </p>
        <p className="text-[13px] leading-relaxed text-muted-foreground">
          You can also write to{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-foreground/80 underline-offset-2 hover:underline"
          >
            {SITE.email}
          </a>{" "}
          if you have a follow-up. A dedicated grievance officer contact is
          still a business confirmation item.
        </p>
        <Link
          href="/privacy"
          className="inline-flex text-[13px] font-medium text-foreground underline-offset-4 hover:underline"
        >
          Back to Privacy Notice
        </Link>
      </div>
    );
  }

  return (
    <form
      action="/api/data-rights"
      method="post"
      className="relative flex flex-col gap-4"
      onSubmit={() => setPending(true)}
    >
      <input type="hidden" name="page" value={page} />
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="rights-name" className="text-[12px] text-muted-foreground">
          Full name
        </Label>
        <Input
          id="rights-name"
          name="name"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="rights-email" className="text-[12px] text-muted-foreground">
          Email
        </Label>
        <Input
          id="rights-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="request_type" className="text-[12px] text-muted-foreground">
          Request type
        </Label>
        <select
          id="request_type"
          name="request_type"
          required
          defaultValue=""
          className={cn(fieldClass, "w-full")}
        >
          <option value="" disabled>
            Select a request type
          </option>
          {DATA_RIGHTS_TYPES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="details" className="text-[12px] text-muted-foreground">
          Details
        </Label>
        <Textarea
          id="details"
          name="details"
          required
          maxLength={2000}
          placeholder="Describe the request. Do not include passwords, payment card numbers, or government ID images."
          className={cn(fieldClass, "h-36 resize-none py-3")}
        />
      </div>

      {error ? (
        <p className="text-[13px] text-rose-600" role="alert">
          {error === "email"
            ? "Please enter a valid email."
            : error === "missing"
              ? "Name, email, request type, and details are required."
              : error === "consent"
                ? "Please confirm that we may process this request."
                : error === "rate"
                  ? "Too many attempts from this network. Please wait and try again."
                  : error === "type"
                    ? "Choose a valid request type."
                    : error === "config"
                      ? "Form isn’t configured yet. Email us directly for now."
                      : "Something went wrong. Please try again or email us."}
        </p>
      ) : null}

      <ConsentCheckbox
        id="consent_request"
        name="consent_request"
        error={error === "consent"}
      >
        I agree to {SITE.name} processing the information in this form solely
        to receive, verify, and handle this request. <PrivacyNoticeLink />{" "}
        <NoticeVersionNote />. Submitting a request does not automatically
        display or email a copy of stored personal data.
      </ConsentCheckbox>

      <button
        type="submit"
        disabled={pending}
        className={cn(
          buttonVariants({ size: "lg" }),
          "h-11 w-full rounded-full px-6 disabled:opacity-70",
          "dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
        )}
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Submit request
            <ArrowUpRight className="size-3.5" aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}
