"use client";

import { useEffect } from "react";

const plans = [
  {
    id: "world-mobile-global-access",
    name: "Global Access Plan",
    carrier: "Available on World Mobile",
    description: "Ideal for long-term travelers",
    price: "$70.00",
    priceValue: 70.0,
    features: [
      "20GB high‑speed data in over 60 countries",
      "SIM security insurance coverage",
      "Enhanced privacy",
      "Encrypted cloud storage",
      "+ Perks (cashbback rewards and more)",
      "No contract, hidden fees, or time restrictions",
    ],
    drawbacks: [
      "No unlimited data",
      "No talk or text included",
    ],
    buttonText: "Get a Deal",
    buttonLink: "https://wmtx.cc/mobile",
    image: "https://wm.deals/plans/global.jpg",
  },
  {
    id: "google-unlimited-plus",
    name: "Google Unlimited Plus",
    carrier: "Available on Google Fi",
    description: "Best for short-term travelers",
    price: "$65.00",
    priceValue: 65.0,
    features: [
      "Unlimited talk, text & data in over 200 countries",
      "50GB of high‑speed data",
      "100GB of cloud storage",
      "Security & privacy features",
      "+ Perks (YouTube Premium)",
      "No contract or cancellation fees",
    ],
    drawbacks: [
      "Limited to 90 consecutive days of international travel",
      "Slower data after 50 GB used",
      "Plus taxes & fees apply",
    ],
    buttonText: "Explore",
    buttonLink: "https://wmtx.cc/googlefi",
    factsheet: "https://support.google.com/fi/answer/6343762?visit_id=638763135325399748-3959202497&p=broadband-facts&rd=1",
    image: "https://wm.deals/plans/google-unlimited-plus.jpg",
  },
  {
    id: "tmobile-go5g-plus",
    name: "T‑Mobile Go5G Plus Plan",
    carrier: "Available on T‑Mobile Network",
    description: "Ideal for Mexico & Canada travelers",
    price: "$90.00",
    priceValue: 90.0,
    features: [
      "Unlimited talk, text & data in over 215+ countries",
      "5GB of high‑speed data, (15GB high‑speed data in Mexico & Canada)",
      "No contract or cancellation fees",
      "Unlimited in‑flight texting & Wi‑Fi on select airlines",
      "Complimentary perks (Netflix, Apple TV)",
    ],
    drawbacks: [
      "Slower data after 5 GB used, (up to 15GB in Mexico & Canada)",
      "Optional International Pass (15GB, $50, 30 Days)",
    ],
    buttonText: "Explore",
    buttonLink: "https://wmtx.cc/tmobile",
    image: "https://wm.deals/plans/tmobile-go5g-plus.jpg"
  },
  {
    id: "att-unlimited-premium",
    name: "AT&T Unlimited Premium",
    carrier: "Available on AT&T Network",
    description: "Best for LATAM travelers",
    price: "$85.99",
    priceValue: 85.99,
    features: [
      "Unlimited US talk, text & data",
      "Unlimited text from U.S. to 200+ countries",
      "Security & privacy features",
      "Included usage in 20 LATAM countries",
      "No cancellation fees",
      "Optional Day Pass for high-speed data in 210 countries",
    ],
    drawbacks: [
      "High cost: Day Pass is $12/day",
      "Data speeds throttle after 60GB used",
      "Activation fee may apply",
      "Plus taxes & fees apply",
    ],
    buttonText: "Explore",
    buttonLink: "https://wmtx.cc/att",
    image: "https://wm.deals/plans/att-unlimited-premium.jpg",
  },
  {
    id: "verizon-international-monthly",
    name: "Verizon International Monthly Plan",
    carrier: "Available on Verizon Network",
    description: "Ideal for trips of 9 days or more.",
    price: "$100.00",
    priceValue: 100.0,
    features: [
      "Unlimited data (first 20GB at high-speed)",
      "250 minutes of international calling",
      "Unlimited international text messaging",
      "Valid in over 210 countries and destinations",
    ],
    drawbacks: [
      "Overage charges: $0.25 per minute beyond 250 minutes",
      "Plus taxes & fees apply",
      "Data speeds throttle after 20GB",
    ],
    buttonText: "Explore",
    buttonLink: "https://wmtx.cc/verizon",
    image: "https://wm.deals/plans/verizon-international-monthly.jpg"
  }
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
          "url": plan.buttonLink
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
          <h2 className="text-base font-semibold leading-7 text-darkGrey">
            The Best International Data Plans
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Data Plan Options<br />for Global Connectivity
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-midGrey">
          Our comparison reviews a range of international phone plans to help you stay connected around the world.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan, index) => (
            <div key={plan.id} className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-midGrey lg:mt-8 xl:p-10">
              <div>
                <div className="flex items-center">
                  <span className="mr-2 text-2xl font-bold text-white bg-black px-2 py-1 rounded">
                    {index + 1}.
                  </span>
                  <h3 id={`tier-${plan.id}`} className="text-lg font-semibold leading-8 text-black">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-sm text-midGrey">{plan.carrier}</p>
                <p className="mt-4 inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-black">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-black">{plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-midGrey">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-black">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-x-3">
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
                {plan.drawbacks && plan.drawbacks.length > 0 && (
                  <div className="mt-4">
                    <ul role="list" className="mt-2 space-y-2 text-sm leading-6 text-black">
                      {plan.drawbacks.map((drawback, idx) => (
                        <li key={idx} className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M12 3a9 9 0 110 18 9 9 0 010-18z" />
                          </svg>
                          {drawback}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <a
                href={plan.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 bg-black text-white hover:bg-primary hover:text-black transition"
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
