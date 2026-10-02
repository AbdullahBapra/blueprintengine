import { processSteps } from "@/content/pages";
import { PillButton } from "@/components/ui/pill-button";
import { SectionHeading, type HeadingProps } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function ProcessSteps({
  heading,
  cta = { label: "Book Free AI Audit", href: "/contact" },
}: {
  heading: HeadingProps;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="sec-green bg-white">
      <div className="container-x">
        <div className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
          <SectionHeading {...heading} />
          <PillButton href={cta.href}>{cta.label}</PillButton>
        </div>

        <div className="mt-[3rem] grid grid-cols-2 gap-[2.813rem] max-md:grid-cols-1">
          {processSteps.map((s, i) => (
            <div
              key={s.title}
              className={cn(
                "group/run relative flex min-h-[15.6rem] flex-col overflow-hidden rounded-[1.875rem] border-[0.8px] border-[var(--line)] py-[1.75rem] pl-[1.313rem] pr-[3rem] transition-colors duration-300 hover:bg-[var(--mint-50)]",
                i === processSteps.length - 1 && processSteps.length % 2 === 1 && "col-span-2 bg-[var(--mint-50)] max-md:col-span-1",
              )}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[2.625rem] font-bold uppercase leading-[3.15rem] text-[var(--ink)] max-md:text-2xl">{s.title}</h3>
                  <p className="body-thin mt-[0.3rem] max-w-[34rem]">{s.body}</p>
                </div>
                <span className="run-num text-[5rem] font-bold italic leading-[4.5rem] text-[var(--text)] max-md:text-4xl">{i + 1}</span>
              </div>
              <ul className="mt-[0.8rem] space-y-[0.6rem]">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-[0.8rem] text-[1.125rem] font-thin leading-[1.75rem] text-[var(--ink)]">
                    <span className="mt-[0.75rem] h-[0.3rem] w-[0.3rem] flex-none rounded-full bg-[var(--ink)]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
