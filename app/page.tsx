import Image from "next/image";

const profile = {
  name: "Emeka Chidoka",
  role: "Data Engineer",
  intro:
    "I design data systems that stay clean, dependable, and useful long after launch. From ingestion and transformation to warehousing and delivery, I build the pipelines and analytics foundations teams can confidently scale on.",
  location: "Available for remote and collaborative product teams",
  email: "mailto:hello@emekachidoka.com",
  github: "https://github.com/emekachidoka",
  linkedin: "https://www.linkedin.com/in/emekachidoka",
  resume: "/Emeka_Chidoka.pdf",
};

const heroStats = [
  { value: "ETL / ELT", label: "Pipelines structured for reliability and change" },
  { value: "Warehousing", label: "Models built for reporting, product, and ops" },
  { value: "Automation", label: "Repeatable workflows that reduce manual effort" },
];

const focusAreas = [
  {
    title: "Pipeline Architecture",
    icon: "pipeline",
    description:
      "Batch and near-real-time pipelines designed for maintainability, observability, and safe iteration as data volume grows.",
  },
  {
    title: "Analytics Engineering",
    icon: "analytics",
    description:
      "Well-modeled datasets that help business teams self-serve metrics, dashboards, and decision-ready reporting.",
  },
  {
    title: "Data Quality",
    icon: "quality",
    description:
      "Validation-first thinking with checks, monitoring, and documentation that make trust in the data measurable.",
  },
  {
    title: "Platform Thinking",
    icon: "platform",
    description:
      "Engineering habits that connect business context to scalable architecture, not just one-off data tasks.",
  },
];

const impactCards = [
  {
    title: "Operational clarity",
    description:
      "Turns scattered data touchpoints into dependable systems that support planning, reporting, and day-to-day execution.",
  },
  {
    title: "Business-ready outputs",
    description:
      "Builds datasets and transformations around how teams actually consume information, not just how it is stored.",
  },
  {
    title: "Long-term maintainability",
    description:
      "Prefers structured, documented pipelines that are easy to understand, debug, and extend as requirements evolve.",
  },
];

const deliveryPoints = [
  "Translate raw, inconsistent source data into usable warehouse-ready models.",
  "Design workflows that reduce reporting friction for product, operations, and leadership.",
  "Bring engineering discipline to analytics work through structure, testing, and documentation.",
  "Create data foundations that help teams move from reactive reporting to proactive decision-making.",
];

const toolbox = [
  "Python",
  "SQL",
  "ETL / ELT",
  "Data Warehousing",
  "Orchestration",
  "Data Modeling",
  "Analytics Enablement",
  "Pipeline Monitoring",
  "Documentation",
  "Stakeholder Collaboration",
];

const collaborationSteps = [
  {
    id: "01",
    title: "Understand the decision behind the data",
    text: "Every pipeline should support a real operational, product, or reporting need. I start by making that need explicit.",
  },
  {
    id: "02",
    title: "Build for trust before speed alone",
    text: "Reliable schemas, clean transformations, and clear ownership make downstream work faster and less fragile.",
  },
  {
    id: "03",
    title: "Make systems easier to extend",
    text: "Good data engineering does not just solve today's issue. It creates a base other teams can keep building on.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-muted sm:text-lg">{description}</p>
      </div>
    </div>
  );
}

function FocusIcon({ type }: { type: string }) {
  const iconClass =
    "h-5 w-5 text-accent-secondary transition duration-300 group-hover:text-accent";

  if (type === "pipeline") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path
          d="M5 7h6m3 0h5M9 7v10m0 0H6m3 0h4m4-5h2m-2 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-8-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "analytics") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path
          d="M5 19V9m7 10V5m7 14v-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M4 19h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "quality") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path
          d="M12 4l6 2.5v5c0 4.1-2.5 6.9-6 8.5-3.5-1.6-6-4.4-6-8.5v-5L12 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="m9.5 12 1.7 1.7 3.3-3.7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path
        d="M7 7h10v10H7zM4 12h3m10 0h3M12 4v3m0 10v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <section className="page-shell section-space relative">
        <div className="grid-overlay absolute inset-x-0 top-10 -z-10 h-[32rem] rounded-[2rem] opacity-40" />

        <header className="glass-panel sticky top-4 z-20 mb-8 flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft font-mono text-sm font-semibold text-accent">
              EC
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{profile.name}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted">
                {profile.role}
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#focus" className="transition hover:text-white">
              Focus
            </a>
            <a href="#approach" className="transition hover:text-white">
              Approach
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="eyebrow">Data Engineering Portfolio</span>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                  Building dependable data infrastructure that helps teams move
                  with confidence.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  {profile.intro}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={profile.resume}
                download
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#44e192]"
              >
                Download Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                View GitHub
              </a>
              <a
                href={profile.email}
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-strong transition hover:border-accent/50 hover:text-white"
              >
                Contact Emeka
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <article
                  key={stat.value}
                  className="glass-panel rounded-3xl p-5 transition hover:-translate-y-1"
                >
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,_rgba(38,208,124,0.18),_transparent)]" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-muted">
                      Profile
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {profile.name}
                    </p>
                  </div>
                  <span className="rounded-full border border-accent/25 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Open to work
                  </span>
                </div>

                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-background-alt">
                  <Image
                    src="/profile.jpeg"
                    alt="Portrait of Emeka Chidoka"
                    width={900}
                    height={1100}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      Core Role
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">
                      Data Engineer
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      Working Style
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">
                      Structured, product-aware, delivery-focused
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-muted">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="page-shell section-space section-divider">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="What He Brings"
            title="A calm, systems-first approach to messy data problems."
            description="Emeka brings the kind of data engineering mindset that helps companies stop patching around broken reporting and start building infrastructure that compounds. The focus is practical: clean inputs, useful models, dependable outputs, and a workflow teams can trust."
          />

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-5">
              {impactCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="page-shell section-space section-divider">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Focus Areas"
            title="Capabilities that make data more reliable, usable, and valuable."
            description="This portfolio is intentionally concise, but it still reflects the range needed from a strong modern data engineer: architecture, quality, modeling, automation, and business alignment."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="glass-panel group rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/20"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <FocusIcon type={area.icon} />
                </div>
                <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell section-space section-divider">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <span className="eyebrow">What Teams Need</span>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              More than pipelines. A data function people can actually rely on.
            </h2>
            <div className="mt-8 grid gap-4">
              {deliveryPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="mt-1 h-3 w-3 rounded-full bg-accent" />
                  <p className="text-sm leading-7 text-muted-strong">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <span className="eyebrow">Toolbox</span>
              <div className="mt-6 flex flex-wrap gap-3">
                {toolbox.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-muted-strong"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <span className="eyebrow">Resume Access</span>
              <p className="mt-5 text-lg leading-8 text-muted">
                A downloadable version of Emeka&apos;s resume is available directly
                on the site for recruiters, hiring managers, and teams reviewing
                his work.
              </p>
              <a
                href={profile.resume}
                download
                className="mt-6 inline-flex items-center rounded-full border border-accent/30 bg-accent-soft px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-slate-950"
              >
                Download PDF Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="page-shell section-space section-divider">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Working Approach"
            title="Thoughtful execution from problem framing to dependable delivery."
            description="A strong portfolio should show how someone works, not just what title they hold. This section frames Emeka as someone who can think clearly about systems, stakeholders, and scale."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {collaborationSteps.map((step) => (
              <article
                key={step.id}
                className="glass-panel rounded-[1.85rem] p-6 sm:p-7"
              >
                <p className="font-mono text-sm text-accent">{step.id}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="page-shell section-space section-divider pt-0">
        <div className="glass-panel relative overflow-hidden rounded-[2.25rem] px-6 py-10 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,_rgba(101,181,255,0.12),_transparent)]" />
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl space-y-5">
              <span className="eyebrow">Let&apos;s Connect</span>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Looking for a data engineer who can help turn complexity into
                clarity?
              </h2>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Emeka is positioned as a strong fit for teams that need better
                reporting foundations, cleaner pipelines, and a more dependable
                path from raw data to business insight.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={profile.email}
                className="inline-flex min-w-56 items-center justify-center rounded-full bg-[linear-gradient(135deg,_#ffffff,_#d9f0ff)] px-6 py-3 text-sm font-semibold text-[#07111b] shadow-[0_12px_32px_rgba(125,185,255,0.22)] transition hover:brightness-105"
              >
                Send an Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-56 items-center justify-center rounded-full border border-border bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                LinkedIn Profile
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-56 items-center justify-center rounded-full border border-border bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
