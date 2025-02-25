import "boxicons/css/boxicons.min.css";
import Image from "next/image";

type NavigationLink = {
  name: string;
  href: string;
};

type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

const navigation: {
  worldMobile: NavigationLink[];
  community: NavigationLink[];
  legal: NavigationLink[];
  social: SocialLink[];
} = {
  worldMobile: [
    { name: "World Mobile Links", href: "https://worldmobile.me/" },
    { name: "World Mobile Info", href: "https://worldmobile.info/" },
    { name: "Stake with The Club", href: "https://stake.worldmobile.club/" },
  ],
  community: [
    { name: "Community Forum", href: "https://worldmobile.club/" },
    { name: "Twitter", href: "https://x.com/Club_wmtx" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    { name: "Twitter", href: "https://x.com/Club_wmtx", icon: "bxl-twitter" },
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
         <a href="https://worldmobiledeals.com/" className="flex items-center space-x-3">
                       <Image 
                         src="/deals-logo.png" 
                         alt="World Mobile Deals" 
                         width={40} 
                         height={40} 
                         priority
                       />
                       <span className="text-lg font-semibold tracking-wide">World Mobile Deals</span>
                     </a>

          <p className="text-sm text-lightGrey">
            Get the best prices and deals on World Mobile plans and home internet.
          </p>

            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lightGrey hover:text-primary transition"
                >
                  <i className={`bx ${item.icon} text-2xl`}></i>
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Grid - 3 Columns */}
          <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3">
            <FooterSection title="World Mobile" links={navigation.worldMobile} />
            <FooterSection title="Community" links={navigation.community} />
            <FooterSection title="Legal" links={navigation.legal} />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-lightGrey">
            &copy; {new Date().getFullYear()} The Club. All rights reserved.
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
        {links.map((item) => (
          <li key={item.name}>
            <a href={item.href} className="text-sm text-lightGrey hover:text-primary transition">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
