"use client";

import Image from "next/image";
import Link from "next/link";
import logo_cn from "@/public/logos/costanet_desktop.png";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
  { name: "Costanet", href: "/", current: true },
  { name: "Nosotros", href: "/nosotros", current: false },
  { name: "Servicios", href: "/servicios", current: false },
  { name: "Contacto", href: "/contacto", current: false },
  { name: "Test de Velocidad", href: "/test-de-velocidad", current: false },
  { name: "PQRSF", href: "/pqrsf", current: false },
  { name: "PES", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [currentNavItem, setCurrentNavItem] = useState(
    navigation.find((item) => item.current)
  );

  return (
    <Disclosure as="nav" className="bg-navbar">
      {({ open }) => (
        <>
          <div className="w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-letter hover:bg-letter hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between sm:flex-col lg:flex-row p-2">
                <div className="flex flex-shrink-0 items-center p-4">
                  <Link href="/">
                    <Image
                      src={logo_cn}
                      alt="costanet"
                      className="block h-12 w-auto lg:hidden"
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src={logo_cn}
                      alt="costanet"
                      className="hidden h-12 w-auto lg:block"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setCurrentNavItem(item)}
                        className={classNames(
                          item.name === currentNavItem?.name
                            ? "bg-letter text-white"
                            : "text-letter hover:bg-letter hover:text-white",
                          "rounded-md md:px-3 md:py-2 px-2 py-1 text-center mx-0 text-sm font-medium flex items-center"
                        )}
                        aria-current={
                          item.name === currentNavItem?.name
                            ? "page"
                            : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={() => setCurrentNavItem(item)}
                  className={classNames(
                    item.name === currentNavItem?.name
                      ? "bg-letter text-white"
                      : "text-letter hover:bg-letter hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
