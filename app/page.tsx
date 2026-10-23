export default function Page() {
  return (
    <main className="min-h-screen bg-gray-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Campaign<span className="text-blue-400">OS</span>
          </h1>
          <span className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300">
            AI Campaign Intelligence
          </span>
        </header>

        <section className="py-12">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Your campaigns, made smarter
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
            Turn content performance into your next big idea.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Plan content, organize campaign workflows, and turn marketing
            performance insights into actionable next steps — all in one place.
          </p>

          <a
            href="/discover"
            className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
          >
            Explore CampaignOS
          </a>
        </section>

        <section className="mt-12 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <h3 className="text-lg font-semibold">Content Planning</h3>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Organize ideas and structure your upcoming campaigns.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <h3 className="text-lg font-semibold">Campaign Operations</h3>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Keep campaign tasks and workflows organized.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <h3 className="text-lg font-semibold">Performance Insights</h3>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Turn campaign results into clear recommendations for your next move.
            </p>
          </div>
        </section>

        <footer className="mt-20 border-t border-gray-800 pt-6 text-sm text-gray-500">
          CampaignOS · AI-powered campaign intelligence for marketing teams
        </footer>
      </div>
    </main>
  );
}
