
export default function Page() {
  return (
    <main className="min-h-screen bg-[#F7F1E8] px-6 py-8 text-[#292824] sm:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D9CEC0] pb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Campaign<span className="text-[#B78370]">OS</span>
          </h1>

          <nav className="flex items-center gap-6 text-sm text-[#68645E]">
            <a href="#features" className="hover:text-[#A66F5D]">
              Features
            </a>
            <a href="/discover" className="hover:text-[#A66F5D]">
              Explore
            </a>
            <span className="rounded-full border border-[#C9B8A5] px-4 py-2 text-[#5D554D]">
              AI Campaign Intelligence
            </span>
          </nav>
        </header>

        <section className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-[#DDC9B6] bg-[#EFE2D3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#926B56]">
              AI-powered marketing OS
            </p>

            <h2 className="max-w-2xl text-5xl font-medium leading-[1.08] tracking-tight sm:text-7xl">
              Your campaigns,
              <span className="mt-1 block font-serif italic text-[#B78370]">
                made smarter.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#706C66]">
              Plan content, organize campaign workflows, and turn marketing
              performance insights into actionable next steps — all in one place.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/discover"
                className="inline-flex items-center rounded-full bg-[#A97865] px-7 py-3.5 font-medium text-white transition hover:bg-[#8F6252]"
              >
                Explore CampaignOS <span className="ml-3">→</span>
              </a>

              <a
                href="#features"
                className="inline-flex items-center rounded-full border border-[#CBB9A8] px-7 py-3.5 font-medium text-[#4D4943] transition hover:bg-[#EEE4D9]"
              >
                Discover features
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6C675F]">
              <span>✓ Content planning</span>
              <span>✓ Campaign workflows</span>
              <span>✓ AI-powered insights</span>
            </div>
          </div>

          <div className="rounded-3xl border border-[#DDD2C5] bg-[#FBF8F3] p-5 shadow-[0_20px_60px_rgba(78,63,48,0.08)] sm:p-7">
            <div className="flex items-center justify-between border-b border-[#E8DED3] pb-5">
              <div>
                <p className="font-serif text-xl">CampaignOS</p>
                <p className="mt-1 text-xs text-[#8B857D]">
                  Campaign overview
                </p>
              </div>
              <span className="rounded-full bg-[#E9E0D5] px-3 py-1.5 text-xs text-[#655D54]">
                Last 30 days
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 py-5 sm:grid-cols-3">
              {[
                ["Total reach", "125.4K", "+12%"],
                ["Engagement", "4.8%", "+0.6%"],
                ["Active campaigns", "03", "In progress"],
              ].map(([label, value, change]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#E7DDD1] bg-white/70 p-4"
                >
                  <p className="text-xs text-[#817A72]">{label}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight">
                    {value}
                  </p>
                  <p className="mt-2 text-xs text-[#9B7965]">{change}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[#E7DDD1] bg-white/70 p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-medium">Performance insights</h3>
                <span className="text-xs text-[#938A80]">Overview</span>
              </div>

              <div className="mt-6 flex h-28 items-end gap-2">
                {[30, 45, 38, 62, 53, 72, 64, 88, 76, 100, 83, 110].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-[#D9C1AE]"
                      style={{ height: `${height}px`, maxHeight: "100%" }}
                    />
                  )
                )}
              </div>

              <div className="mt-3 flex justify-between text-xs text-[#938A80]">
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#EFE7DD] p-4">
              <div>
                <p className="text-sm font-medium">Your next big idea</p>
                <p className="mt-1 text-xs text-[#766D63]">
                  Turn campaign data into clearer next steps.
                </p>
              </div>
              <span className="text-xl text-[#A97865]">↗</span>
            </div>

            <p className="mt-4 text-center text-xs text-[#928980]">
              Illustrative dashboard preview
            </p>
          </div>
        </section>

        <section
          id="features"
          className="grid gap-4 border-t border-[#D9CEC0] py-10 sm:grid-cols-3"
        >
          {[
            {
              number: "01",
              title: "Content Planning",
              description:
                "Organize ideas and structure your upcoming campaigns with ease.",
            },
            {
              number: "02",
              title: "Campaign Operations",
              description:
                "Keep campaign tasks and workflows organized in one place.",
            },
            {
              number: "03",
              title: "Performance Insights",
              description:
                "Turn campaign results into clear recommendations for your next move.",
            },
          ].map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-[#E0D5C9] bg-[#FBF8F3] p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7D6955]/5"
            >
              <p className="text-sm tracking-widest text-[#B78370]">
                {feature.number}
              </p>
              <h3 className="mt-5 font-serif text-2xl">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#746F68]">
                {feature.description}
              </p>
              <a
                href="/discover"
                className="mt-5 inline-flex text-sm font-medium text-[#946B58] hover:text-[#694B3E]"
              >
                Explore feature <span className="ml-2">→</span>
              </a>
            </article>
          ))}
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[#D9CEC0] py-6 text-sm text-[#7B756D]">
          <p>
            <span className="font-medium text-[#38342F]">CampaignOS</span>
            {" "}· AI-powered campaign intelligence
          </p>
          <p>Plan smarter. Learn faster. Grow with clarity.</p>
        </footer>
      </div>
    </main>
  );
}

