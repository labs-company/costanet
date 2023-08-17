"use client";

import { navigation, classNames } from "@/utils/costanet_routes";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

export default function NavbarNavigation() {
  const [currentNavItem, setCurrentNavItem] = useState(
    navigation.find((item) => item.current)
  );
  return (
    <>
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setCurrentNavItem(item)}
            className={classNames(
              item.name === currentNavItem?.name
                ? "text-letter hover:underline"
                : "text-letter hover:underline",
              "rounded-md md:px-3 md:py-2 px-2 py-1 text-center mx-0 text-sm font-medium flex items-center"
            )}
            aria-current={
              item.name === currentNavItem?.name ? "page" : undefined
            }
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
}
