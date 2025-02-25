import Head from "next/head";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - World Mobile Deals</title>
        <meta
          name="description"
          content="Read the Terms of Service for World Mobile Deals. Understand the rules and conditions for using our services."
        />
      </Head>
      <main className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-black">Terms of Service</h1>
        <p className="mt-4 text-midGrey">
          Last Updated: [Insert Date]
        </p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">1. Introduction</h2>
          <p className="mt-2 text-midGrey">
            These Terms of Service govern your use of World Mobile Deals. By accessing our website, you agree to these terms.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">2. User Responsibilities</h2>
          <p className="mt-2 text-midGrey">
            You agree to use our services legally and responsibly. Any misuse may result in account suspension.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">3. Limitation of Liability</h2>
          <p className="mt-2 text-midGrey">
            World Mobile Deals is not liable for any indirect or incidental damages arising from service use.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">4. Contact Us</h2>
          <p className="mt-2 text-midGrey">
            If you have any questions, please contact us at{" "}
            <a href="mailto:support@worldmobiledeals.com" className="text-primary hover:underline">
              support@worldmobiledeals.com
            </a>.
          </p>
        </section>
      </main>
    </>
  );
}
