const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+[1-9]\d{7,14}$/;

export const FIELD_LIMITS = {
  name: 120,
  email: 254,
  phone: 20,
  company: 120,
  message: 1000,
  details: 2000,
  utm: 200,
  page: 500,
  referrer: 500,
  source: 80,
  requestType: 40,
} as const;

export function pick(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function clip(value: string, max: number) {
  return value.slice(0, max);
}

export function isHoneypotFilled(form: FormData) {
  return pick(form, "website").length > 0;
}

export function isValidEmail(value: string) {
  return value.length > 0 && value.length <= FIELD_LIMITS.email && EMAIL_RE.test(value);
}

export function isValidOptionalPhone(value: string) {
  if (!value) return true;
  return PHONE_RE.test(value) && value.length <= FIELD_LIMITS.phone;
}

export function checkboxGiven(form: FormData, key: string) {
  const value = pick(form, key).toLowerCase();
  return value === "on" || value === "true" || value === "yes" || value === "1";
}
