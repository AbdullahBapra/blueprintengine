"use client";

import { useMemo, useRef, useState } from "react";
import { brand } from "@/content/brand";
import { categories } from "@/content/services";
import { faqs } from "@/content/pages";
import { SectionHeading, type HeadingProps } from "@/components/ui/section-heading";
import { DynIcon } from "@/components/ui/dyn-icon";
import { PillButton } from "@/components/ui/pill-button";

type Msg = { role: "bot" | "user"; text: string; source?: string };

/**
 * Demo chatbot. It does real retrieval over this website's own content (services + FAQs)
 * using simple keyword scoring — no LLM or backend needed. To connect a production RAG bot,
 * replace `answer()` with a call to your own API route or chatbot provider.
 */
function useKnowledge() {
  return useMemo(() => {
    const docs = [
      ...faqs.map((f) => ({ text: f.a, source: "FAQ", title: f.q })),
      ...categories.flatMap((c) =>
        c.services.map((s) => ({ text: `${s.title}: ${s.intro}`, source: c.title, title: s.title })),
      ),
    ];
    const tokenize = (t: string) => t.toLowerCase().match(/[a-z0-9]+/g)?.filter((w) => w.length > 2) ?? [];
    const stop = new Set(["the", "and", "you", "your", "for", "can", "what", "how", "does", "with", "our", "are", "that", "this", "any", "about"]);
    return (question: string): Msg => {
      const q = tokenize(question).filter((w) => !stop.has(w));
      let best = { score: 0, doc: docs[0] };
      for (const doc of docs) {
        const words = tokenize(doc.title + " " + doc.text);
        const score = q.reduce((acc, w) => acc + words.filter((x) => x.startsWith(w) || w.startsWith(x)).length, 0);
        if (score > best.score) best = { score, doc };
      }
      if (best.score === 0) {
        return { role: "bot", text: "I'm not sure about that one — our team can answer it on a free AI audit call. Want me to point you to the booking page? It's at /contact." };
      }
      return { role: "bot", text: best.doc.text, source: best.doc.source };
    };
  }, []);
}

const suggestions = ["Can you build a voice receptionist?", "Is my data GDPR safe?", "n8n or Zapier?", "How long does a project take?"];

function ChatDemo() {
  const answer = useKnowledge();
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: `Hi! I'm the ${brand.name} assistant. Ask me anything about our services, pricing or process.` },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const list = useRef<HTMLDivElement>(null);

  const send = (text: string) => {
    if (!text.trim() || typing) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, answer(text)]);
      setTyping(false);
      requestAnimationFrame(() => list.current?.scrollTo({ top: list.current.scrollHeight, behavior: "smooth" }));
    }, 700);
    requestAnimationFrame(() => list.current?.scrollTo({ top: list.current.scrollHeight, behavior: "smooth" }));
  };

  return (
    <div className="flex h-[44rem] flex-col overflow-hidden rounded-[1.875rem] border-[0.8px] border-[var(--line)] bg-white max-md:h-[34rem]">
      <div className="flex items-center gap-[1rem] border-b border-black/10 bg-[var(--mint-50)] px-[1.6rem] py-[1.2rem]">
        <span className="flex h-[3.4rem] w-[3.4rem] items-center justify-center rounded-full bg-[var(--accent)]">
          <DynIcon name="Bot" className="h-[1.8rem] w-[1.8rem] text-black" />
        </span>
        <div>
          <div className="text-[1.4rem] font-semibold leading-tight text-[var(--ink)] max-md:text-base">RAG Chatbot Demo</div>
          <div className="text-[1rem] leading-tight text-black/60 max-md:text-xs">Answers retrieved from this website&apos;s content</div>
        </div>
      </div>

      <div ref={list} className="flex-1 space-y-[1rem] overflow-y-auto p-[1.6rem]">
        {msgs.map((m, i) => (
          <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
            <div
              className={
                m.role === "user"
                  ? "max-w-[80%] rounded-[1.2rem] rounded-br-[0.3rem] bg-[var(--teal)] px-[1.2rem] py-[0.8rem] text-[1.15rem] leading-[1.6rem] text-white max-md:text-sm"
                  : "max-w-[85%] rounded-[1.2rem] rounded-bl-[0.3rem] bg-[var(--mint-50)] px-[1.2rem] py-[0.8rem] text-[1.15rem] leading-[1.6rem] text-[var(--ink)] max-md:text-sm"
              }
            >
              {m.text}
              {m.source && <div className="mt-[0.4rem] text-[0.9rem] uppercase tracking-wide text-[var(--teal)]">Source: {m.source}</div>}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex gap-[0.3rem] px-[0.4rem]">
            {[0, 1, 2].map((d) => (
              <span key={d} className="h-[0.6rem] w-[0.6rem] animate-bounce rounded-full bg-[var(--teal)]" style={{ animationDelay: `${d * 120}ms` }} />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-[0.5rem] px-[1.6rem] pb-[0.8rem]">
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => send(s)}
            className="rounded-full border border-[var(--teal)] px-[0.9rem] py-[0.3rem] text-[1rem] text-[var(--teal)] transition-colors hover:bg-[var(--mint-100)] max-md:text-xs"
          >
            {s}
          </button>
        ))}
      </div>

      <form
        className="flex gap-[0.6rem] border-t border-black/10 p-[1rem]"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question…"
          aria-label="Ask the demo chatbot a question"
          className="flex-1 rounded-full border border-black/15 px-[1.2rem] py-[0.8rem] text-[1.15rem] focus:border-[var(--teal)] focus:outline-none max-md:text-sm"
        />
        <PillButton type="submit" size="sm">
          Send
        </PillButton>
      </form>
    </div>
  );
}

function VoiceDemo() {
  const tel = brand.demoPhone.replace(/[^+\d]/g, "");
  return (
    <div className="relative flex h-[44rem] flex-col justify-between overflow-hidden rounded-[1.875rem] bg-[#040404] p-[2.4rem] text-white max-md:h-auto max-md:gap-8 max-md:p-6">
      <div className="absolute -right-[6rem] -top-[6rem] h-[22rem] w-[22rem] rounded-full bg-[var(--teal)] opacity-40 blur-[4rem]" />
      <div className="relative">
        <span className="rounded-full bg-white/10 px-[0.9rem] py-[0.3rem] text-[1rem] uppercase tracking-widest text-white/70">AI Voice Agent</span>
        <h3 className="mt-[1.4rem] text-[3.125rem] font-light uppercase leading-[3.75rem] max-md:text-2xl">
          Call Our <strong className="font-bold text-[var(--accent)]">AI Receptionist</strong>
        </h3>
        <p className="mt-[1rem] max-w-[36rem] text-[1.125rem] font-thin leading-[1.75rem] text-white/80">
          Ask about services, check availability or book a call — it answers 24/7, just like the agents we build for clients.
        </p>
      </div>

      {/* Animated voice waveform */}
      <div className="relative flex h-[8rem] items-center justify-center gap-[0.5rem]" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="voice-bar w-[0.45rem] rounded-full bg-[var(--accent)]"
            style={{ animationDelay: `${(i % 7) * 110}ms`, height: `${30 + ((i * 37) % 60)}%` }}
          />
        ))}
      </div>

      <div className="relative flex flex-wrap items-center gap-[1.6rem]">
        <a
          href={`tel:${tel}`}
          className="group relative flex h-[6rem] w-[6rem] items-center justify-center rounded-full bg-[var(--accent)] text-black"
          aria-label={`Call ${brand.demoPhone}`}
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-30" />
          <DynIcon name="Phone" className="relative h-[2.4rem] w-[2.4rem] transition-transform group-hover:rotate-12" strokeWidth={2} />
        </a>
        <div>
          <div className="text-[1rem] uppercase tracking-widest text-white/60">Tap to call</div>
          <a href={`tel:${tel}`} className="text-[2.4rem] font-semibold leading-tight hover:text-[var(--accent)] max-md:text-xl">
            {brand.demoPhone}
          </a>
        </div>
      </div>
    </div>
  );
}

export function LiveDemo({ heading }: { heading: HeadingProps }) {
  return (
    <section className="sec-red bg-white">
      <div className="container-x">
        <SectionHeading {...heading} />
        <div className="mt-[3rem] grid grid-cols-2 gap-[2rem] max-md:grid-cols-1">
          <VoiceDemo />
          <ChatDemo />
        </div>
      </div>
    </section>
  );
}
