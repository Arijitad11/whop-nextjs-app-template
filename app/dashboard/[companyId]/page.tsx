
import { headers } from "next/headers";
import Link from "next/link";
import { whopsdk } from "@/lib/whop-sdk";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ companyId: string }>;
}) {
  const { companyId } = await params;

  // Keep Whop authentication and company access checks.
  const { userId } = await whopsdk.verifyUserToken(await headers());

  const [company, user, access] = await Promise.all([
    whopsdk.companies.retrieve(companyId),
    whopsdk.users.retrieve(userId),
    whopsdk.users.checkAccess(companyId, { id: userId }),
  ]);

  const displayName = user.name || `@${user.username}`;

  const cards = [
    {
      number: "01",
      title: "Content planning",
      description:
        "Organize upcoming content, campaign ideas, and publishing priorities.",
      status: "Workspace preview",
    },
    {
      number: "02",
      title: "Campaign operations",
      description:
        "Keep campaign tasks, deliverables, and next steps in one place.",
      status: "Workspace preview",
    },
    {
      number: "03",
      title: "Performance intelligence",
      description:
        "Prepare to review campaign results and turn them into clear actions.",
      status: "Workspace preview",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#292A28]">
      <header className="border-b border-[#E4DED4] bg-[#FCFAF6]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Campaign<span className="text-[#A37D63]">OS</span>
          </Link>

          <nav className="flex items-center gap-5 text-sm text-[#6F6A62]">
            <Link href="/discover" className="hover:text-[#292A28]">
              Discover
            </Link>
            <span className="hidden sm:inline">
              {"Your workspace"}
            </span>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <section className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A37D63]">
            Your campaign workspace
          </p>

          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Welcome back, {displayName}.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#716C64]">
            A clearer way to plan content, coordinate campaigns, and understand
            performance — all in one workspace.
          </p>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          {[
            ["01", "Plan", "Bring your content ideas together."],
            ["02", "Coordinate", "Keep campaign work organized."],
            ["03", "Learn", "Turn performance into next steps."],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-2xl border border-[#E4DED4] bg-[#FCFAF6] p-6"
            >
              <p className="text-sm text-[#A37D63]">{number}</p>
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#716C64]">
                {description}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-10 rounded-2xl border border-[#E4DED4] bg-[#FCFAF6] p-6 md:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A37D63]">
                Workspace overview
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Your marketing, in sync.
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#716C64]">
                Start with a workflow that fits your next campaign.
              </p>
            </div>

            <Link
              href="/discover"
              className="inline-flex items-center justify-center rounded-full bg-[#292A28] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#454640]"
            >
              Explore CampaignOS
            </Link>
          </div>
        </section>

        <section>
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A37D63]">
              Core capabilities
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Built around your workflow
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.number}
                className="rounded-2xl border border-[#E4DED4] bg-[#FCFAF6] p-6"
              >
                <p className="text-sm text-[#A37D63]">{card.number}</p>
                <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-[#716C64]">
                  {card.description}
                </p>
                <p className="mt-5 border-t border-[#EAE5DC] pt-4 text-xs text-[#8A8176]">
                  {card.status}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-[#E4DED4] pt-6 text-xs leading-5 text-[#8A8176]">
          CampaignOS workspace · Company ID: {companyId}
          <p className="mt-1">
            This is the initial workspace layout. Campaign creation, saved
            projects, and live analytics will be added in the next steps.
          </p>
        </footer>
      </div>
    </main>
  );
}
