"use client";
import { navigation, classNames } from "@/utils/costanet_routes";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function DisclosureNavbar() {
  const [currentNavItem, setCurrentNavItem] = useState(
    navigation.find((item) => item.current)
  );
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const handleLinkClick = () => {
    setIsPanelVisible(false); // Hide the panel when a link is clicked
  };
  const handleHamburgerClick = () => {
    setIsPanelVisible(!isPanelVisible); // Toggle the panel visibility when the hamburger button is clicked
  };
  return (
    <Disclosure as="div" className="sm:hidden">
      {({ open }) => (
        <>
          <Disclosure.Button
            className="inline-flex items-center justify-center rounded-md p-2 text-letter hover:bg-letter hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={handleHamburgerClick}
          >
            <span className="sr-only">Open main menu</span>
            {open ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel
            className={`sm:hidden bg-navbar p-4 absolute top-20 w-full left-0 ${
              isPanelVisible ? "block" : "hidden" // Conditionally set the visibility
            }`}
          >
            <div className="pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setCurrentNavItem(item);
                    handleLinkClick(); // Call the handleLinkClick function
                  }}
                  className={classNames(
                    item.name === currentNavItem?.name
                      ? "bg-letter text-white"
                      : "text-letter hover:bg-letter hover:text-white",
                    "block rounded-md px-2 py-2 text-base font-medium"
                  )}
                  aria-current={
                    item.name === currentNavItem?.name ? "page" : undefined
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
