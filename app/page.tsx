
const features = [
  {
    number: "01",
    title: "Content Planning",
    description:
      "Build a clear content strategy, organize ideas, and plan campaigns from one workspace.",
    tag: "PLAN",
  },
  {
    number: "02",
    title: "Campaign Operations",
    description:
      "Keep campaign tasks, timelines, and workflows structured as your team grows.",
    tag: "ORGANIZE",
  },
  {
    number: "03",
    title: "Performance Intelligence",
    description:
      "Understand campaign results and turn performance signals into actionable next steps.",
    tag: "OPTIMIZE",
  },
];

const metrics = [
  { label: "Total reach", value: "125.4K", change: "+12.0%" },
  { label: "Engagement rate", value: "4.8%", change: "+0.6%" },
  { label: "Active campaigns", value: "03", change: "In progress" },
];

const bars = [34, 48, 42, 63, 56, 74, 65, 88, 76, 98, 85, 110];

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F1E9] text-[#292823]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="flex min-h-[82px] items-center justify-between gap-5 border-b border-[#DDD3C6]">
          <a
            href="/"
            className="text-2xl font-semibold tracking-[-0.06em]"
            aria-label="CampaignOS home"
          >
            Campaign<span className="text-[#AD806B]">OS</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#69665F] md:flex">
            <a href="#features" className="transition hover:text-[#986A56]">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-[#986A56]">
              How it works
            </a>
            <a href="/discover" className="transition hover:text-[#986A56]">
              Explore
            </a>
          </nav>

          <a
            href="/discover"
            className="rounded-full bg-[#9E715C] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#825944]"
          >
            Get started <span className="ml-2">↗</span>
          </a>
        </header>

        <section className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCC9B4] bg-[#EEE3D5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8B654F]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A77A63]" />
              AI-powered campaign intelligence
            </div>

            <h1 className="text-5xl font-medium leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Make every
              <br />
              campaign
              <br />
              <span className="font-serif italic text-[#A77A63]">
                count.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#706D66] sm:text-lg">
              One workspace to plan content, organize campaigns, and turn
              marketing performance into smarter decisions.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/discover"
                className="inline-flex items-center rounded-full bg-[#292823] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#49463F]"
              >
                Explore CampaignOS <span className="ml-3">→</span>
              </a>

              <a
                href="#features"
                className="inline-flex items-center rounded-full border border-[#CFC2B3] px-6 py-3.5 text-sm font-medium text-[#45423D] transition hover:bg-[#EDE4D9]"
              >
                Discover features
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6F6B63]">
              <span><span className="mr-2 text-[#A77A63]">✓</span>Plan content</span>
              <span><span className="mr-2 text-[#A77A63]">✓</span>Track performance</span>
              <span><span className="mr-2 text-[#A77A63]">✓</span>Find next steps</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[36px] bg-[#E8DCCE] opacity-60 blur-2xl" />

            <div className="relative rounded-[26px] border border-[#DCD1C4] bg-[#FCFAF6] p-4 shadow-[0_28px_80px_rgba(70,54,38,0.10)] sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-[#E8E0D6] pb-5">
                <div>
                  <p className="text-lg font-semibold tracking-tight">
                    Campaign overview
                  </p>
                  <p className="mt-1 text-xs text-[#8B857C]">
                    Your marketing at a glance
                  </p>
                </div>
                <span className="rounded-full border border-[#E4D9CC] bg-[#F3ECE2] px-3 py-2 text-xs text-[#6D6256]">
                  Last 30 days
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 py-5 sm:gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="min-w-0 rounded-2xl border border-[#E9E0D6] bg-white/80 p-3 sm:p-4"
                  >
                    <p className="min-h-8 text-[11px] leading-4 text-[#827B72] sm:text-xs">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-[10px] text-[#98745F] sm:text-xs">
                      {metric.change}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[#E9E0D6] bg-white/80 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-semibold">
                      Performance overview
                    </h2>
                    <p className="mt-1 text-xs text-[#8B857C]">
                      Reach over time
                    </p>
                  </div>
                  <span className="text-xs text-[#8B857C]">Aug — Nov</span>
                </div>

                <div className="mt-5 flex h-32 items-end gap-1.5 border-b border-[#E9E0D6] pb-0 sm:gap-2">
                  {bars.map((height, index) => (
                    <div
                      key={index}
                      className={`flex-1 rounded-t-sm transition-colors ${
                        index === 9
                          ? "bg-[#A77A63]"
                          : "bg-[#DCC8B5] hover:bg-[#BD9B81]"
                      }`}
                      style={{ height: `${height}px`, maxHeight: "100%" }}
                    />
                  ))}
                </div>

                <div className="mt-3 flex justify-between text-[11px] text-[#91897F]">
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                </div>
              </div>

              <div className="mt-3 flex items-start gap-3 rounded-2xl bg-[#EEE5D9] p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E1D0BE] text-[#88634F]">
                  ↗
                </div>
                <div>
                  <p className="text-sm font-semibold">Your next move</p>
                  <p className="mt-1 text-xs leading-5 text-[#756A5F]">
                    Bring your content planning and performance insights
                    together in one place.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-center text-[10px] text-[#9B9389]">
                Illustrative dashboard preview · Sample metrics
              </p>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-t border-[#DDD3C6] py-14 sm:py-16"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A745F]">
                One connected workspace
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
                From planning to performance.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#777168]">
              Bring your campaign workflow together with a clearer view of
              what to do next.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group rounded-2xl border border-[#DED4C8] bg-[#FCFAF6] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#C9B09A] hover:shadow-[0_16px_40px_rgba(70,54,38,0.06)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5D7C8] bg-[#F0E5D8] text-sm text-[#926B54]">
                    {feature.number}
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[#9A8B7B]">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#777168]">
                  {feature.description}
                </p>

                <a
                  href="/discover"
                  className="mt-6 inline-flex items-center text-sm font-medium text-[#8F654F] transition group-hover:text-[#654532]"
                >
                  Explore <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="mb-12 grid gap-6 rounded-3xl bg-[#EAE0D4] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F6A55]">
              A clearer way to work
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              Less scattered work. More intentional campaigns.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#71685E]">
              Organize your ideas, understand your results, and make your
              next campaign decision with greater clarity.
            </p>
          </div>
          <a
            href="/discover"
            className="inline-flex w-fit items-center rounded-full bg-[#292823] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#49463F]"
          >
            Explore the workspace <span className="ml-3">→</span>
          </a>
        </section>

        <footer className="flex flex-col justify-between gap-3 border-t border-[#DDD3C6] py-7 text-sm text-[#79736A] sm:flex-row sm:items-center">
          <a href="/" className="font-semibold tracking-tight text-[#39362F]">
            Campaign<span className="text-[#AD806B]">OS</span>
          </a>
          <p>AI-powered campaign intelligence for modern marketing teams.</p>
        </footer>
      </div>
    </main>
  );
}
