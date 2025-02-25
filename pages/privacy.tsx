import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - World Mobile Deals</title>
        <meta
          name="description"
          content="Read the Privacy Policy for World Mobile Deals. Learn how we collect, use, and protect your personal data."
        />
      </Head>
      <main className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-black">Privacy Policy</h1>
        <p className="mt-4 text-midGrey">
          Last Updated: [Insert Date]
        </p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">1. Introduction</h2>
          <p className="mt-2 text-midGrey">
            Welcome to World Mobile Deals. Your privacy is important to us. This Privacy Policy
            explains how we collect, use, and protect your personal data.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">2. Information We Collect</h2>
          <p className="mt-2 text-midGrey">
            We collect personal information such as your name, email, and usage data when you use our services.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">3. How We Use Your Information</h2>
          <p className="mt-2 text-midGrey">
            We use your information to provide services, improve user experience, and ensure security.
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
