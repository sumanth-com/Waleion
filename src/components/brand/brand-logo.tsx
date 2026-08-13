import Image from "next/image";
import logo from "@/assets/log.png";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
  /** Empty when the wordmark is shown next to the mark. */
  alt?: string;
};

/**
 * Waleion mark from src/assets/log.png — used in header, footer, and brand lockups.
 */
export function BrandLogo({
  className,
  size = 32,
  priority = false,
  alt = SITE.name,
}: BrandLogoProps) {
  return (
    <Image
      src={logo}
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={cn("rounded-[8px] object-cover", className)}
    />
  );
}
