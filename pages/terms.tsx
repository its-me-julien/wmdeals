import Head from "next/head";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | World Mobile Deals</title>
        <meta
          name="description"
          content="Read the Terms of Service for WM Deals. Understand the rules and conditions for using our services."
        />
        <link rel="canonical" href="https://wm.deals/terms/" />
      </Head>
      <main className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-black">Terms of Service</h1>
        <p className="mt-4 text-midGrey">Effective Date: 25 February 2025</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">1. Introduction</h2>
          <p className="mt-2 text-midGrey">
            Welcome to WM Deals. <br></br>We showcase the latest discounts, exclusive offers, and promotions available for World Mobile Phone Plans and World Mobile Home Internet Plans. WM Deals is an independent affiliate website and is not affiliated with, sponsored by, or endorsed by World Mobile. We earn a commission on successful referrals. By accessing our site, you agree to these Terms of Service.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">2. User Responsibilities</h2>
          <p className="mt-2 text-midGrey">
            You agree to use our services legally and responsibly, and to comply with all applicable local laws. While there are no specific rules regarding content submissions or reviews beyond the requirement to follow the law, any misuse may result in account suspension or termination.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">3. Intellectual Property</h2>
          <p className="mt-2 text-midGrey">
            All content on WM Deals is owned by WM Deals and its content sponsors. Any trademarks, logos, or brand names referenced on this site are the property of their respective owners. WM Deals does not claim ownership of the World Mobile trademark or logo. You may not reproduce or distribute any materials without our prior written consent.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">4. Limitation of Liability</h2>
          <p className="mt-2 text-midGrey">
            WM Deals provides informational content and promotions but does not guarantee the availability, pricing, or performance of any third-party services, including World Mobile’s offerings. WM Deals is not liable for any indirect, incidental, or consequential damages arising from your use of our website.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">5. Modifications to the Service and Terms</h2>
          <p className="mt-2 text-midGrey">
            We reserve the right to modify or discontinue our services and these Terms of Service at any time. Any changes will be posted on this page with an updated effective date. Please check back regularly for updates.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">6. Governing Law</h2>
          <p className="mt-2 text-midGrey">
            These Terms of Service are governed by the laws of the British Virgin Islands.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">7. Contact Us</h2>
          <p className="mt-2 text-midGrey">
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:hello@wm.deals" className="hover:underline">
            hello@wm.deals
            </a>.
          </p>
        </section>
      </main>
    </>
  );
}
