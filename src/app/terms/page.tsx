import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | JhaTech Solution",
  description: "Terms and Conditions for JhaTech Solution.",
};

export default function TermsPage() {
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
            Terms & Conditions
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
              1. Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing or using the JhaTech Solution website or engaging
              our services, you acknowledge that you have read and understood
              these Terms & Conditions and agree to follow them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Our Services
            </h2>
            <p className="mt-3">
              JhaTech Solution provides services including website development,
              web applications, e-commerce development, mobile applications,
              custom software, bug fixing, software maintenance, AI
              integration, cloud solutions, and SEO & digital solutions.
              Specific project scope, deliverables, timelines, and commercial
              terms may be agreed separately with the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Project Requirements
            </h2>
            <p className="mt-3">
              Clients are responsible for providing accurate requirements,
              content, credentials, approvals, assets, and other information
              reasonably required to complete a project. Delays in required
              inputs or approvals may affect project timelines.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Payments
            </h2>
            <p className="mt-3">
              Project pricing, payment milestones, recurring charges, and
              other commercial terms will be communicated or agreed with the
              client before work begins. Additional work outside the agreed
              scope may require additional charges.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Intellectual Property
            </h2>
            <p className="mt-3">
              Ownership and licensing of project source code, designs,
              documents, content, third-party components, and other deliverables
              will depend on the applicable project agreement and payments.
              Third-party libraries, services, trademarks, and assets remain
              subject to their respective licenses or ownership rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              6. Third-Party Services
            </h2>
            <p className="mt-3">
              Projects may depend on third-party services such as hosting,
              domains, payment gateways, APIs, cloud platforms, analytics
              services, app stores, or external software. Their availability,
              pricing, policies, and performance are controlled by the
              respective third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              7. Client Responsibilities
            </h2>
            <p className="mt-3">
              Clients are responsible for ensuring that the content,
              information, products, services, and instructions they provide
              are lawful and do not infringe the rights of others.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              8. Limitation
            </h2>
            <p className="mt-3">
              JhaTech Solution will make reasonable efforts to deliver services
              according to the agreed scope. We are not responsible for issues
              caused by third-party services, client-side changes, unsupported
              environments, misuse, or circumstances outside our reasonable
              control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              9. Changes to These Terms
            </h2>
            <p className="mt-3">
              These Terms & Conditions may be updated from time to time.
              Updated terms will be published on this page with a revised
              effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              10. Contact
            </h2>
            <p className="mt-3">
              For questions about these Terms & Conditions, contact JhaTech
              Solution at{" "}
              <a
                href="mailto:info.jhatechsolution@gmail.com"
                className="font-medium text-violet-600 hover:text-violet-700"
              >
                info.jhatechsolution@gmail.com
              </a>{" "}
              or{" "}
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
