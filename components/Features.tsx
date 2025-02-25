import "boxicons/css/boxicons.min.css";

const features = [
  {
    title: "Privacy First",
    description: "Secure end-to-end encryption & built-in VPN for maximum security.",
    icon: "bx-lock",
  },
  {
    title: "Reliable Nationwide Coverage",
    description: "Adaptive network technology ensures seamless connectivity anywhere.",
    icon: "bx-signal-5",
  },
  {
    title: "SIM Security",
    description: "Prevent & insure unauthorized SIM swaps with advanced protections.",
    icon: "bx-shield-alt-2",
  },
  {
    title: "Your Identity, Secured.",
    description: "Blockchain-powered storage safeguards your personal data.",
    icon: "bx-id-card",
  },
  {
    title: "Earn Rewards",
    description: "Stake tokens and participate in the network to earn extra rewards & cashback.",
    icon: "bx-coin",
  },
  {
    title: "Multi-SIM Management",
    description: "Easily manage multiple lines and accounts within a single platform.",
    icon: "bx-devices",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div id="features" className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-darkGrey">Why Choose World Mobile?</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            A Network Designed for You
          </p>
        </div>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-midGrey">
          Secure, private, and rewarding.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-black text-2xl">
                <i className={`bx ${feature.icon} text-3xl`}></i>
              </div>

              {/* Feature Title */}
              <h3 className="text-lg font-semibold text-black">{feature.title}</h3>

              {/* Feature Description */}
              <p className="mt-2 text-midGrey text-sm leading-6">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
