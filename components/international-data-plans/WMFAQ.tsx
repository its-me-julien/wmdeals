import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

// Your FAQ array
const faqs = [
  
  {
    question: "How does WM Deals make money?",
    answer:
      "WM Deals earns revenue through commissions on coupons and promo codes used via our platform. This allows us to provide discounts at no extra cost to you.",
  },
  {
    question: "Why trust WM Deals?",
    answer:
      "WM Deals curates and verifies mobile coupons and promo codes to ensure you receive the most accurate and up-to-date discounts available.",
  },
  {
    question: "Is WM Deals affiliated with World Mobile?",
    answer:
      "No, WM Deals is not affiliated with World Mobile. We operate independently to provide users with verified deals and promotions on mobile services.",
  },
];

// Helper function to strip HTML tags from a string
function stripHtml(html: string): string {
  if (typeof document !== "undefined") {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }
  return html.replace(/<\/?.+?>/g, "");
}

export default function FAQ() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="faq" className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-darkGrey">Frequently Asked Questions</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Get Answers to Common Questions
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-midGrey">
          Everything you need to know about WM Deals and the mobile plans we recommend.
        </p>
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 mt-16">
          <dl className="space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon className="block h-6 w-6 group-data-open:hidden" />
                      <MinusSmallIcon className="hidden h-6 w-6 group-data-open:block" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
