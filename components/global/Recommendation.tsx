import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: '20GB Data',
    description: 'Enjoy 20GB of high‑speed data for all your connectivity needs.',
  },
  {
    name: '60+ Country Coverage',
    description: 'Stay connected in over 60 countries worldwide.',
  },
  {
    name: 'Unrivaled Coverage',
    description: 'World Mobile\'s hybrid‑dynamic network blends community‑powered AirNodes with trusted partner networks to keep you connected—even in dead zones.',
  },
  {
    name: 'Built‑In VPN',
    description: 'Secure end‑to‑end encryption for enhanced privacy and security.',
  },
  {
    name: 'Identity Protection',
    description: 'Blockchain‑powered storage and identity theft insurance safeguard your data.',
  },
  {
    name: 'Extra Perks',
    description: 'Earn rewards, benefits, and cashback on every plan.',
  },
  {
    name: 'Multi‑SIM Management',
    description: 'Effortlessly manage multiple lines on a single account.',
  },
 
]

export default function Example() {
  return (
    <div className="bg-background py-24 sm:py-32 text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
  <h2 className="text-base font-semibold leading-7 text-black  px-2 py-1 inline-block rounded">
    We Recommend For Long Term Travelers
  </h2>
  <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
  The Global Access Plan
  </p>
  <p className="mt-4 text-base leading-7 text-foreground">
  World Mobile&#39;s Global Access Plan strikes the perfect balance between international coverage, generous data, and affordability. It delivers more high‑speed data than T‑Mobile Go5G Plus and AT&T Unlimited Premium—at a lower cost. 20GB is typically more than enough, and no limits on consecutive travel days, it’s ideal for long‑term travelers.
  </p>

  <a
  href="https://wmtx.cc/mobile"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block rounded-md px-4 py-2 text-sm font-semibold bg-black text-background hover:bg-primary hover:text-black transition"
>
  Learn More
</a>





</div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-foreground sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold flex items-center text-foreground">
                  <span className="absolute left-0 top-1 inline-flex h-5 w-5 items-center justify-center rounded bg-black">
                    <CheckIcon aria-hidden="true" className="h-4 w-4 text-primary" />
                  </span>
                  {feature.name}
                </dt>
                {feature.description && <dd className="mt-2">{feature.description}</dd>}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
