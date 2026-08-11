import Image from "next/image";

type DeviceClusterProps = {
  src: string;
  alt: string;
};

export function DeviceCluster({ src, alt }: DeviceClusterProps) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-black/[0.06] bg-white p-3 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-5">
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
