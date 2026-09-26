import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | JhaTech Solution",
  description: "Privacy Policy for JhaTech Solution.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <Link
            href="/"
            className="text-sm font-medium text-violet-600 hover:text-violet-700"
          >
            ← Back to Home
          </Link>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: September 25, 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
        <div className="space-y-10 text-[15px] leading-7 text-slate-600">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Introduction
            </h2>
            <p className="mt-3">
              JhaTech Solution respects your privacy and is committed to
              protecting the information you share with us. This Privacy Policy
              explains how we collect, use, and protect information when you
              use our website or contact us about our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We may receive information that you voluntarily provide when you
              contact us, request a service, submit an enquiry, or communicate
              with our team. This may include your name, email address, phone
              number, company details, project requirements, and other
              information you choose to provide.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              3. How We Use Information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>To respond to enquiries and communication requests.</li>
              <li>To understand project requirements.</li>
              <li>To provide and improve our services.</li>
              <li>To communicate about projects, updates, or support.</li>
              <li>To maintain website security and prevent misuse.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Information Sharing
            </h2>
            <p className="mt-3">
              We do not sell your personal information. Information may be
              shared with service providers or technology partners only when
              reasonably necessary to provide services, operate our website,
              communicate with you, or meet legal obligations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Data Security
            </h2>
            <p className="mt-3">
              We use reasonable technical and organizational measures to
              protect information from unauthorized access, misuse, alteration,
              or disclosure. However, no internet transmission or electronic
              storage system can be guaranteed to be completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              6. Third-Party Services
            </h2>
            <p className="mt-3">
              Our website or communications may use third-party services such
              as hosting, analytics, social platforms, communication tools, or
              other technology providers. Those services may have their own
              privacy policies and terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              7. Your Choices
            </h2>
            <p className="mt-3">
              You may contact us if you want to ask about the personal
              information you have provided, request correction of inaccurate
              information, or raise a privacy-related concern.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              8. Contact Us
            </h2>
            <p className="mt-3">
              For privacy-related questions, contact JhaTech Solution at{" "}
              <a
                href="mailto:info.jhatechsolution@gmail.com"
                className="font-medium text-violet-600 hover:text-violet-700"
              >
                info.jhatechsolution@gmail.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+917061598544"
                className="font-medium text-violet-600 hover:text-violet-700"
              >
                +91 70615 98544
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
