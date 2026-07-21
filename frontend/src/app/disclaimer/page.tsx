import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | CivilToolsHub",
  description:
    "Read the CivilToolsHub disclaimer regarding construction calculators, engineering information, safety resources, and technical content.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-zinc-500">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-300">Disclaimer</span>
        </nav>

        <header className="mb-10 border-b border-zinc-800 pb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-400">
            Legal
          </p>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            Disclaimer
          </h1>

          <p className="mt-4 text-zinc-400">
            Last updated: July 21, 2026
          </p>
        </header>

        <div className="space-y-8">
          <Section title="1. General Information">
            CivilToolsHub provides construction engineering, safety, and
            technical information for educational and general reference
            purposes only.
          </Section>

          <Section title="2. Construction Calculators">
            Results produced by our calculators are estimates based on the
            information entered by the user. All quantities, formulas,
            measurements, and results should be independently verified before
            use in an actual project.
          </Section>

          <Section title="3. Safety Information">
            Safety observations, hazards, corrective actions, preventive
            measures, and other safety information provided on CivilToolsHub
            are general guidance and should not replace a project-specific risk
            assessment or competent professional judgment.
          </Section>

          <Section title="4. Standards and Regulations">
            References to OSHA, ISO, codes, standards, or other regulations are
            provided for informational purposes. Requirements may vary by
            country, jurisdiction, client, and project. Always follow the
            applicable local laws and current project requirements.
          </Section>

          <Section title="5. Professional Verification">
            Engineering decisions, structural calculations, safety-critical
            decisions, and project-specific requirements should be reviewed and
            approved by appropriately qualified professionals before
            implementation.
          </Section>

          <Section title="6. Accuracy of Information">
            We aim to provide useful and accurate information, but CivilToolsHub
            does not guarantee that every page, calculation, reference, or
            technical resource will always be complete, error-free, or current.
          </Section>

          <Section title="7. Limitation of Liability">
            To the extent permitted by applicable law, CivilToolsHub is not
            responsible for any injury, loss, damage, project delay, financial
            loss, or other consequence resulting from the use of or reliance on
            information or tools provided on this website.
          </Section>

          <Section title="8. External Links">
            CivilToolsHub may link to external websites or resources. We are
            not responsible for the content, availability, accuracy, or
            practices of third-party websites.
          </Section>

          <Section title="9. Contact Us">
            If you find incorrect or outdated technical information, please
            report it through our{" "}
            <Link
              href="/contact"
              className="font-bold text-yellow-400 hover:text-yellow-300"
            >
              Contact page
            </Link>
            .
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-black text-white">{title}</h2>

      <div className="mt-4 leading-8 text-zinc-300">
        {children}
      </div>
    </section>
  );
}