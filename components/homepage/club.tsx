import React, { useEffect } from 'react';

interface DiscourseEmbedConfig {
  discourseUrl: string;
  topicId?: number;
  className?: string;
  discourseUserName?: string;
  discourseReferrerPolicy?: string;
}

declare global {
  interface Window {
    DiscourseEmbed?: DiscourseEmbedConfig;
  }
}

const DiscourseTopicSection: React.FC = () => {
  useEffect(() => {
    // Append the meta tag for discourse-username
    const meta = document.createElement('meta');
    meta.name = 'discourse-username';
    meta.content = 'Club';
    document.head.appendChild(meta);

    // Set the global DiscourseEmbed configuration using topicId
    window.DiscourseEmbed = {
      discourseUrl: 'https://worldmobile.club/',
      topicId: 720, // Embed topic with ID 720
      className: 'custom-discourse-embed',
    };

    // Create the script tag for the Discourse embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(meta);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative isolate pt-12 sm:pt-16 lg:pb-4">
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Headline */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground">
              Community Referrals
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover the latest referral codes from our community members below:
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="w-full sm:w-3/5">
              <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-midGrey lg:mt-8 xl:p-10">
                <div id="discourse-comments" className="h-[800px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscourseTopicSection;
