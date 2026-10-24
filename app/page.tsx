
const campaigns = [
  {
    name: "Autumn Brand Launch",
    channel: "Instagram",
    status: "In progress",
    reach: "42.8K",
    color: "#A47C63",
  },
  {
    name: "Product Awareness",
    channel: "LinkedIn",
    status: "Review",
    reach: "28.3K",
    color: "#858D94",
  },
  {
    name: "Creator Campaign",
    channel: "TikTok",
    status: "Scheduled",
    reach: "19.6K",
    color: "#B49A7E",
  },
];

const bars = [38, 48, 43, 61, 53, 72, 65, 83, 70, 94, 81, 100];

const features = [
  {
    number: "01",
    title: "Content planning",
    description:
      "Turn scattered ideas into a structured content calendar and a clear campaign plan.",
  },
  {
    number: "02",
    title: "Campaign operations",
    description:
      "Bring tasks, timelines, and campaign workflows together in one organized workspace.",
  },
  {
    number: "03",
    title: "Performance intelligence",
    description:
      "Make sense of marketing results and identify opportunities for your next campaign.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-[#292A28]">
      <header className="sticky top-0 z-20 border-b border-[#E3DDD3] bg-[#F5F2EC]/95 backdrop-blur">
        <div className="mx-auto flex min-h-[76px] max-w-[1400px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
          <a href="/" className="text-[23px] font-semibold tracking-[-1.2px]">
            Campaign<span className="text-[#A37D63]">OS</span>
          </a>

          <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#686963] md:flex">
            <a href="#platform" className="transition hover:text-[#A37D63]">
              Platform
            </a>
            <a href="#features" className="transition hover:text-[#A37D63]">
              Features
            </a>
            <a href="#workflow" className="transition hover:text-[#A37D63]">
              How it works
            </a>
          </nav>

          <a
            href="/discover"
            className="rounded-md bg-[#292A28] px-5 py-3 text-[13px] font-medium text-white transition hover:bg-[#484843]"
          >
            Explore platform <span className="ml-2">↗</span>
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="max-w-[570px]">
          <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[2.3px] text-[#94745D]">
            <span className="h-px w-8 bg-[#A37D63]" />
            Campaign intelligence, reimagined
          </div>

          <h1 className="text-[46px] font-medium leading-[1.08] tracking-[-2.5px] sm:text-6xl lg:text-[72px] lg:tracking-[-4px]">
            Better campaigns
            <br />
            start with
            <br />
            <span className="font-serif italic text-[#A37D63]">
              better clarity.
            </span>
          </h1>

          <p className="mt-7 max-w-[465px] text-[15px] leading-8 text-[#74746D] sm:text-base">
            Your workspace for content planning, campaign operations, and
            performance intelligence. Bring your marketing workflow together
            and make your next move with confidence.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/discover"
              className="inline-flex items-center rounded-md bg-[#A37D63] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#88654F]"
            >
              Explore CampaignOS <span className="ml-4">↗</span>
            </a>
            <a
              href="#features"
              className="px-3 py-3 text-sm font-medium text-[#4D4D47] transition hover:text-[#A37D63]"
            >
              Discover the platform <span className="ml-1">→</span>
            </a>
          </div>

          <div className="mt-12 grid max-w-[440px] grid-cols-3 border-t border-[#DDD6CB] pt-5">
            <div className="pr-3">
              <p className="text-sm font-semibold">Plan</p>
              <p className="mt-1 text-xs leading-5 text-[#838179]">
                Organize content
              </p>
            </div>
            <div className="border-l border-[#DDD6CB] px-4">
              <p className="text-sm font-semibold">Manage</p>
              <p className="mt-1 text-xs leading-5 text-[#838179]">
                Coordinate work
              </p>
            </div>
            <div className="border-l border-[#DDD6CB] pl-4">
              <p className="text-sm font-semibold">Optimize</p>
              <p className="mt-1 text-xs leading-5 text-[#838179]">
                Learn from results
              </p>
            </div>
          </div>
        </div>

        <div id="platform" className="relative min-w-0">
          <div className="absolute -inset-5 bg-[#E7DED1] opacity-60 blur-3xl" />

          <div className="relative overflow-hidden rounded-xl border border-[#DDD7CD] bg-[#FCFBF8] shadow-[0_28px_90px_rgba(57,49,39,0.12)]">
            <div className="flex min-h-[58px] items-center justify-between border-b border-[#E9E4DC] px-4 sm:px-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#A37D63] text-xs font-semibold text-white">
                  C
                </span>
                <span className="text-sm font-semibold">Workspace</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#85847D]">
                <span className="hidden sm:inline">Campaign overview</span>
                <span className="rounded border border-[#E3DDD3] px-2 py-1">
                  Demo
                </span>
              </div>
            </div>

            <div className="grid min-w-0 sm:grid-cols-[128px_1fr]">
              <aside className="hidden border-r border-[#E9E4DC] bg-[#F8F6F1] p-4 sm:block">
                <p className="mb-4 text-[9px] font-semibold uppercase tracking-[1.5px] text-[#A19A8F]">
                  Workspace
                </p>
                <div className="space-y-1.5 text-[11px]">
                  <div className="rounded-md bg-[#EAE1D6] px-2.5 py-2 font-medium text-[#6E5341]">
                    Overview
                  </div>
                  <div className="px-2.5 py-2 text-[#7B7A73]">Campaigns</div>
                  <div className="px-2.5 py-2 text-[#7B7A73]">Content plan</div>
                  <div className="px-2.5 py-2 text-[#7B7A73]">Analytics</div>
                </div>

                <div className="mt-8 border-t border-[#E5DED4] pt-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[1.5px] text-[#A19A8F]">
                    Manage
                  </p>
                  <p className="mt-3 px-2.5 text-[11px] text-[#7B7A73]">
                    Tasks & workflow
                  </p>
                  <p className="mt-4 px-2.5 text-[11px] text-[#7B7A73]">
                    Settings
                  </p>
                </div>
              </aside>

              <div className="min-w-0 p-4 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold tracking-[-0.5px]">
                      Good work starts here.
                    </p>
                    <p className="mt-1 text-[11px] text-[#85847D]">
                      A snapshot of your marketing activity
                    </p>
                  </div>
                  <span className="rounded-md border border-[#E4DED4] px-2.5 py-2 text-[10px] text-[#77766E]">
                    Last 30 days⌄
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[
                    ["Reach", "125.4K", "+12%"],
                    ["Engagement", "4.8%", "+0.6%"],
                    ["Campaigns", "03", "Active"],
                  ].map(([label, value, change]) => (
                    <div
                      key={label}
                      className="min-w-0 border border-[#EAE5DD] bg-white p-2.5 sm:p-3.5"
                    >
                      <p className="truncate text-[10px] text-[#85847D]">
                        {label}
                      </p>
                      <p className="mt-2 text-lg font-semibold tracking-tight sm:text-2xl">
                        {value}
                      </p>
                      <p className="mt-1 text-[9px] text-[#8C785F] sm:text-[10px]">
                        {change}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 border border-[#EAE5DD] bg-white p-3.5 sm:p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold">
                        Performance overview
                      </p>
                      <p className="mt-1 text-[10px] text-[#929087]">
                        Illustrative reach trend
                      </p>
                    </div>
                    <span className="text-[10px] text-[#929087]">
                      Aug — Nov
                    </span>
                  </div>

                  <div className="mt-5 flex h-28 items-end gap-1.5 border-b border-[#EAE5DD]">
                    {bars.map((height, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-t-sm ${
                          index === 9 ? "bg-[#A37D63]" : "bg-[#DCCBBC]"
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  <div className="mt-2 flex justify-between text-[9px] text-[#969187]">
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                  </div>
                </div>

                <div className="mt-4 border border-[#EAE5DD] bg-white">
                  <div className="flex items-center justify-between border-b border-[#EAE5DD] px-3.5 py-3">
                    <p className="text-xs font-semibold">Campaign activity</p>
                    <span className="text-[10px] text-[#8C785F]">
                      View all →
                    </span>
                  </div>

                  <div className="px-3.5">
                    {campaigns.map((campaign) => (
                      <div
                        key={campaign.name}
                        className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-b border-[#F0ECE6] py-3 last:border-0 sm:grid-cols-[minmax(0,1fr)_auto_auto]"
                      >
                        <div className="flex min-w-0 items-center gap-2.5">
                          <span
                            className="h-7 w-1 shrink-0 rounded-full"
                            style={{ backgroundColor: campaign.color }}
                          />
                          <div className="min-w-0">
                            <p className="truncate text-[10px] font-medium sm:text-[11px]">
                              {campaign.name}
                            </p>
                            <p className="mt-1 text-[9px] text-[#969187]">
                              {campaign.channel}
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] text-[#66665F]">
                          {campaign.reach}
                        </span>
                        <span className="hidden rounded-sm bg-[#F1E9DE] px-2 py-1 text-[9px] text-[#80664F] sm:inline">
                          {campaign.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-center text-[9px] text-[#A09A90]">
                  Illustrative dashboard · Sample data, not live analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E1D9CE] bg-[#FBF9F5]">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-5 px-5 py-6 sm:px-8 lg:px-12">
          <p className="max-w-xs text-xs leading-5 text-[#7D7A72]">
            Built to bring clarity to every stage of your campaign workflow.
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-[#68675F]">
            <span>Content strategy</span>
            <span>Campaign management</span>
            <span>Performance insights</span>
            <span>AI-assisted decisions</span>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#98765E]">
              The platform
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-medium leading-tight tracking-[-1.5px] sm:text-5xl">
              Everything connected.
              <br />
              <span className="font-serif italic text-[#A37D63]">
                Decisions made clearer.
              </span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-[#77766E] lg:justify-self-end">
            From the first content idea to the final performance review,
            CampaignOS brings your workflow into a more organized, thoughtful
            process.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group border border-[#E0D9CF] bg-[#FBF9F5] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#C7B09A] hover:shadow-[0_18px_45px_rgba(54,45,35,0.06)] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[1.5px] text-[#A37D63]">
                  {feature.number}
                </span>
                <span className="text-xl text-[#A37D63] transition group-hover:translate-x-1">
                  ↗
                </span>
              </div>
              <h3 className="mt-10 text-xl font-semibold tracking-[-0.4px]">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#77766E]">
                {feature.description}
              </p>
              <a
                href="/discover"
                className="mt-7 inline-flex text-xs font-semibold text-[#8D6B54] hover:text-[#604936]"
              >
                Explore capability <span className="ml-2">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-7 bg-[#E9E0D4] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#8D6B54]">
              A more intentional workflow
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-1px] sm:text-4xl">
              Make space for better marketing decisions.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#716A61]">
              Organize your campaigns, understand what is working, and turn
              insights into practical next steps.
            </p>
          </div>
          <a
            href="/discover"
            className="inline-flex w-fit shrink-0 items-center bg-[#292A28] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#484843]"
          >
            Explore CampaignOS <span className="ml-4">↗</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-[#E0D9CF]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-7 text-xs text-[#77766E] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <a href="/" className="text-base font-semibold tracking-tight text-[#292A28]">
            Campaign<span className="text-[#A37D63]">OS</span>
          </a>
          <p>AI-powered campaign intelligence for modern marketing teams.</p>
          <a href="/discover" className="hover:text-[#8D6B54]">
            Explore platform →
          </a>
        </div>
      </footer>
    </main>
  );
}
