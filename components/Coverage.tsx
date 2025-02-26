import Image from "next/image";


export default function Coverage() {
  return (
    <section id="coverage" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div id="coverage" className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-darkGrey">Nationwide Connectivity</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            How Good is World Mobile&#39;s Coverage?
          </p>
        </div>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-midGrey">
          Beyond traditional coverage. World Mobile combines its AirNodes network with trusted partner networks, delivering unmatched reliability—even in places others fail.
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
                  <strong className="font-semibold text-black">Not Just a Reseller.</strong><br></br> 
                  Most providers resell coverage. World Mobile operates as a full Mobile Network Operator (MNO), giving you direct access to its network.
                </span>
              </li>

              {/* Feature 2 */}
              <li className="flex gap-x-3">
               
                <span className="text-black">
                  <strong className="font-semibold text-black">The Best of Both Worlds.</strong><br></br>
                  AirNodes bring connectivity where others don&#39;t. When needed, World Mobile seamlessly switches to leading U.S. carrier networks—so you&#39;re always covered, no matter where you are.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
