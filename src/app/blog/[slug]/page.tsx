import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/content/pages";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PillButton } from "@/components/ui/pill-button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        bigLine={post.tag}
        subStrong={post.title}
        paragraphs={[`${post.readTime} read · ${post.excerpt}`]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.tag }]}
      />
      <article className="sec-green bg-white">
        <div className="container-x prose-page max-w-[80rem]">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="mt-[3rem]">
            <PillButton href="/blog">Back to Blog</PillButton>
          </div>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
