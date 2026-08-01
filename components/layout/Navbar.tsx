"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Sites Vitrines (B2B & B2C)', href: '/services#vitrine' },
      { name: 'E-commerce & Vente en Ligne', href: '/services#ecommerce' },
      { name: 'Applications & Outils', href: '/services#application' },
    ],
  },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex lg:flex-1 items-center">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Pixonix</span>
            <div className="relative w-56 h-16 lg:w-72 lg:h-20">
               <Image 
                 src="/logo.png" 
                 alt="Pixonix Logo" 
                 fill 
                 className="object-contain object-left"
                 priority
               />
            </div>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-600 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <div
                  className={`flex items-center gap-x-1 text-sm font-bold leading-6 transition-colors cursor-pointer py-2 ${isActive(item.href) ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link href={item.href}>{item.name}</Link>
                  <ChevronDownIcon className="h-4 w-4 flex-none" aria-hidden="true" />
                  
                  {/* Dropdown */}
                  <div 
                    className={`absolute left-0 top-full z-10 mt-0 w-56 origin-top-left rounded-xl bg-white border border-slate-100 p-2 shadow-xl transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block rounded-lg px-4 py-3 text-sm font-semibold leading-6 text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-bold leading-6 transition-colors py-2 ${isActive(item.href) ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 bg-primary text-bg-dark px-5 py-2.5 rounded-lg hover:bg-primary-hover transition-colors font-montserrat shadow-lg shadow-primary/20"
          >
            Démarrer un projet <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu (simplified overlay) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white/98 backdrop-blur-sm p-6 overflow-y-auto">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <div className="relative w-56 h-14">
                 <Image 
                   src="/logo.png" 
                   alt="Pixonix Logo" 
                   fill 
                   className="object-contain object-left"
                 />
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-600 hover:text-slate-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-100">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-slate-900 hover:bg-slate-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4 mt-2 space-y-1 border-l border-slate-200">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-primary text-bg-dark text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Démarrer un projet
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
