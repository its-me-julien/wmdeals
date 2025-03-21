import Image from "next/image";
import Link from "next/link";

type NavigationLink = {
  name: string;
  href: string;
};

const navigation: {
  customers: NavigationLink[];
  tokenHolders: NavigationLink[];
  operators: NavigationLink[];
  community: NavigationLink[];
} = {
  customers: [
    { name: "Network Reviews", href: "https://worldmobile.review/" },
    { name: "World Mobile Deals", href: "https://wm.deals/" },
    { name: "Referral Codes", href: "https://refermobile.com/" },
    { name: "Get Help", href: "https://worldmobile.club/c/help/71" },
  ],
  tokenHolders: [
    { name: "Buy WMTx", href: "https://worldmobile.info/participate/where-to-buy-wmtx/" },
    { name: "Stake WMTx", href: "https://stake.worldmobile.club/" },
    { name: "Ecosystem", href: "https://worldmobile.me/" },
    { name: "Event Calendar", href: "https://worldmobile.club/calendar" },
  ],
  operators: [
    { name: "Getting Started", href: "https://worldmobile.info/getting-started-with-world-mobile/" },
    { name: "EarthNodes (ENO)", href: "https://worldmobile.club/c/earthnodes/5" },
    { name: "AirNodes (ANO)", href: "https://worldmobile.club/c/airnode/6" },
    { name: "HEX Guardians", href: "https://worldmobile.club/c/hex-guardians/8" },
  ],
  community: [
    { name: "Forum", href: "https://worldmobile.club/" },
    { name: "Milestones", href: "https://worldmobile.info/timeline/" },
    { name: "Grants", href: "https://worldmobile.info/participate/grant-hub/" },
  ],
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-black text-white">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Branding & Social */}
          <div className="space-y-6">
            <a href="https://wm.deals/" className="flex items-center space-x-3">
              <Image 
                src="/web-app-manifest-192x192.png" 
                alt="World Mobile Deals Logo" 
                width={40} 
                height={40} 
                priority 
              />
              <span className="text-lg font-semibold tracking-wide text-lightGrey hover:text-primary transition">WM Deals</span>
            </a>

            <p className="text-sm text-lightGrey">
              WM Deals is an independent platform, operated by <a href="https://worldmobile.club/" className="text-lightGrey hover:text-primary transition">The Club</a>. We are not owned by or officially associated with any mobile or internet provider. Our site may contain affiliate links that help fund our content.
            </p>
          </div>

          {/* Footer Links Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-4">
            <FooterSection title="Customers" links={navigation.customers} />
            <FooterSection title="Token Holders" links={navigation.tokenHolders} />
            <FooterSection title="Operators" links={navigation.operators} />
            <FooterSection title="Community" links={navigation.community} />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-lightGrey">
            &copy; {new Date().getFullYear()} WM Deals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

type FooterSectionProps = {
  title: string;
  links: NavigationLink[];
};

function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-white">{title}</h3>
      <ul role="list" className="mt-4 space-y-3">
        {links.map((item) => {
          const isInternal = item.href.startsWith("/");

          return (
            <li key={item.name}>
              {isInternal ? (
                <Link href={item.href} className="text-sm text-lightGrey hover:text-primary transition">
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="text-sm text-lightGrey hover:text-primary transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
