
export default function DiscoverPage() {
  const features = [
    {
      number: "01",
      title: "Content Planning",
      description:
        "Turn scattered ideas into a structured content calendar built around your campaign goals.",
      tag: "PLAN SMARTER",
    },
    {
      number: "02",
      title: "Campaign Operations",
      description:
        "Keep tasks, timelines, creative assets, and campaign workflows organized in one place.",
      tag: "STAY IN CONTROL",
    },
    {
      number: "03",
      title: "Performance Intelligence",
      description:
        "Understand campaign results and identify actionable next steps for your marketing team.",
      tag: "MAKE BETTER MOVES",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
        <nav className="flex items-center justify-between border-b border-white/10 pb-7">
          <a href="/" className="text-xl font-semibold tracking-tight">
            Campaign<span className="text-violet-400">OS</span>
          </a>
          <span className="rounded-full border border-white/15 px-4 py-2 text-xs tracking-wide text-zinc-300">
            AI CAMPAIGN INTELLIGENCE
          </span>
        </nav>

        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="pointer-events-none absolute left-1/3 top-12 h-64 w-64 rounded-full bg-violet-600/15 blur-[110px]" />

          <div className="relative max-w-4xl">
            <p className="mb-7 text-xs font-medium uppercase tracking-[0.3em] text-violet-300">
              Your marketing, in sync
            </p>

            
           <h1 className="max-w-5xl text-6xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-8xl">
             Great campaigns.
             <br />
             <span className="text-zinc-500">Clearer decisions.</span>
           </h1>


            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              A smarter workspace for marketing teams to plan content,
              coordinate campaigns, and turn performance insights into
              meaningful action.
            </p>

            <a
              href="/"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-violet-100"
            >
              Explore CampaignOS <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="pb-20">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Built for better execution
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                One workspace. Three capabilities.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              From the first idea to the final insight, keep your team moving
              in the same direction.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-500">
                    {feature.number}
                  </span>
                  <span className="text-lg text-violet-300 transition group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="mt-12 text-xl font-medium tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-4 min-h-20 text-sm leading-7 text-zinc-400">
                  {feature.description}
                </p>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-violet-300">
                    {feature.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 py-7 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            CampaignOS <span className="text-zinc-700">/</span> Campaign
            intelligence for modern marketing teams
          </p>
          <p>Plan with purpose. Execute with clarity.</p>
        </footer>
      </div>
    </main>
  );
}
