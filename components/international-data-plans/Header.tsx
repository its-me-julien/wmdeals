"use client";



export default function Header() {



  return (
    <div className="bg-background text-foreground">

      {/* Hero Section */}
      <div className="relative isolate pt-12 sm:pt-16 lg:pb-4">
  <div className="py-12 sm:py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
           {/* Headline */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground">
              The Best International Data Plans
            </h1>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
              Global Coverage, Enhanced Privacy & No Hidden Fees
            </h2>

            {/* Subtext */}
            <p className="mt-6 text-lg leading-8 text-foreground">
              We looked for the perfect plans for world travelers, offering high-speed data in multiple countries — with no roaming fees, hidden charges, or surprises. Stay connected, secure, and in control wherever you go.
            </p>



              {/* CTA Buttons */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#plans"
                  className="rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary hover:text-black transition"
                >
                  View Global Plans
                </a>
              </div>

         

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
