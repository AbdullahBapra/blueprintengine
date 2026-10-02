import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/pages";
import { PageHero } from "@/components/PageHero";
import { BlogSlider } from "@/components/sections/BlogSlider";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guides on AI automation, n8n, voice agents, chatbots and speed-to-lead.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        bigLine="Blog"
        subStrong="Practical guides"
        subLight="on AI and automation"
        paragraphs={["No hype — just what works, what doesn't, and how to roll it out in a real business."]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <BlogSlider big="Latest" strong="Fresh" light="from the blog" cta="Free n8n Templates" ctaHref="/free-n8n-templates" />

      <section className="sec-green bg-white">
        <div className="container-x">
          <SectionHeading top="All" big="Articles" />
          <div className="mt-[3rem] divide-y divide-black/15 border-y border-black/15">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group grid grid-cols-[14rem_1fr_auto] items-center gap-[2rem] py-[2rem] max-md:grid-cols-1 max-md:gap-2">
                <span className="w-fit rounded-[0.5rem] bg-[rgba(0,239,212,0.21)] px-[0.75rem] py-[0.4rem] text-[1.1rem] uppercase text-[var(--text)]">{p.tag}</span>
                <div>
                  <h2 className="text-[2.2rem] font-light uppercase leading-[2.6rem] text-[var(--ink)] transition-colors group-hover:text-[var(--teal)] max-md:text-lg">{p.title}</h2>
                  <p className="body-thin mt-[0.3rem]">{p.excerpt}</p>
                </div>
                <span className="text-[1.1rem] uppercase text-black/50">{p.readTime} read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
