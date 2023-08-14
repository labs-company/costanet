import Image from "next/image";
import Link from "next/link";
import logo_cn from "@/public/logos/costanet_desktop.png";
import DisclosureNavbar from "./DisclosureNavbar";
import NavbarNavigation from "./NavbarNavigation";

export default function Navbar() {
  return (
    <nav className="bg-navbar">
      <>
        <div className="w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <DisclosureNavbar />
            <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between sm:flex-col lg:flex-row p-5">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <Image
                    src={logo_cn}
                    alt="costanetLogo costanet internet colombiano | costanet CoStaNet internet fibra"
                    className="h-12 w-auto"
                  />
                </Link>
                {/* <Link href="/">
                  <Image
                    src={logo_cn}
                    alt="costanet internet mobile | casa servicios | costanet net"
                    className="hidden h-12 w-auto lg:block"
                  />
                </Link> */}
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <NavbarNavigation />
              </div>
            </div>
          </div>
        </div>
      </>
    </nav>
  );
}
