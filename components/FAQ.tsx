import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

// Your FAQ array
const faqs = [
  {
    question: "What is World Mobile?",
    answer:
      "World Mobile is a mobile network offering secure, high‑speed phone plans with extensive nationwide coverage in the USA. World Mobile network, combined with trusted partner networks, ensures reliable connectivity across most of the country.",
  },
  {
    question: "How does the referral link work?",
    answer: "More details coming soon.",
  },
  {
    question: "Can I bring my own phone to World Mobile?",
    answer:
      "Yes. If you own an unlocked handset that is compatible with the World Mobile network, you can save money by using your own device. World Mobile plans start at just $59 per month with no setup or activation fees.",
  },
  {
    question: "Can I keep my current number or get a new one?",
    answer:
      "Your number, your choice. You can easily transfer your existing number or opt for a new one when joining World Mobile, ensuring a smooth and hassle‑free transition.",
  },
  {
    question: "Can I save on multiple lines?",
    answer:
      "Absolutely! World Mobile will soon offer family bundle discounts based on your chosen plan. Enjoy fixed‑dollar savings on additional lines, making it more affordable to keep your entire family connected.",
  },
  {
    question: "How do I get World Mobile coupons or discounts?",
    answer: "More details coming soon.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "World Mobile does not charge cancellation fees for its cellular or WiFi services. You can cancel your plan at any time without penalties or extra charges, giving you flexibility and peace of mind.",
  },
  {
    question: "How can I contact World Mobile customer service?",
    answer:
      "You can easily reach World Mobile's customer support by submitting a ticket at <a href=\"https://worldmobile.zohodesk.com/portal/en/newticket\" class=\"text-indigo-600 hover:underline\" target=\"_blank\" rel=\"noopener noreferrer\">https://worldmobile.zohodesk.com/portal/en/newticket</a>. Their dedicated team will help with any questions or concerns.",
  },
  {
    question: "What is the World Mobile Essential USA Plan?",
    answer:
      "The Essential USA Plan provides unlimited calls, texts, and data with 10GB of high‑speed priority access for $59/month, making it perfect for individuals seeking reliable connectivity.",
  },
  {
    question: "What is the World Mobile Advanced USA Plan?",
    answer:
      "Designed for power users, the Advanced USA Plan offers unlimited calls, texts, and data with 30GB of high‑speed priority access for $85/month.",
  },
  {
    question: "What is the World Mobile Global Access (Data Only) Plan?",
    answer:
      "The Global Access Plan delivers 20GB of high‑speed data across more than 60 countries for $70/month—ideal for international travelers who need reliable data on the go.",
  },
  {
    question: "Are World Mobile plans truly unlimited?",
    answer:
      "Yes. World Mobile plans are designed to be truly unlimited. After you reach your high‑speed data allowance within a billing cycle, your speeds may be temporarily reduced until the cycle resets, but you will always have uninterrupted data access.",
  },
  {
    question: "How does World Mobile Deals make money?",
    answer:
      "World Mobile Deals earns revenue through a commission‑based model on coupons and promo codes. For every purchase made using our exclusive deals, we receive a small commission fee, allowing us to provide genuine savings at no extra cost to you.",
  },
  {
    question: "Why trust World Mobile Deals?",
    answer:
      "World Mobile Deals is your trusted source for verified mobile coupons and promo codes. Our dedicated team rigorously researches and verifies the best deals, ensuring you save both time and money with up‑to‑date, reliable discounts.",
  },
];

// Helper function to strip HTML tags from a string
function stripHtml(html: string): string {
  if (typeof document !== "undefined") {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }
  // Fallback for environments without document (e.g., SSR)
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

export default function FAQ() {
  // Build FAQ structured data in JSON‑LD format
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": stripHtml(faq.answer),
      },
    })),
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      {/* FAQ Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div id="faq" className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-darkGrey">Frequently Asked Questions</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Get Answers to Common Questions
          </p>
        </div>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-midGrey">
          Everything you need to know about World Mobile Deals and our secure, high‑speed mobile plans.
        </p>

        {/* FAQ List */}
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 mt-16">
          <dl className="space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="block h-6 w-6 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="hidden h-6 w-6 group-data-open:block"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p
                        className="text-base leading-7 text-gray-600"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                    </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
