'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
} from '@headlessui/react'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid'

interface ConditionalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

function ConditionalLink({ href, children, className }: ConditionalLinkProps) {
  const router = useRouter()
  let computedHref = href

  if (href.startsWith('/global/#')) {
    const hash = href.split('#')[1]
    computedHref = router.pathname === '/global' ? `#${hash}` : `/global/#${hash}`
  } else if (href.startsWith('/travel#')) {
    const hash = href.split('#')[1]
    computedHref = router.pathname === '/travel' ? `#${hash}` : `/travel#${hash}`
  } else if (href.startsWith('https://wm.deals/#')) {
    const hash = href.split('#')[1]
    computedHref = router.pathname === '/' ? `#${hash}` : `/#${hash}`
  }

  return (
    <Link href={computedHref} className={className}>
      {children}
    </Link>
  )
}

// Menu Data

// (Global plan flyout data removed since we’re replacing it with a single link)

// USA dropdown
const usaMenu = [
  { name: 'Plans', href: '/#plans' },
  { name: 'Features', href: '/#features' },
  { name: 'Coverage', href: '/#coverage' },
  { name: 'FAQ', href: '/#faq' },
]
const usaCTA = { name: 'Get a Deal', href: '/#deal' }


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background text-foreground">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="https://wm.deals/" className="flex items-center space-x-3">
            <Image src="/wmdeals_white.png" alt="WM Deals" width={40} height={40} priority />
            <span className="text-lg font-semibold tracking-wide">WM Deals</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {/* Global Plans link (changed from dropdown) */}
          <Link href="/global" className="text-sm font-semibold leading-6">
            Global Plans
          </Link>
          {/* USA dropdown */}
          <Popover className="relative">
            <div className="flex items-center gap-x-1">
              <Link href="/" className="text-sm font-semibold leading-6">
                USA
              </Link>
              <Popover.Button className="focus:outline-none">
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none" />
              </Popover.Button>
            </div>
            <Popover.Panel
              transition
              className="absolute z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white/95 shadow-lg transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 space-y-2">
                {usaMenu.map((item) => (
                  <ConditionalLink
                    key={item.name}
                    href={item.href}
                    className="block font-semibold hover:bg-muted p-2 rounded-lg"
                  >
                    {item.name}
                  </ConditionalLink>
                ))}
              </div>
              <div className="p-3">
                <a
                  href={usaCTA.href}
                  className="block text-center text-sm font-semibold leading-6 bg-primary hover:bg-primary p-2 rounded-lg"
                >
                  {usaCTA.name}
                </a>
              </div>
            </Popover.Panel>
          </Popover>
      
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Optional additional links */}
        </div>
      </nav>
      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <a href="https://wm.deals/" className="flex items-center space-x-3 -m-1.5 p-1.5">
              <span className="sr-only">WM Deals</span>
              <Image src="/wmdeals_white.png" alt="WM Deals" width={40} height={40} priority />
              <span className="text-lg font-semibold tracking-wide">WM Deals</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 focus:outline-none"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y">
              <div className="space-y-2 py-6">
                {/* Mobile Global Plans link (changed from dropdown) */}
                <Link
                  href="/global"
                  className="block rounded-lg py-2 pl-3 pr-3 text-base font-semibold leading-7 hover:bg-muted"
                >
                  Global Plans
                </Link>
                {/* Mobile USA dropdown */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-muted focus:outline-none">
                    USA
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {usaMenu.map((item) => (
                      <ConditionalLink
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-muted"
                      >
                        {item.name}
                      </ConditionalLink>
                    ))}
                    <a
                      href={usaCTA.href}
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 bg-primary hover:bg-primary text-center"
                    >
                      {usaCTA.name}
                    </a>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
