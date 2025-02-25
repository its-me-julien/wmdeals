import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - World Mobile Deals</title>
        <meta
          name="description"
          content="Read the Privacy Policy for World Mobile Deals. Learn how we collect, use, and protect your data."
        />
        <link rel="canonical" href="https://worldmobiledeals.com/privacy/" />
      </Head>
      <main className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-black">Privacy Policy</h1>
        <p className="mt-4 text-midGrey">Effective Date: 25 February 2025</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">1. Introduction</h2>
          <p className="mt-2 text-midGrey">
            Welcome to World Mobile Deals. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect data on our website and services.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">2. Information We Collect</h2>
          <p className="mt-2 text-midGrey">
            We collect anonymised usage data automatically. This includes details such as IP addresses, browser type, and usage metrics. We do not collect personal data like your name, email, or phone number.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">3. Tracking Technologies</h2>
          <p className="mt-2 text-midGrey">
            We use cookies and tracking technologies such as Google Analytics (GA4) and Cloudflare Analytics to gather anonymised usage data. These tools help us improve our services and user experience.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">4. How We Use Your Data</h2>
          <p className="mt-2 text-midGrey">
            The data we collect is used solely for service improvement and marketing purposes. Since all data is anonymised, it does not personally identify you.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">5. Data Sharing</h2>
          <p className="mt-2 text-midGrey">
            We do not share any data with third parties. All collected data is retained for internal use only.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">6. User Rights</h2>
          <p className="mt-2 text-midGrey">
            Although you have the right to access, correct, or delete your data, no such actions are necessary as we only collect anonymised data which does not identify you personally.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">7. Data Security</h2>
          <p className="mt-2 text-midGrey">
            We employ security measures via Google Analytics (GA4) and Cloudflare to protect the anonymised data we collect.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">8. Changes to This Privacy Policy</h2>
          <p className="mt-2 text-midGrey">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">9. Contact Us</h2>
          <p className="mt-2 text-midGrey">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:hello@worldmobile.club" className="hover:underline">
            hello@worldmobile.club
            </a>.
          </p>
        </section>
      </main>
    </>
  );
}
