import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

// Your FAQ array
const faqs = [
  {
    question: "What does World Mobile do?",
    answer:
      "World Mobile is a mobile network provider offering secure, high-speed phone plans with extensive coverage across the USA. WM Deals is an independent platform that promotes World Mobile’s plans. By integrating its network with established partner networks, World Mobile delivers broad and reliable connectivity. For official details, visit World Mobile’s <a href=\"https://worldmobile.io\" class=\"text-indigo-600 hover:underline\" target=\"_blank\" rel=\"noopener noreferrer\">website</a>.",
  },  
  {
    question: "How does the referral link work?",
    answer: "More details coming soon.",
  },
  {
    question: "Can I bring my own phone to World Mobile?",
    answer:
      "Yes. If you have an unlocked handset that is compatible with World Mobile’s network, you can use your own device. Plans start at just $59 per month with no setup or activation fees.",
  },
  {
    question: "Can I keep my current number or get a new one?",
    answer:
      "You have the option to transfer your existing number or get a new one when joining WM Deals for a smooth transition.",
  },
  {
    question: "Can I save on multiple lines?",
    answer:
      "Yes! World Mobile plans to offer family bundle discounts in the near future, allowing additional lines at a reduced cost.",
  },
  {
    question: "How do I get World Mobile coupons or discounts?",
    answer: "More details coming soon.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "World Mobile does not charge cancellation fees. You can cancel your plan at any time without penalties.",
  },
  {
    question: "How can I contact World Mobile customer service?",
    answer:
      "You can reach customer support by submitting a ticket at <a href=\"https://worldmobile.zohodesk.com/portal/en/newticket\" class=\"text-indigo-600 hover:underline\" target=\"_blank\" rel=\"noopener noreferrer\">this link</a>.",
  },
  {
    question: "What is the World Mobile Essential USA Plan?",
    answer:
      "The Essential USA Plan provides unlimited calls, texts, and data with 10GB of high‑speed priority access for $59/month.",
  },
  {
    question: "What is the World Mobile Advanced USA Plan?",
    answer:
      "The Advanced USA Plan offers unlimited calls, texts, and data with 30GB of high‑speed priority access for $85/month.",
  },
  {
    question: "What is the World Mobile Global Access (Data Only) Plan?",
    answer:
      "The Global Access Plan provides 20GB of high‑speed data across more than 60 countries for $70/month, designed for international travelers.",
  },
  {
    question: "Are World Mobile plans truly unlimited?",
    answer:
      "Yes. After you reach your high‑speed data allowance within a billing cycle, speeds may be temporarily reduced, but you will continue to have data access without interruptions.",
  },
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
    <section className=" py-24 sm:py-32">
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
          Everything you need to know about WM Deals and our mobile plans.
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
