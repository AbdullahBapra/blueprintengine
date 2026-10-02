import Image from "next/image";
import logo from "../../public/images/blueprintlogo.png";
import { brand } from "@/content/brand";
import { cn } from "@/lib/utils";

/**
 * Blueprint Engine logo (light text + aqua accent, transparent PNG) — made for dark
 * backgrounds such as the header and footer. Set the height via className; width follows.
 */
export function BrandLogo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return <Image src={logo} alt={brand.name} priority={priority} className={cn("h-[2.6rem] w-auto", className)} />;
}
