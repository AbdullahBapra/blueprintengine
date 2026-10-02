import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-[1.6rem] flex flex-wrap items-center gap-[0.6rem] text-[1.1rem] uppercase leading-none text-white/70 max-md:text-xs">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-[0.6rem]">
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-[var(--accent)]">
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--accent)]">{item.label}</span>
          )}
          {i < items.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
    </nav>
  );
}
