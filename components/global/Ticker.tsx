import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Example() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Hide the banner when dismissed

  return (
    <div className="flex items-center gap-x-6 bg-primary px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-black">
        <a href="https://wmtx.cc/mobile" >
          <strong className="font-semibold">WM Deals recommends</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          The World Mobile Global Access Plan&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setIsVisible(false)} // Dismiss the banner
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-black" />
        </button>
      </div>
    </div>
  );
}
