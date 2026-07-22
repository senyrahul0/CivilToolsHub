import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | CivilToolsHub",
  description:
    "Contact CivilToolsHub for questions, feedback, technical corrections, suggestions, or issues related to our construction calculators, safety tools, and engineering resources.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-zinc-500"
        >
          <Link
            href="/"
            className="transition hover:text-yellow-400"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <span className="text-zinc-300">Contact Us</span>
        </nav>

        {/* Header */}
        <section className="mb-10 border-b border-zinc-800 pb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-400">
            Support
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Contact CivilToolsHub
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            Have a question, suggestion, technical correction, or feedback?
            We&apos;d like to hear from you. Contact CivilToolsHub regarding
            our construction calculators, safety resources, engineering tools,
            or website services.
          </p>
        </section>

        {/* Contact Categories */}
        <section className="grid gap-6 md:grid-cols-2">
          <ContactCard
            title="General Questions"
            description="Have a general question about CivilToolsHub, our construction resources, or how our tools work? Get in touch with us."
          />

          <ContactCard
            title="Report Technical Information"
            description="If you notice incorrect, outdated, or unclear engineering or construction safety information, please let us know so we can review it."
          />

          <ContactCard
            title="Calculator or Tool Issue"
            description="Report an issue with a construction calculator, safety observation generator, result, formula, or other CivilToolsHub tool."
          />

          <ContactCard
            title="Suggestions & Feedback"
            description="Suggest a new calculator, safety topic, construction tool, feature, or improvement you would like to see on CivilToolsHub."
          />
        </section>

        {/* Contact Information */}
        <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-white">
            How to Contact Us
          </h2>

          <p className="mt-5 leading-8 text-zinc-300">
            You can contact CivilToolsHub regarding website feedback,
            technical corrections, construction tools, safety information,
            or other relevant matters.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            {/* Mobile */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <p className="text-sm font-bold uppercase tracking-wider text-zinc-500">
                Mobile
              </p>

              <a
                href="tel:+916395691337"
                className="mt-2 inline-block text-lg font-bold text-white transition hover:text-yellow-400"
              >
                +91 63956 91337
              </a>

              <p className="mt-2 text-sm text-zinc-500">
                Tap the number to call CivilToolsHub directly.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <p className="text-sm font-bold uppercase tracking-wider text-zinc-500">
                WhatsApp
              </p>

              <a
                href="https://wa.me/916395691337?text=Hello%20CivilToolsHub%2C%20I%20would%20like%20to%20contact%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-500"
              >
                Chat on WhatsApp
              </a>

              <p className="mt-3 text-sm text-zinc-500">
                Contact us on WhatsApp for quick inquiries.
              </p>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <p className="text-sm font-bold uppercase tracking-wider text-zinc-500">
                Email
              </p>

              <a
                href="mailto:bhoopendra.singh01@godrejproperties.com"
                className="mt-2 inline-block break-all text-base font-bold text-white transition hover:text-yellow-400"
              >
                bhoopendra.singh01@godrejproperties.com
              </a>

              <p className="mt-2 text-sm text-zinc-500">
                Send us an email for detailed feedback or reports.
              </p>
            </div>

          </div>

          <p className="mt-6 text-sm leading-7 text-zinc-500">
            When reporting incorrect technical information or a calculator
            issue, please include the page name or URL and enough information
            for us to review the issue.
          </p>
        </section>

        {/* Technical Correction */}
        <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-white">
            Reporting a Technical Correction
          </h2>

          <p className="mt-5 leading-8 text-zinc-300">
            CivilToolsHub aims to provide useful and reliable construction
            engineering and safety information. However, construction
            requirements, standards, regulations, project specifications, and
            engineering practices may vary depending on location and project.
          </p>

          <p className="mt-4 leading-8 text-zinc-300">
            If you believe any information on CivilToolsHub requires
            correction, please provide:
          </p>

          <ul className="mt-5 space-y-3 pl-5 text-zinc-300">
            <li className="list-disc">
              The URL or name of the relevant page
            </li>

            <li className="list-disc">
              The information you believe requires correction
            </li>

            <li className="list-disc">
              Your suggested correction
            </li>

            <li className="list-disc">
              A reliable reference or applicable standard, where available
            </li>
          </ul>
        </section>

        {/* Important Notice */}
        <section className="mt-8 rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-6 sm:p-8">
          <h2 className="text-xl font-black text-yellow-400">
            Important Notice
          </h2>

          <p className="mt-4 leading-8 text-zinc-300">
            CivilToolsHub provides construction engineering, calculation, and
            safety information for educational and reference purposes.
            Questions involving project-specific engineering decisions,
            statutory compliance, or immediate site safety conditions should
            be addressed to the appropriate qualified engineer, safety
            professional, project management team, or competent authority.
          </p>
        </section>

        {/* Legal */}
        <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="font-black text-white">
            Privacy & Legal Information
          </h2>

          <div className="mt-4 flex flex-wrap gap-5">
            <Link
              href="/privacy-policy"
              className="font-semibold text-yellow-400 transition hover:text-yellow-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="font-semibold text-yellow-400 transition hover:text-yellow-300"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/disclaimer"
              className="font-semibold text-yellow-400 transition hover:text-yellow-300"
            >
              Disclaimer
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}

function ContactCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-700">
      <h2 className="text-xl font-black text-white">
        {title}
      </h2>

      <p className="mt-3 leading-7 text-zinc-400">
        {description}
      </p>
    </article>
  );
}