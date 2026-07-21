import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CivilToolsHub",
  description:
    "Read the CivilToolsHub Privacy Policy to understand how we collect, use, protect, and handle information when you use our construction calculators, safety tools, guides, and other services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
          <span className="text-zinc-300">Privacy Policy</span>
        </nav>

        {/* Header */}
        <section className="mb-10 border-b border-zinc-800 pb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-400">
            Legal
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            This Privacy Policy explains how CivilToolsHub collects, uses,
            protects, and handles information when you use our website,
            construction calculators, safety tools, technical resources, and
            other services.
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            Last updated: July 21, 2026
          </p>
        </section>

        <div className="space-y-10">
          {/* Introduction */}
          <PolicySection title="1. Introduction">
            <p>
              CivilToolsHub is a construction engineering and safety platform
              designed to provide useful calculators, safety resources,
              observation tools, technical guides, and educational information
              for construction professionals, engineers, safety personnel,
              contractors, students, and other users.
            </p>

            <p>
              We respect your privacy and are committed to handling information
              responsibly. By using CivilToolsHub, you acknowledge the
              practices described in this Privacy Policy.
            </p>
          </PolicySection>

          {/* Information Collection */}
          <PolicySection title="2. Information We May Collect">
            <p>
              You can access many parts of CivilToolsHub without providing
              personal information. However, certain information may be
              collected automatically or voluntarily when you interact with
              the website.
            </p>

            <h3 className="mt-6 text-lg font-bold text-white">
              Information You Provide
            </h3>

            <p>
              If you contact us, submit feedback, report an issue, or use a
              contact form, we may receive information such as:
            </p>

            <BulletList
              items={[
                "Your name",
                "Email address",
                "Information included in your message",
                "Feedback, questions, or technical issue details you choose to provide",
              ]}
            />

            <h3 className="mt-6 text-lg font-bold text-white">
              Information Collected Automatically
            </h3>

            <p>
              When you visit the website, certain technical information may be
              collected automatically by hosting, analytics, security, or
              advertising services.
            </p>

            <BulletList
              items={[
                "Internet Protocol (IP) address",
                "Browser type and version",
                "Device type",
                "Operating system",
                "Pages visited",
                "Approximate visit time and duration",
                "Referring website or source",
                "General usage and interaction information",
              ]}
            />
          </PolicySection>

          {/* Usage */}
          <PolicySection title="3. How We Use Information">
            <p>
              Information collected through CivilToolsHub may be used for
              legitimate website operations and improvement purposes,
              including:
            </p>

            <BulletList
              items={[
                "Operating and maintaining the website",
                "Improving construction calculators, safety tools, and technical resources",
                "Understanding how visitors use the website",
                "Responding to questions, feedback, or support requests",
                "Identifying and resolving technical problems",
                "Improving website security and performance",
                "Developing new features and content",
                "Preventing abuse, spam, or fraudulent activity",
                "Supporting analytics and advertising where applicable",
              ]}
            />
          </PolicySection>

          {/* Cookies */}
          <PolicySection title="4. Cookies and Similar Technologies">
            <p>
              CivilToolsHub and third-party services used by the website may
              use cookies or similar technologies. Cookies are small files
              stored on a user&apos;s device that can help websites remember
              preferences, understand usage, measure performance, and support
              advertising.
            </p>

            <p>
              Depending on the services enabled on CivilToolsHub, cookies may
              be used for functionality, analytics, security, preferences, and
              advertising purposes.
            </p>

            <p>
              You can control or disable cookies through your browser settings.
              Disabling certain cookies may affect some website functionality.
            </p>
          </PolicySection>

          {/* Analytics */}
          <PolicySection title="5. Analytics">
            <p>
              CivilToolsHub may use analytics services to understand website
              traffic, visitor behavior, popular pages, device information, and
              general usage patterns.
            </p>

            <p>
              Analytics information helps us improve website performance,
              content quality, navigation, calculators, safety tools, and the
              overall user experience.
            </p>
          </PolicySection>

          {/* Advertising */}
          <PolicySection title="6. Advertising and Google AdSense">
            <p>
              CivilToolsHub may display advertisements through Google AdSense
              or other advertising partners.
            </p>

            <p>
              Google and other third-party advertising providers may use
              cookies or similar technologies to serve, personalize, measure,
              and improve advertisements in accordance with their own privacy
              policies and applicable requirements.
            </p>

            <p>
              Where required, users may be provided with options to manage
              advertising or cookie preferences.
            </p>

            <p>
              CivilToolsHub does not directly control the cookies or data
              processing practices used by independent third-party advertising
              providers.
            </p>
          </PolicySection>

          {/* Third Parties */}
          <PolicySection title="7. Third-Party Services">
            <p>
              CivilToolsHub may rely on third-party providers for services such
              as:
            </p>

            <BulletList
              items={[
                "Website hosting",
                "Analytics",
                "Advertising",
                "Security and performance monitoring",
                "Email or contact-form processing",
                "Other infrastructure required to operate the website",
              ]}
            />

            <p>
              These providers may process certain information according to
              their own privacy policies and applicable laws.
            </p>
          </PolicySection>

          {/* External Links */}
          <PolicySection title="8. External Links">
            <p>
              CivilToolsHub may contain links to external websites,
              organizations, standards, manufacturers, or other third-party
              resources.
            </p>

            <p>
              We are not responsible for the privacy practices, security,
              accuracy, availability, or content of external websites. Users
              should review the privacy policies and terms of any third-party
              website they visit.
            </p>
          </PolicySection>

          {/* Data Security */}
          <PolicySection title="9. Data Security">
            <p>
              We take reasonable measures to protect information associated
              with CivilToolsHub against unauthorized access, misuse, loss, or
              alteration.
            </p>

            <p>
              However, no internet transmission, website, or electronic storage
              method can be guaranteed to be completely secure. Therefore, we
              cannot guarantee absolute security of information transmitted
              through the internet.
            </p>
          </PolicySection>

          {/* Retention */}
          <PolicySection title="10. Data Retention">
            <p>
              Information may be retained only for as long as reasonably
              necessary for the purpose for which it was collected, including
              responding to inquiries, maintaining website security, resolving
              technical issues, meeting legal obligations, or improving our
              services.
            </p>
          </PolicySection>

          {/* Children's Privacy */}
          <PolicySection title="11. Children's Privacy">
            <p>
              CivilToolsHub is primarily intended for construction
              professionals, engineers, safety personnel, contractors,
              technical users, and students seeking educational or professional
              information.
            </p>

            <p>
              We do not knowingly collect personal information from children
              where doing so would violate applicable law. If you believe that
              a child has provided personal information through the website,
              please contact us so that appropriate action can be considered.
            </p>
          </PolicySection>

          {/* User Choices */}
          <PolicySection title="12. Your Privacy Choices">
            <p>
              Depending on your location and applicable law, you may have
              certain rights or choices regarding personal information.
            </p>

            <p>
              You may also manage cookies through your browser settings and,
              where available, through consent or advertising preference tools
              provided on the website or by third-party services.
            </p>
          </PolicySection>

          {/* Calculators */}
          <PolicySection title="13. Construction Calculators and Safety Tools">
            <p>
              Information entered into construction calculators or safety tools
              may be processed to provide the requested result or output.
            </p>

            <p>
              Unless a feature clearly states otherwise, users should avoid
              entering confidential, sensitive, proprietary, or personally
              identifiable information into calculators, observation
              generators, or other technical tools.
            </p>
          </PolicySection>

          {/* Changes */}
          <PolicySection title="14. Changes to This Privacy Policy">
            <p>
              CivilToolsHub may update this Privacy Policy when website
              features, legal requirements, advertising practices, analytics
              services, or other operational practices change.
            </p>

            <p>
              When this policy is updated, the revised version will be
              published on this page and the &quot;Last updated&quot; date may be
              changed accordingly.
            </p>
          </PolicySection>

          {/* Contact */}
          <PolicySection title="15. Contact Us">
            <p>
              If you have questions, concerns, or requests regarding this
              Privacy Policy or the way CivilToolsHub handles information,
              please contact us through our Contact page.
            </p>

            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex rounded-lg bg-yellow-400 px-5 py-3 font-bold text-black transition hover:bg-yellow-300"
              >
                Contact CivilToolsHub
              </Link>
            </div>
          </PolicySection>
        </div>

        {/* Bottom note */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm leading-7 text-zinc-400">
            This Privacy Policy applies to CivilToolsHub and its website
            services. Separate third-party websites and services are governed
            by their respective privacy policies.
          </p>
        </div>
      </div>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
      <h2 className="text-2xl font-black text-white">{title}</h2>

      <div className="mt-5 space-y-4 leading-8 text-zinc-300">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 pl-5">
      {items.map((item) => (
        <li key={item} className="list-disc pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}