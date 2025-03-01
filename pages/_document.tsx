import { Html, Head, Main, NextScript } from "next/document";



export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />

        {/* Favicon & App Icons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="WM Deals - No-Contract Mobile Phone Plans" />
        <meta
          property="og:description"
          content="Switch to World Mobile for no-contract mobile phone plans with better privacy, nationwide coverage, fast and reliable connectivity."
        />
        <meta property="og:url" content="https://wm.deals/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://wm.deals/social.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="World Mobile Deals - No-Contract Mobile Phone Plans" />
        <meta
          name="twitter:description"
          content="Switch to World Mobile for no-contract mobile phone plans with better privacy, nationwide coverage, fast and reliable connectivity."
        />
        <meta name="twitter:image" content="https://wm.deals/social.png" />

        {/* Structured Data (JSON-LD for SEO) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "World Mobile Deals",
          "url": "https://wm.deals/",
          "logo": "https://wm.deals/web-app-manifest-512x512.png",
          "description": "Switch to World Mobile for no-contract mobile phone plans with better privacy, nationwide coverage, fast and reliable connectivity."
        })}} />
      </Head>
      
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
