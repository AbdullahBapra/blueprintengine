// Copy for the home page and the standalone pages (pricing, FAQ, company, resources).

// ---------- Home ----------
export const home = {
  hero: {
    bigLine: "Automate",
    subStrong: "The Busywork.",
    subLight: "Keep the growth.",
    paragraphs: [
      "Blueprint Engine builds AI agents, voice receptionists and workflow automations that answer leads in seconds, book appointments around the clock and remove hours of manual admin every week.",
      "Start with a free AI audit — we'll show you exactly what to automate first and what it's worth.",
    ],
    primary: { label: "Book Free AI Audit", href: "/contact" },
    secondary: { label: "See Case Studies", href: "/case-studies" },
  },
  // PLACEHOLDER numbers — replace with your real figures before launch.
  proof: [
    { value: "40+", label: "Clients served" },
    { value: "12,000+", label: "Hours saved yearly" },
    { value: "250+", label: "Workflows built" },
    { value: "24/7", label: "Agents answering" },
    { value: "<60s", label: "Lead response time" },
  ],
  services: {
    top: "What We",
    big: "Automate",
    strong: "Four Ways",
    light: "we put AI to work for you",
    intro: "Pick a starting point — every engagement begins with understanding where automation pays off most.",
  },
  process: {
    top: "How We",
    big: "Work",
    strong: "Audit to Optimize",
    light: "in five clear steps",
    intro: "A simple, transparent process — you always know what's being built, why, and what it's worth.",
  },
  demo: {
    top: "Try It",
    big: "Live",
    strong: "Talk to Our AI",
    light: "before you talk to us",
    intro: "Call our AI receptionist or chat with a bot trained on this website. Same technology we build for clients.",
  },
  industries: {
    top: "Built For",
    big: "Your Industry",
    light: "systems proven in businesses like yours",
    intro: "Every industry has its own bottlenecks. These are the ones we solve most often.",
  },
  cases: { big: "Results", strong: "Case Studies", light: "problem, system, outcome" },
  stack: {
    top: "Our",
    big: "Stack",
    strong: "Best-in-Class Tools",
    light: "chosen for each job",
    intro: "We're tool-agnostic and pick the right platform for your volume, budget and data requirements.",
    items: ["n8n", "Make", "Zapier", "OpenAI", "Claude", "Retell", "Vapi", "ElevenLabs"],
  },
  cta: {
    lead: "Ready to",
    big: "Automate",
    tail: "Your Growth?",
    title: "Get Your Free AI Audit",
    body: "In one call we'll map your biggest time sinks, show you what's automatable and give you an honest estimate — no obligation.",
    button: "Book Free AI Audit",
  },
};

export const processSteps = [
  { title: "Audit", body: "We map your processes, tools and bottlenecks and rank opportunities by ROI.", points: ["Stakeholder interviews", "Process & tool mapping", "ROI-ranked opportunity list"] },
  { title: "Blueprint", body: "A clear build plan: architecture, scope, timeline and fixed price.", points: ["System design & data flow", "Fixed scope and price", "Success metrics agreed"] },
  { title: "Build", body: "We build, test and document your automations and agents.", points: ["Weekly progress demos", "Testing on real scenarios", "Security & privacy checks"] },
  { title: "Launch", body: "Go live safely, with your team trained and monitoring in place.", points: ["Parallel run & sign-off", "Team training", "Monitoring & alerts"] },
  { title: "Optimize", body: "We measure results and keep improving what works.", points: ["Monthly performance review", "Prompt & flow tuning", "New opportunities added"] },
];

// ---------- Pricing ----------
export const pricing = {
  audit: {
    title: "AI Audit",
    price: "€990",
    note: "Credited in full toward your build",
    points: ["Process & tool mapping", "ROI-ranked opportunity list", "Blueprint for your first build", "Fixed-price quote"],
  },
  packages: [
    {
      name: "Starter",
      price: "from €2,500",
      desc: "One focused automation or agent, live in 2–3 weeks.",
      points: ["1 core workflow or chatbot", "Up to 3 tool integrations", "Documentation & handover", "30 days of support"],
      style: "white",
    },
    {
      name: "Growth",
      price: "from €7,500",
      desc: "A connected system across sales, support or operations.",
      points: ["Multiple workflows & agents", "Voice or chat agent included", "CRM & reporting integration", "60 days of support"],
      style: "accent",
      featured: true,
    },
    {
      name: "Custom",
      price: "Let's talk",
      desc: "Complex, multi-department or regulated builds.",
      points: ["Custom agents & apps", "EU self-hosting options", "Security & DPA review", "Dedicated project lead"],
      style: "mint",
    },
  ],
  care: [
    { name: "Care Basic", price: "€290/mo", points: ["Monitoring & alerts", "Fixes within 2 business days", "Monthly report"] },
    { name: "Care Plus", price: "€690/mo", points: ["Everything in Basic", "4 improvement hours", "Fixes within 1 business day"] },
    { name: "Care Pro", price: "€1,490/mo", points: ["Everything in Plus", "12 improvement hours", "Same-day priority fixes"] },
  ],
  // PLACEHOLDER prices — adjust to your own rates.
};

// ---------- FAQ ----------
export const faqs = [
  { q: "What does Blueprint Engine actually do?", a: "We're an AI automation agency. We design and build systems that take repetitive work off your team — workflows that move data between tools, AI agents that answer and book, and chatbots trained on your knowledge." },
  { q: "How do I know what to automate first?", a: "That's what the AI audit is for. We map your processes and rank opportunities by time saved, revenue impact and build effort." },
  { q: "How long does a typical project take?", a: "Starter builds usually go live in two to three weeks. Larger systems are delivered in phases, with something live within the first month." },
  { q: "Do you work with our existing tools?", a: "Yes. We build around the CRM, inbox, calendar and software you already use, and only suggest new tools when there's a clear benefit." },
  { q: "Is our data safe and GDPR-compliant?", a: "We follow least-privilege access, can host on EU servers, sign a Data Processing Agreement and choose AI providers that don't train on your data." },
  { q: "Will AI replace my staff?", a: "Our goal is to remove repetitive work so your people can focus on customers and higher-value tasks. Most clients redeploy time rather than cut roles." },
  { q: "What happens after launch?", a: "You own everything we build. Optional care plans cover monitoring, fixes and monthly improvements." },
  { q: "Do you offer white-label services?", a: "Yes — agencies can resell our automation, chatbot and voice agent builds under their own brand." },
];

// ---------- Blog ----------
export type Post = { slug: string; tag: string; title: string; excerpt: string; readTime: string; body: string[] };

export const posts: Post[] = [
  {
    slug: "what-to-automate-first",
    tag: "Strategy",
    title: "What To Automate First In Your Business",
    excerpt: "A simple framework for ranking automation ideas by time saved, revenue impact and effort.",
    readTime: "6 min",
    body: [
      "Most businesses have dozens of automation ideas and no way to choose between them. The trick is to score each idea on three things: how often the task happens, how long it takes, and what it costs when it goes wrong.",
      "Tasks that happen daily, take more than a few minutes and directly affect revenue — like responding to new leads — almost always win. Rare, complex tasks with many exceptions usually don't.",
      "Start with one high-frequency workflow, measure the time saved, and use that result to fund the next step.",
    ],
  },
  {
    slug: "n8n-vs-make-vs-zapier",
    tag: "Tools",
    title: "n8n vs Make vs Zapier: Which One Fits?",
    excerpt: "How to choose an automation platform based on volume, complexity, cost and data requirements.",
    readTime: "8 min",
    body: [
      "Zapier is the fastest to start with and has the largest app library. Make offers more visual control at a lower price per operation. n8n can be self-hosted, has no per-task pricing and handles complex logic well.",
      "Low volume and simple flows: Zapier is fine. Visual multi-step scenarios on a budget: Make. High volume, sensitive data or AI agents: n8n.",
      "Many teams end up with a mix — and that's perfectly fine if each workflow is documented and monitored.",
    ],
  },
  {
    slug: "ai-voice-receptionist-guide",
    tag: "Voice AI",
    title: "A Practical Guide To AI Voice Receptionists",
    excerpt: "What voice agents can handle today, where they struggle, and how to roll one out safely.",
    readTime: "7 min",
    body: [
      "Modern voice agents can answer calls, answer common questions, check availability and book appointments with natural-sounding speech.",
      "They work best with clear rules: what they can book, when to transfer, and what to never promise. Start with after-hours calls, review transcripts weekly, then expand coverage.",
      "Always give callers a way to reach a human — it builds trust and catches the edge cases.",
    ],
  },
  {
    slug: "rag-chatbots-explained",
    tag: "Chatbots",
    title: "RAG Chatbots Explained In Plain English",
    excerpt: "Why retrieval-augmented chatbots give better answers than generic AI — and how to keep them accurate.",
    readTime: "5 min",
    body: [
      "A RAG chatbot looks up relevant passages from your own documents before answering, so its replies are grounded in your content rather than general internet knowledge.",
      "Accuracy depends on the quality of your source content. Clean, up-to-date docs produce better answers than any prompt trick.",
      "Add citations, a clear fallback to a human, and review the questions it couldn't answer — those are your documentation gaps.",
    ],
  },
  {
    slug: "speed-to-lead",
    tag: "Sales",
    title: "Why Speed-To-Lead Wins Deals",
    excerpt: "Responding to leads within minutes changes conversion rates. Here's how to automate it.",
    readTime: "4 min",
    body: [
      "Leads are most receptive in the first minutes after they enquire. Every hour of delay makes them harder to reach and more likely to choose a competitor.",
      "An automated first response — a call or text within a minute — keeps the conversation warm until a person can take over.",
      "Combine instant response with qualification questions so your sales team only spends time on real opportunities.",
    ],
  },
];

// ---------- Company ----------
export const about = {
  big: "About",
  strong: "Automation Engineers",
  light: "with a business-first mindset",
  intro:
    "Blueprint Engine is a small, senior team of automation engineers, AI specialists and designers. We started because we kept seeing talented people buried in admin — and knew the right systems could give them their time back.",
  values: [
    { title: "ROI First", body: "We only build what pays for itself. If automation isn't the answer, we'll say so." },
    { title: "Plain Language", body: "No jargon. You'll always understand what we're building and why." },
    { title: "You Own It", body: "Every workflow, prompt and line of code is yours at handover." },
    { title: "Privacy by Default", body: "EU hosting, least-privilege access and signed DPAs as standard." },
  ],
};

export const careers = {
  intro: "At Blueprint Engine we're always keen to meet people who love building systems that make work easier.",
  roles: [
    { title: "Automation Engineer (n8n / Make)", type: "Remote · EU time zones", body: "Design and build production workflows and integrations for clients." },
    { title: "AI Agent Developer", type: "Remote · EU time zones", body: "Build voice and chat agents with tool use, evaluation and guardrails." },
    { title: "Solutions Consultant", type: "Remote · Part-time or full-time", body: "Run AI audits, scope projects and turn business problems into blueprints." },
  ],
};

export const templates = [
  { title: "Lead-to-CRM Starter", desc: "Capture form leads, enrich them and create CRM contacts.", tools: "n8n · HubSpot" },
  { title: "AI Email Triage", desc: "Classify incoming email and draft replies with AI.", tools: "n8n · Gmail · OpenAI" },
  { title: "Invoice Data Extractor", desc: "Pull line items from PDF invoices into a spreadsheet.", tools: "n8n · Claude · Sheets" },
  { title: "Missed-Call Text Back", desc: "Send an instant SMS when a call goes unanswered.", tools: "n8n · Twilio" },
  { title: "Weekly KPI Digest", desc: "Collect metrics and post an AI summary to Slack.", tools: "n8n · Slack · OpenAI" },
  { title: "RAG Knowledge Bot", desc: "Answer questions from your Google Drive documents.", tools: "n8n · Drive · Pinecone" },
];
