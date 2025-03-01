import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Unlimited Connectivity',
    description: 'Unlimited talk, text, and data in over 200 countries.',
  },
  {
    name: '50GB High‑Speed Data',
    description: 'Enjoy 50GB of premium data per person (speeds reduced after 50GB).',
  },
  {
    name: 'Unlimited Hotspot Tethering',
    description: 'Tether devices on the go without incurring extra costs.',
  },
  {
    name: 'Shareable Extras',
    description: 'Additional data available for tablets and other devices.',
  },
  {
    name: '6 Months YouTube Premium',
    description: 'Experience ad‑free YouTube and YouTube Music for six months.',
  },
  {
    name: '100GB Cloud Storage',
    description: 'Keep files secure with 100GB of Google One cloud storage.',
  },
  {
    name: 'Global International Features',
    description:
      'Access data in over 200 destinations, free texts to 200+ countries, and free calls to over 50 destinations.',
  },
  {
    name: 'Always‑On Safety',
    description:
      'Full connectivity for select smartwatches and robust safety features—including spam blocking, location sharing, and a built‑in VPN.',
  },
]

export default function Example() {
  return (
    <div className="bg-black py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-white bg-black px-2 py-1 inline-block rounded">
              We Recommend For Short Term Travelers
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Google Unlimited Plus
            </p>
            <p className="mt-4 text-base leading-7 text-white">
              Google Unlimited Plus is a premium unlimited plan with extra perks ideal for short‑term travelers. Enjoy unlimited talk, text, and data in over 200 countries, plus 50GB of high‑speed data per person, unlimited hotspot tethering, shareable extras for tablets, and 6 months of YouTube Premium—all without a long‑term commitment.
            </p>
            <a
              href="https://wmtx.cc/mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md px-4 py-2 text-sm font-semibold bg-primary text-black hover:bg-white hover:text-black transition"
            >
              Learn More
            </a>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-white sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold flex items-center">
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
