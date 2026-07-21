import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | CivilToolsHub",
  description:
    "Read the Terms and Conditions for using CivilToolsHub construction calculators, safety tools, and engineering resources.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-zinc-500">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-300">Terms & Conditions</span>
        </nav>

        <header className="mb-10 border-b border-zinc-800 pb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-400">
            Legal
          </p>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-zinc-400">
            Last updated: July 21, 2026
          </p>
        </header>

        <div className="space-y-8">
          <Section title="1. Acceptance of Terms">
            By accessing or using CivilToolsHub, you agree to these Terms &
            Conditions. If you do not agree, please discontinue use of the
            website.
          </Section>

          <Section title="2. Purpose of CivilToolsHub">
            CivilToolsHub provides construction calculators, engineering
            resources, safety information, observation tools, and educational
            content for general information and reference purposes.
          </Section>

          <Section title="3. Calculators and Technical Information">
            Calculator results, formulas, quantities, and technical information
            are estimates and should be independently verified before use in
            construction, engineering, procurement, costing, or other
            project-related decisions.
          </Section>

          <Section title="4. Safety Information">
            Safety observations, hazards, control measures, standards, and
            other safety content are provided for reference purposes. Users
            must follow applicable laws, project requirements, approved
            procedures, manufacturer instructions, and competent professional
            guidance.
          </Section>

          <Section title="5. No Professional Advice">
            CivilToolsHub content does not replace advice, inspection,
            assessment, design, or approval from a qualified engineer, safety
            professional, competent person, or relevant authority.
          </Section>

          <Section title="6. User Responsibility">
            Users are responsible for verifying information and determining
            whether any calculator, tool, recommendation, or technical content
            is suitable for their specific project and circumstances.
          </Section>

          <Section title="7. Intellectual Property">
            Unless otherwise stated, CivilToolsHub website content, design,
            tools, branding, and original materials may not be copied,
            republished, or commercially redistributed without permission,
            except where permitted by applicable law.
          </Section>

          <Section title="8. Third-Party Links and Standards">
            CivilToolsHub may reference third-party websites, regulations, or
            standards. We do not control external websites and cannot guarantee
            their availability, accuracy, or content.
          </Section>

          <Section title="9. Limitation of Liability">
            To the extent permitted by applicable law, CivilToolsHub is not
            responsible for losses, injuries, damages, project delays, or other
            consequences resulting from reliance on website information,
            calculators, tools, or third-party resources.
          </Section>

          <Section title="10. Changes to These Terms">
            These Terms & Conditions may be updated when our services,
            features, or legal requirements change. Updated terms will be
            published on this page.
          </Section>

          <Section title="11. Contact">
            Questions regarding these Terms & Conditions can be submitted
            through our{" "}
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