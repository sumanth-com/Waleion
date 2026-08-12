export type DialCountry = {
  iso: string;
  name: string;
  dial: string;
  /** National number length without country code */
  min: number;
  max: number;
  flag: string;
};

/** Common dial codes with national digit length support. */
export const DIAL_COUNTRIES: DialCountry[] = [
  { iso: "IN", name: "India", dial: "+91", min: 10, max: 10, flag: "🇮🇳" },
  { iso: "US", name: "United States", dial: "+1", min: 10, max: 10, flag: "🇺🇸" },
  { iso: "GB", name: "United Kingdom", dial: "+44", min: 10, max: 10, flag: "🇬🇧" },
  { iso: "AE", name: "United Arab Emirates", dial: "+971", min: 9, max: 9, flag: "🇦🇪" },
  { iso: "SG", name: "Singapore", dial: "+65", min: 8, max: 8, flag: "🇸🇬" },
  { iso: "AU", name: "Australia", dial: "+61", min: 9, max: 9, flag: "🇦🇺" },
  { iso: "CA", name: "Canada", dial: "+1", min: 10, max: 10, flag: "🇨🇦" },
  { iso: "DE", name: "Germany", dial: "+49", min: 10, max: 11, flag: "🇩🇪" },
  { iso: "FR", name: "France", dial: "+33", min: 9, max: 9, flag: "🇫🇷" },
  { iso: "NL", name: "Netherlands", dial: "+31", min: 9, max: 9, flag: "🇳🇱" },
  { iso: "SE", name: "Sweden", dial: "+46", min: 9, max: 9, flag: "🇸🇪" },
  { iso: "CH", name: "Switzerland", dial: "+41", min: 9, max: 9, flag: "🇨🇭" },
  { iso: "ES", name: "Spain", dial: "+34", min: 9, max: 9, flag: "🇪🇸" },
  { iso: "IT", name: "Italy", dial: "+39", min: 9, max: 10, flag: "🇮🇹" },
  { iso: "PT", name: "Portugal", dial: "+351", min: 9, max: 9, flag: "🇵🇹" },
  { iso: "IE", name: "Ireland", dial: "+353", min: 9, max: 9, flag: "🇮🇪" },
  { iso: "JP", name: "Japan", dial: "+81", min: 10, max: 10, flag: "🇯🇵" },
  { iso: "KR", name: "South Korea", dial: "+82", min: 9, max: 10, flag: "🇰🇷" },
  { iso: "CN", name: "China", dial: "+86", min: 11, max: 11, flag: "🇨🇳" },
  { iso: "HK", name: "Hong Kong", dial: "+852", min: 8, max: 8, flag: "🇭🇰" },
  { iso: "TW", name: "Taiwan", dial: "+886", min: 9, max: 9, flag: "🇹🇼" },
  { iso: "MY", name: "Malaysia", dial: "+60", min: 9, max: 10, flag: "🇲🇾" },
  { iso: "ID", name: "Indonesia", dial: "+62", min: 9, max: 12, flag: "🇮🇩" },
  { iso: "TH", name: "Thailand", dial: "+66", min: 9, max: 9, flag: "🇹🇭" },
  { iso: "PH", name: "Philippines", dial: "+63", min: 10, max: 10, flag: "🇵🇭" },
  { iso: "VN", name: "Vietnam", dial: "+84", min: 9, max: 10, flag: "🇻🇳" },
  { iso: "BD", name: "Bangladesh", dial: "+880", min: 10, max: 10, flag: "🇧🇩" },
  { iso: "PK", name: "Pakistan", dial: "+92", min: 10, max: 10, flag: "🇵🇰" },
  { iso: "LK", name: "Sri Lanka", dial: "+94", min: 9, max: 9, flag: "🇱🇰" },
  { iso: "NP", name: "Nepal", dial: "+977", min: 10, max: 10, flag: "🇳🇵" },
  { iso: "SA", name: "Saudi Arabia", dial: "+966", min: 9, max: 9, flag: "🇸🇦" },
  { iso: "QA", name: "Qatar", dial: "+974", min: 8, max: 8, flag: "🇶🇦" },
  { iso: "KW", name: "Kuwait", dial: "+965", min: 8, max: 8, flag: "🇰🇼" },
  { iso: "BH", name: "Bahrain", dial: "+973", min: 8, max: 8, flag: "🇧🇭" },
  { iso: "OM", name: "Oman", dial: "+968", min: 8, max: 8, flag: "🇴🇲" },
  { iso: "ZA", name: "South Africa", dial: "+27", min: 9, max: 9, flag: "🇿🇦" },
  { iso: "NG", name: "Nigeria", dial: "+234", min: 10, max: 10, flag: "🇳🇬" },
  { iso: "KE", name: "Kenya", dial: "+254", min: 9, max: 9, flag: "🇰🇪" },
  { iso: "BR", name: "Brazil", dial: "+55", min: 10, max: 11, flag: "🇧🇷" },
  { iso: "MX", name: "Mexico", dial: "+52", min: 10, max: 10, flag: "🇲🇽" },
  { iso: "AR", name: "Argentina", dial: "+54", min: 10, max: 10, flag: "🇦🇷" },
  { iso: "NZ", name: "New Zealand", dial: "+64", min: 8, max: 10, flag: "🇳🇿" },
];

export function getDialCountry(iso: string) {
  return DIAL_COUNTRIES.find((c) => c.iso === iso) ?? DIAL_COUNTRIES[0];
}
