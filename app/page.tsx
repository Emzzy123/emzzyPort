import Image from "next/image";

const profile = {
  name: "Emeka Chidoka",
  role: "Data Engineer",
  intro:
    "I design data systems that stay clean, dependable, and useful long after launch. From ingestion and transformation to warehousing and delivery, I build the pipelines and analytics foundations teams can confidently scale on.",
  location: "Available for remote and collaborative product teams",
  email: "mailto:chidokaemeka@gmail.com",
  github: "https://github.com/Emzzy123",
  linkedin: "https://www.linkedin.com/in/emeka-chidoka-a4a633158/",
  resume: "/Emeka_Chidoka.pdf",
};

const certificate = {
  title: "Master Data Engineer",
  issuer: "10Alytics",
  issued: "Issued April 14, 2026",
  id: "MDE/C25-09/0005",
  href: "/Emeka%20Chukwudubem%20Chidoka.pdf",
  coverage:
    "Data Engineering Fundamentals, SQL, Python, Linux, ETL pipelines, APIs, Airflow, Azure/GCP cloud engineering, version control, and CI/CD with GitHub.",
};

const heroStats = [
  { value: "ETL / ELT", label: "Reliable ingestion and transformation" },
  { value: "SQL + Python", label: "Practical analytics engineering stack" },
  { value: "Quality", label: "Validation-first delivery habits" },
];

const focusAreas = [
  {
    title: "Pipeline Architecture",
    icon: "pipeline",
    description:
      "Batch and near-real-time workflows structured for maintainability, observability, and safe iteration.",
  },
  {
    title: "Analytics Engineering",
    icon: "analytics",
    description:
      "Clean models and reporting-ready datasets that help teams self-serve decisions with confidence.",
  },
  {
    title: "Data Quality",
    icon: "quality",
    description:
      "Checks, documentation, and monitoring practices that make trust in the data easier to measure.",
  },
  {
    title: "Platform Thinking",
    icon: "platform",
    description:
      "Data systems shaped around business context, team workflows, and long-term maintainability.",
  },
];

const impactCards = [
  {
    title: "Operational clarity",
    description:
      "I turn scattered data touchpoints into dependable systems that support planning, reporting, and day-to-day execution.",
  },
  {
    title: "Business-ready outputs",
    description:
      "I build datasets and transformations around how teams actually consume information, not just how it is stored.",
  },
  {
    title: "Long-term maintainability",
    description:
      "I prefer structured, documented pipelines that are easy to understand, debug, and extend as requirements evolve.",
  },
];

const deliveryPoints = [
  "Translate raw, inconsistent source data into usable warehouse-ready models.",
  "Design workflows that reduce reporting friction for product, operations, and leadership.",
  "Bring engineering discipline to analytics work through structure, testing, and documentation.",
  "Create data foundations that help teams move from reactive reporting to proactive decisions.",
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
    title: "Build trust into the workflow",
    text: "Reliable schemas, clean transformations, and clear ownership make downstream work faster and less fragile.",
  },
  {
    id: "03",
    title: "Make systems easier to extend",
    text: "Good data engineering does not just solve today's issue. It creates a base other teams can keep building on.",
  },
];

const pipelineNodes = [
  { label: "Sources", meta: "APIs / CSV / Apps" },
  { label: "Pipelines", meta: "ETL / ELT" },
  { label: "Warehouse", meta: "Modeled tables" },
  { label: "Insights", meta: "Dashboards / Ops" },
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
    <div className="max-w-2xl space-y-3">
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
          {title}
        </h2>
        <p className="text-sm leading-7 text-muted md:text-base">{description}</p>
      </div>
    </div>
  );
}

function FocusIcon({ type }: { type: string }) {
  const iconClass = "h-5 w-5 text-accent-secondary transition group-hover:text-accent";

  if (type === "pipeline") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path
          d="M5 7h6m3 0h5M9 7v10m0 0H6m3 0h4m4-5h2m-2 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-8-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "analytics") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path d="M5 19V9m7 10V5m7 14v-7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M4 19h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "quality") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path
          d="M12 4l6 2.5v5c0 4.1-2.5 6.9-6 8.5-3.5-1.6-6-4.4-6-8.5v-5L12 4Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="m9.5 12 1.7 1.7 3.3-3.7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path
        d="M7 7h10v10H7zM4 12h3m10 0h3M12 4v3m0 10v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PipelineMap() {
  return (
    <div className="grid gap-3 md:grid-cols-4">
      {pipelineNodes.map((node, index) => (
        <div
          key={node.label}
          className="relative rounded-md border border-border bg-white/[0.035] p-4"
        >
          {index < pipelineNodes.length - 1 ? (
            <span className="absolute right-[-1.15rem] top-1/2 hidden h-px w-5 bg-accent-secondary/50 md:block" />
          ) : null}
          <p className="font-mono text-xs text-accent-secondary">0{index + 1}</p>
          <p className="mt-2 text-base font-semibold text-white">{node.label}</p>
          <p className="mt-1 text-xs leading-5 text-muted">{node.meta}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <section className="page-shell min-h-screen pb-14 pt-5">
        <header className="data-nav sticky top-4 z-20 mb-8 flex items-center justify-between px-4 py-3 md:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Emeka Chidoka logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-md object-cover"
              priority
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white md:text-base">
                {profile.name}
              </p>
              <p className="text-xs uppercase text-muted">{profile.role}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
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

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(340px,0.78fr)]">
          <div className="space-y-6">
            <span className="eyebrow desktop-only-eyebrow">
              Data Engineering Portfolio
            </span>

            <div className="max-w-3xl space-y-5">
              <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl xl:text-5xl">
                Data pipelines, models, and analytics systems built for trust.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted md:text-lg">
                {profile.intro}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={profile.email}
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#44e192]"
              >
                Contact Emeka
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center justify-center rounded-md border border-border bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Download Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-muted-strong transition hover:text-white"
              >
                GitHub
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <article key={stat.value} className="data-card p-4">
                  <p className="font-mono text-sm font-semibold text-accent">{stat.value}</p>
                  <p className="mt-2 text-xs leading-5 text-muted">{stat.label}</p>
                </article>
              ))}
            </div>

            <div className="data-panel p-4 md:p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="font-mono text-xs text-muted">DATA FLOW</p>
                <span className="rounded-sm border border-accent/30 bg-accent-soft px-2 py-1 font-mono text-xs text-accent">
                  validated
                </span>
              </div>
              <PipelineMap />
            </div>
          </div>

          <aside className="data-panel overflow-hidden p-4 md:p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-muted">PROFILE</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">{profile.name}</h2>
              </div>
              <span className="rounded-sm border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                Open to work
              </span>
            </div>

            <div className="profile-frame">
              <Image
                src="/profile.jpeg"
                alt="Portrait of Emeka Chidoka"
                width={900}
                height={1100}
                priority
                className="h-full w-full object-contain object-center"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-border bg-white/[0.035] p-3">
                <p className="font-mono text-xs text-muted">ROLE</p>
                <p className="mt-1 text-sm font-semibold text-white">Data Engineer</p>
              </div>
              <div className="rounded-md border border-border bg-white/[0.035] p-3">
                <p className="font-mono text-xs text-muted">MODE</p>
                <p className="mt-1 text-sm font-semibold text-white">Remote-ready</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted">{profile.location}</p>
          </aside>
        </div>
      </section>

      <section id="about" className="page-shell section-space section-divider">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="What I Bring"
            title="A calm, systems-first approach to messy data problems."
            description="I help teams stop patching around broken reporting and start building infrastructure that compounds. The focus is practical: clean inputs, useful models, dependable outputs, and a workflow teams can trust."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {impactCards.map((card) => (
              <article key={card.title} className="data-card p-5">
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="focus" className="page-shell section-space section-divider">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Focus Areas"
            title="Capabilities that make data more reliable, usable, and valuable."
            description="The portfolio is concise, but it reflects the range needed from a modern data engineer: architecture, quality, modeling, automation, and business alignment."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area) => (
              <article key={area.title} className="data-card group p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-accent/20 bg-accent-soft">
                  <FocusIcon type={area.icon} />
                </div>
                <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell section-space section-divider">
        <div className="grid items-start gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="data-panel p-5 md:p-6">
            <span className="eyebrow">What Teams Need</span>
            <h2 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight text-white md:text-3xl">
              More than pipelines. A data function people can actually rely on.
            </h2>
            <div className="mt-6 grid gap-3">
              {deliveryPoints.map((point) => (
                <div key={point} className="flex gap-3 rounded-md border border-border bg-white/[0.035] p-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <p className="text-sm leading-7 text-muted-strong">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="data-panel p-5 md:p-6">
              <span className="eyebrow">Toolbox</span>
              <div className="mt-5 flex flex-wrap gap-2">
                {toolbox.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-border bg-white/[0.04] px-3 py-2 text-xs font-medium text-muted-strong"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="data-panel p-5 md:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="eyebrow">Credential</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{certificate.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-accent">{certificate.issuer}</p>
                </div>
                <div className="rounded-md border border-accent/20 bg-accent-soft px-3 py-2 text-left sm:text-right">
                  <p className="text-sm font-semibold text-accent">{certificate.issued}</p>
                  <p className="mt-1 font-mono text-xs text-muted-strong">{certificate.id}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{certificate.coverage}</p>
              <a
                href={certificate.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center rounded-md border border-accent/30 bg-accent-soft px-4 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-slate-950"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="page-shell section-space section-divider">
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Working Approach"
            title="Thoughtful execution from problem framing to dependable delivery."
            description="A strong portfolio should show how someone works, not just what title they hold. This section frames the habits behind dependable data work."
          />

          <div className="grid gap-4">
            {collaborationSteps.map((step) => (
              <article key={step.id} className="data-card p-5 md:p-6">
                <p className="font-mono text-sm text-accent">{step.id}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="page-shell section-space section-divider pt-0">
        <div className="data-panel p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl space-y-4">
              <span className="eyebrow">Let&apos;s Connect</span>
              <h2 className="text-2xl font-semibold leading-tight text-white md:text-4xl">
                Looking for a data engineer who can turn complexity into clarity?
              </h2>
              <p className="text-sm leading-7 text-muted md:text-base">
                I am a strong fit for teams that need better reporting foundations,
                cleaner pipelines, and a more dependable path from raw data to
                business insight.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={profile.email}
                className="inline-flex min-w-52 items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#44e192]"
              >
                Send an Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-52 items-center justify-center rounded-md border border-border bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                LinkedIn Profile
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-52 items-center justify-center rounded-md border border-border bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
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
