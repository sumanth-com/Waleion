type GrowthChartProps = {
  color: string;
  label: string;
  value: string;
};

export function GrowthChart({ color, label, value }: GrowthChartProps) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-black/50 p-5 shadow-[0_0_40px_color-mix(in_srgb,var(--glow)_25%,transparent)]" style={{ ["--glow" as string]: color }}>
      <div className="flex justify-end">
        <span className="inline-flex items-center gap-1 rounded-full border border-white/12 px-2.5 py-1 text-[11px] text-white/55">
          Monthly
          <span aria-hidden className="text-[9px]">
            ▾
          </span>
        </span>
      </div>
      <p className="mt-8 text-[11px] uppercase tracking-[0.16em] text-white/45">
        {label}
      </p>
      <p className="mt-1 flex items-center gap-2 text-[2.4rem] font-semibold tracking-tight text-white">
        {value}
        <span
          aria-hidden
          className="mb-1 inline-block border-x-[5px] border-b-[8px] border-x-transparent"
          style={{ borderBottomColor: color }}
        />
      </p>
      <svg
        viewBox="0 0 320 110"
        className="mt-4 h-[88px] w-full"
        aria-hidden
      >
        <path
          d="M0 78 C 28 78, 36 62, 58 58 C 86 52, 96 84, 124 70 C 148 58, 164 28, 196 34 C 228 40, 236 18, 268 22 C 292 24, 304 12, 320 8"
          fill="none"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          className="growth-line"
        />
        <path
          d="M0 78 C 28 78, 36 62, 58 58 C 86 52, 96 84, 124 70 C 148 58, 164 28, 196 34 C 228 40, 236 18, 268 22 C 292 24, 304 12, 320 8 L 320 110 L 0 110 Z"
          fill={color}
          opacity="0.14"
        />
      </svg>
    </div>
  );
}
