import Image from "next/image";

export default function Coverage() {
  return (
    <section id="coverage" className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div id="coverage" className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-darkGrey">Nationwide Connectivity</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Understanding World Mobile&#39;s Coverage
          </p>
        </div>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-midGrey">
          World Mobile integrates its AirNodes network with established partner networks, offering broad and reliable coverage, even in challenging locations.
        </p>

        {/* Layout: Image & Content */}
        <div className="mt-12 lg:flex lg:justify-between lg:items-center">
          {/* Image Section */}
          <div className="relative h-80 w-full lg:w-1/2 p-4 bg-black rounded-xl">
            <Image
              src="/coverage_map_World_mobile.webp"
              alt="World Mobile Coverage"
              className="h-full w-full object-cover rounded-lg"
              width={813}
              height={457}
              priority
            />
          </div>

          {/* Coverage Content */}
          <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-12">
            <ul role="list" className="space-y-8">
              {/* Feature 1 */}
              <li className="flex gap-x-3">
                <span className="text-black">
                  <strong className="font-semibold text-black">More Than A Simple Reseller.</strong><br></br> 
                  World Mobile’s hybrid network blends proprietary infrastructure with established carrier partners for broader coverage.
                </span>
              </li>

              {/* Feature 2 */}
              <li className="flex gap-x-3">
                <span className="text-black">
                  <strong className="font-semibold text-black">Seamless Connectivity.</strong><br></br>
                  AirNodes extend coverage to underserved areas. When necessary, World Mobile connects through top U.S. networks, keeping you online wherever you go.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
