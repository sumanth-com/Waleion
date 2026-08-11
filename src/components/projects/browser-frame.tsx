import Image from "next/image";

type BrowserFrameProps = {
  src: string;
  url?: string;
  alt: string;
};

export function BrowserFrame({ src, url, alt }: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-black/8 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
      <div className="relative flex h-11 items-center border-b border-black/6 px-4">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-neutral-300" />
          <span className="size-2.5 rounded-full bg-neutral-300" />
          <span className="size-2.5 rounded-full bg-neutral-300" />
        </span>
        {url ? (
          <span className="absolute left-1/2 max-w-[60%] -translate-x-1/2 truncate rounded-full bg-neutral-100 px-3 py-1 text-[11px] text-neutral-500">
            {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        ) : null}
      </div>
      <div className="relative aspect-[16/9] bg-neutral-100">
        <Image src={src} alt={alt} fill sizes="1152px" className="object-cover object-top" />
      </div>
    </div>
  );
}
