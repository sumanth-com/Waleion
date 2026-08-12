"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, ChevronDown, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { DIAL_COUNTRIES, getDialCountry } from "@/data/dial-codes";
import { cn } from "@/lib/utils";

const MESSAGE_MAX = 1000;

const fieldClass =
  "h-11 rounded-2xl border-black/[0.08] bg-white px-3.5 text-[14px] shadow-none focus-visible:border-neutral-400 focus-visible:ring-neutral-400/20 dark:border-white/12 dark:bg-white/[0.04]";

/**
 * Native HTML form POST to /api/contact — no client AJAX to Google.
 * Hidden Source + UTM fields are filled from the current URL.
 */
export function ContactForm() {
  const searchParams = useSearchParams();
  const dialRef = useRef<HTMLDivElement>(null);
  const [pending, setPending] = useState(false);
  const [dialOpen, setDialOpen] = useState(false);
  const [countryIso, setCountryIso] = useState("IN");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [message, setMessage] = useState("");
  const [utm, setUtm] = useState({
    source: "Contact Page",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    page: "",
    referrer: "",
  });

  const country = useMemo(() => getDialCountry(countryIso), [countryIso]);
  const error = searchParams.get("error");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtm({
      source: params.get("source") || "Contact Page",
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      page: window.location.href.split("?")[0] || "",
      referrer: document.referrer || "",
    });
  }, []);

  useEffect(() => {
    setPhoneDigits((prev) => prev.slice(0, country.max));
    setPhoneError("");
  }, [country.max]);

  useEffect(() => {
    if (!pending) return;
    const id = window.setTimeout(() => setPending(false), 8000);
    return () => window.clearTimeout(id);
  }, [pending]);

  useEffect(() => {
    if (!dialOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!dialRef.current?.contains(event.target as Node)) {
        setDialOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDialOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dialOpen]);

  const onPhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, country.max);
    setPhoneDigits(digits);
    if (!digits) {
      setPhoneError("");
      return;
    }
    if (digits.length < country.min) {
      setPhoneError(
        `Enter ${country.min}${country.min === country.max ? "" : `–${country.max}`} digits`
      );
    } else {
      setPhoneError("");
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (phoneDigits && phoneDigits.length < country.min) {
      event.preventDefault();
      setPhoneError(
        `Enter ${country.min}${country.min === country.max ? "" : `–${country.max}`} digits`
      );
      return;
    }
    if (message.length > MESSAGE_MAX) {
      event.preventDefault();
      return;
    }
    setPending(true);
  };

  const fullPhone = phoneDigits ? `${country.dial}${phoneDigits}` : "";

  return (
    <form
      action="/api/contact"
      method="post"
      className="flex h-full min-h-0 flex-col gap-4"
      onSubmit={onSubmit}
      noValidate={false}
    >
      <input type="hidden" name="source" value={utm.source} />
      <input type="hidden" name="utm_source" value={utm.utm_source} />
      <input type="hidden" name="utm_medium" value={utm.utm_medium} />
      <input type="hidden" name="utm_campaign" value={utm.utm_campaign} />
      <input type="hidden" name="utm_term" value={utm.utm_term} />
      <input type="hidden" name="utm_content" value={utm.utm_content} />
      <input type="hidden" name="page" value={utm.page} />
      <input type="hidden" name="referrer" value={utm.referrer} />
      <input type="hidden" name="country_code" value={country.dial} />
      <input type="hidden" name="phone" value={fullPhone} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-[12px] text-muted-foreground">
            Full name
          </Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-[12px] text-muted-foreground">
            Work email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label
            htmlFor="phone_national"
            className="text-[12px] text-muted-foreground"
          >
            Phone <span className="text-muted-foreground/70">(optional)</span>
          </Label>
          <div
            className={cn(
              "flex h-11 overflow-visible rounded-2xl border border-black/[0.08] bg-white dark:border-white/12 dark:bg-white/[0.04]",
              phoneError && "border-rose-400"
            )}
          >
            <div ref={dialRef} className="relative shrink-0">
              <button
                type="button"
                aria-label="Country code"
                aria-expanded={dialOpen}
                aria-haspopup="listbox"
                onClick={() => setDialOpen((open) => !open)}
                className="flex h-full min-w-[4.35rem] items-center gap-0.5 border-r border-black/[0.06] px-2.5 text-[13px] font-medium text-foreground outline-none transition-colors hover:bg-black/[0.02] dark:border-white/10 dark:hover:bg-white/[0.04]"
              >
                <span>{country.dial}</span>
                <ChevronDown
                  className={cn(
                    "size-3.5 text-muted-foreground transition-transform duration-200",
                    dialOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>

              <div
                className={cn(
                  "absolute left-0 top-[calc(100%+0.35rem)] z-30 w-[5.75rem] origin-top rounded-xl border border-black/[0.08] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-[opacity,transform] duration-200 ease-out dark:border-white/12 dark:bg-neutral-950",
                  dialOpen
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0"
                )}
              >
                <ul
                  role="listbox"
                  aria-label="Country codes"
                  data-lenis-prevent
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  className="max-h-44 overflow-y-auto overscroll-contain py-1 [scrollbar-gutter:stable] [scrollbar-width:thin]"
                >
                  {DIAL_COUNTRIES.map((item) => {
                    const selected = item.iso === countryIso;
                    return (
                      <li key={item.iso} role="option" aria-selected={selected}>
                        <button
                          type="button"
                          onClick={() => {
                            setCountryIso(item.iso);
                            setDialOpen(false);
                          }}
                          className={cn(
                            "flex w-full items-center px-3 py-1.5 text-left text-[13px] font-medium tracking-tight transition-colors",
                            selected
                              ? "bg-black/[0.05] text-foreground dark:bg-white/10"
                              : "text-foreground/85 hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
                          )}
                        >
                          {item.dial}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <input
              id="phone_national"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder={`${country.max} digits`}
              value={phoneDigits}
              onChange={(e) => onPhoneChange(e.target.value)}
              maxLength={country.max}
              className="min-w-0 flex-1 rounded-r-2xl bg-transparent px-3 text-[14px] text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          {phoneError ? (
            <p className="text-[12px] text-rose-600" role="alert">
              {phoneError}
            </p>
          ) : null}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company" className="text-[12px] text-muted-foreground">
            Company <span className="text-muted-foreground/70">(optional)</span>
          </Label>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Company name"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col space-y-1.5">
        <div className="flex items-center justify-between gap-3">
          <Label htmlFor="message" className="text-[12px] text-muted-foreground">
            What are you building?
          </Label>
          <span
            className={cn(
              "text-[11px] tabular-nums text-muted-foreground",
              message.length >= MESSAGE_MAX && "text-rose-600"
            )}
          >
            {message.length}/{MESSAGE_MAX}
          </span>
        </div>
        <Textarea
          id="message"
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, MESSAGE_MAX))}
          maxLength={MESSAGE_MAX}
          placeholder="Briefly share the product, timeline, and what you need help with."
          className={cn(
            fieldClass,
            "h-[8.25rem] min-h-0 max-h-[8.25rem] flex-1 resize-none overflow-y-auto overscroll-contain py-3 [field-sizing:fixed]"
          )}
          data-lenis-prevent
        />
      </div>

      {error ? (
        <p className="text-[13px] text-rose-600" role="alert">
          {error === "email"
            ? "Please enter a valid email."
            : error === "missing"
              ? "Name, email, and message are required."
              : error === "phone"
                ? "Enter a valid phone number for the selected country."
                : error === "message"
                  ? "Message must be 1000 characters or fewer."
                  : error === "config"
                    ? "Form isn’t configured yet. Email us directly for now."
                    : "Something went wrong. Please try again or email us."}
        </p>
      ) : null}

      <div className="mt-auto space-y-3 pt-1">
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
              Send message
              <ArrowUpRight className="size-3.5" aria-hidden />
            </>
          )}
        </button>

        <p className="text-center text-[12px] leading-relaxed text-muted-foreground">
          We typically reply within 1 business day. By sending, you agree to our{" "}
          <Link
            href="/privacy"
            className="text-foreground/80 underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms"
            className="text-foreground/80 underline-offset-2 hover:underline"
          >
            Terms of Use
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
