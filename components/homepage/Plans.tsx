"use client";

import { useEffect } from "react";

const plans = [
  {
    id: "essential-usa",
    name: "Essential USA",
    carrier: "Available on the World Mobile Network",
    description: "Best for Individuals.",
    price: "$59.00",
    priceValue: 59.0,
    features: [
      "Unlimited calls, texts, and data with 10GB high‑speed priority access.",
      "Nationwide coverage with built-in SIM security insurance.",
      "Your personal data, secured with encryption.",
      "No contracts. No data selling. No corporate tracking.",
    ],
    buttonText: "Get a Deal",
    image: "https://wm.deals/plans/essential.jpg",
  },
  {
    id: "advanced-usa",
    name: "Advanced USA",
    carrier: "Available on the World Mobile Network",
    description: "Best for Power Users",
    price: "$85.00",
    priceValue: 85.0,
    features: [
      "Unlimited calls, texts, and data with 30GB high‑speed priority access.",
      "Nationwide coverage with built-in SIM security insurance.",
      "Your personal data, secured with encryption.",
      "No contracts. No data selling. No corporate tracking.",
    ],
    buttonText: "Get a Deal",
    image: "https://wm.deals/plans/advanced.jpg",
  },
  
];

export default function Plans() {
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "World Mobile Plans",
      "itemListElement": plans.map((plan, index) => ({
        "@type": "Product",
        "name": plan.name,
        "description": plan.description,
        "image": plan.image,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": plan.priceValue,
          "availability": "https://schema.org/InStock",
          "url": "https://wmtx.cc/mobile"
        },
        "category": "Mobile Phone Plans",
        "position": index + 1
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="plans" className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-darkGrey">Web 3 Phone Plans</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Phone Plans for Every Need
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-midGrey">
          Nationwide coverage with built-in SIM security insurance. No contracts. No data selling. No corporate tracking.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div key={plan.id} className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-midGrey lg:mt-8 xl:p-10">
              <div>
                <h3 id={`tier-${plan.id}`} className="text-lg font-semibold leading-8 text-black">
                  {plan.name}
                </h3>
                <p className="text-sm text-midGrey">{plan.carrier}</p>
                <p className="mt-4 inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-black">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-black">{plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-midGrey">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-black">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="https://wmtx.cc/mobile" target="_blank" rel="noopener noreferrer" className="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 bg-black text-white hover:bg-primary hover:text-black transition">
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
