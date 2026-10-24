
const features = [
  {
    number: "01",
    title: "Content Planning",
    description:
      "Turn scattered ideas into a structured content calendar built around your campaign goals.",
    tag: "PLAN SMARTER",
    detail: "Ideas → Calendar → Content",
  },
  {
    number: "02",
    title: "Campaign Operations",
    description:
      "Keep tasks, timelines, creative assets, and campaign workflows organized in one place.",
    tag: "STAY IN CONTROL",
    detail: "Tasks → Workflow → Delivery",
  },
  {
    number: "03",
    title: "Performance Intelligence",
    description:
      "Understand campaign results and identify actionable next steps for your marketing team.",
    tag: "MAKE BETTER MOVES",
    detail: "Measure → Learn → Improve",
  },
];

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-[#292A28]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <header className="flex min-h-[78px] items-center justify-between gap-4 border-b border-[#DED7CC]">
          <a href="/" className="text-2xl font-semibold tracking-tight">
            Campaign<span className="text-[#A37D63]">OS</span>
          </a>

          <nav className="flex items-center gap-4 sm:gap-7">
            <a
              href="/#features"
              className="hidden text-sm text-[#716F68] transition hover:text-[#986E55] sm:inline"
            >
              Features
            </a>
            <a
              href="/#platform"
              className="hidden text-sm text-[#716F68] transition hover:text-[#986E55] sm:inline"
            >
              Platform
            </a>
            <a
              href="/"
              className="rounded-md border border-[#D5C8B8] px-4 py-2.5 text-sm font-medium transition hover:bg-[#EAE2D7]"
            >
              ← Home
            </a>
          </nav>
        </header>

        <section className="grid items-center gap-12 border-b border-[#DED7CC] py-16 sm:py-24 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:py-28">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[2.2px] text-[#98765E]">
              <span className="h-px w-8 bg-[#A37D63]" />
              The CampaignOS platform
            </p>

            <h1 className="mt-7 max-w-3xl text-5xl font-medium leading-[1.08] tracking-[-2.5px] sm:text-7xl lg:text-[78px] lg:tracking-[-4px]">
              Your marketing,
              <br />
              <span className="font-serif italic text-[#A37D63]">
                working in sync.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#73736C] sm:text-lg">
              Plan content, coordinate campaigns, and turn performance
              insights into meaningful next steps — all through one
              organized marketing workspace.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#capabilities"
                className="inline-flex items-center rounded-md bg-[#292A28] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#484843]"
              >
                Explore capabilities <span className="ml-3">↓</span>
              </a>
              <a
                href="/"
                className="inline-flex items-center rounded-md border border-[#D5C8B8] px-6 py-4 text-sm font-medium transition hover:bg-[#EAE2D7]"
              >
                Back to homepage
              </a>
            </div>

            <p className="mt-7 text-xs leading-6 text-[#858178]">
              CONTENT STRATEGY <span className="mx-2">/</span>
              CAMPAIGN WORKFLOWS <span className="mx-2">/</span>
              PERFORMANCE INSIGHTS
            </p>
          </div>

          <div className="rounded-xl border border-[#DED6CB] bg-[#FCFAF6] p-5 shadow-[0_24px_70px_rgba(58,48,37,0.08)] sm:p-7">
            <div className="flex items-start justify-between gap-3 border-b border-[#E8E1D7] pb-5">
              <div>
                <p className="text-xs uppercase tracking-[1.5px] text-[#9A7B62]">
                  Your workflow
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">
                  From idea to insight
                </h2>
              </div>
              <span className="rounded-md bg-[#EEE5DA] px-3 py-2 text-xs text-[#806650]">
                03 stages
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {[
                {
                  n: "01",
                  title: "Plan your content",
                  desc: "Structure ideas and campaign calendars.",
                  width: "w-[68%]",
                },
                {
                  n: "02",
                  title: "Coordinate execution",
                  desc: "Keep tasks and campaign activity organized.",
                  width: "w-[82%]",
                },
                {
                  n: "03",
                  title: "Review performance",
                  desc: "Identify results and potential next steps.",
                  width: "w-full",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="border border-[#E6DED3] bg-white/80 p-4 sm:p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#EEE4D8] text-xs font-semibold text-[#94745B]">
                      {item.n}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-[#807C73]">
                        {item.desc}
                      </p>
                      <div className="mt-4 h-1.5 rounded-full bg-[#EEEAE3]">
                        <div
                          className={`h-1.5 rounded-full bg-[#B69A80] ${item.width}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-[#EAE1D6] p-4">
              <p className="text-xs font-semibold text-[#655345]">
                One connected workflow
              </p>
              <p className="mt-1 text-xs leading-5 text-[#766B60]">
                A clearer way to organize marketing work and plan what comes next.
              </p>
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-16 sm:py-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#98765E]">
                Platform capabilities
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
                Three pillars. One workspace.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#77766E]">
              Bring planning, execution, and performance analysis into a
              consistent campaign workflow.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group flex flex-col border border-[#DED7CC] bg-[#FCFAF6] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#C5AD97] hover:shadow-[0_16px_40px_rgba(58,48,37,0.06)] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[1.5px] text-[#A37D63]">
                    {feature.number}
                  </span>
                  <span className="text-xl text-[#A37D63] transition group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="mt-9 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#77766E]">
                  {feature.description}
                </p>

                <div className="mt-7 border-t border-[#E5DED4] pt-5">
                  <p className="text-[10px] font-semibold tracking-[1.5px] text-[#98765E]">
                    {feature.tag}
                  </p>
                  <p className="mt-3 text-xs text-[#817B71]">
                    {feature.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 flex flex-col justify-between gap-6 bg-[#EAE1D6] p-7 sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#8F6B54]">
              Ready to explore?
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Make your next campaign more intentional.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#716A61]">
              Return to the homepage to explore the CampaignOS overview.
            </p>
          </div>
          <a
            href="/"
            className="inline-flex w-fit shrink-0 items-center rounded-md bg-[#292A28] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#484843]"
          >
            Return to homepage <span className="ml-3">→</span>
          </a>
        </section>

        <footer className="flex flex-col gap-3 border-t border-[#DED7CC] py-7 text-xs text-[#7D786F] sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="text-base font-semibold text-[#292A28]">
            Campaign<span className="text-[#A37D63]">OS</span>
          </a>
          <p>AI-powered campaign intelligence for modern marketing teams.</p>
          <a href="#capabilities" className="hover:text-[#986E55]">
            Explore capabilities ↑
          </a>
        </footer>
      </div>
    </main>
  );
}
