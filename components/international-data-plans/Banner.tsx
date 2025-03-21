import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Example() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Hide banner when dismissed

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
      <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-black px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
        <p className="text-sm leading-6 text-white">
          <a href="https://wmtx.cc/mobile" >
            <strong className="font-semibold">WM Deals</strong>
            <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
              <circle r={1} cx={1} cy={1} />
            </svg>
           Get the best international phone plan today.
          </a>
        </p>
        <button
          type="button"
          onClick={() => setIsVisible(false)} // Hide the banner when clicked
          className="-m-1.5 flex-none p-1.5"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}
