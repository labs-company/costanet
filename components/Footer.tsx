import Image from "next/image";
import facebookIcon from "@/public/redes/facebook.png";
import instagramIcon from "@/public/redes/instagram.png";
import twitterIcon from "@/public/redes/twitter.png";
import Link from "next/link";

export default function FooterWithSocialMediaIcons() {
  return (
    <footer className="bg-footer rounded-none p-0 text-white">
      <div className="w-full">
        <div className="grid w-full justify-between items-center  md:flex md:flex-row md:grid-cols-1 p-5">
          <div>
            <div>
              <h1 className="font-bold text-5xl hover:font-light transition-all cursor-pointer">
                COSTANET
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:mt-4 sm:grid-cols-4 sm:gap-4">
            <div>
              <h2 className="mb-2">ACERCA DE</h2>
              <ul>
                <li className="mt-1">
                  <Link href="/nosotros" className="hover:underline font-light">
                    Nosotros
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    href="/contactos"
                    className="hover:underline font-light"
                  >
                    Sedes
                  </Link>
                </li>
                <li className="mt-1">
                  <Link href="/contacto" className="hover:underline font-light">
                    Contactanos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2">ACERCA DE</h2>
              <ul>
                <li className="mt-1">
                  <Link
                    href="/servicios"
                    className="hover:underline font-light"
                  >
                    Internet FO
                  </Link>
                </li>
                <li className="mt-1">
                  <Link href="/pqrs" className="hover:underline font-light">
                    PQRS
                  </Link>
                </li>
                <li className="mt-1">
                  <Link href="/pse" className="hover:underline font-light">
                    PSE
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2">ACERCA DE</h2>
              <ul>
                <li>
                  <Link
                    href="/test-de-velocidad"
                    className="hover:underline font-light"
                  >
                    Test de velocidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="w-full md:flex md:items-center md:justify-between p-5 gap-y-2 justify-center">
            <Link href="/" className="hover:underline">
              Copyright 2023 CostaNet S.A.S | Todos los derechos reservados
            </Link>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Link href="https://facebook.com" className="cursor-pointer">
                <Image
                  src={facebookIcon}
                  alt="facebook de costanet"
                  className="w-auto h-6"
                />
              </Link>
              <Link href="https://instagram.com" className="cursor-pointer">
                <Image
                  src={instagramIcon}
                  alt="instagram de costanet"
                  className="w-auto h-5"
                />
              </Link>
              <Link href="https://x.com" className="cursor-pointer">
                <Image
                  src={twitterIcon}
                  alt="twitter de costanet"
                  className="w-auto h-5"
                />
              </Link>
            </div>
            <Link
              href="https://github.com/netlabs-team"
              className="py-2 hover:underline"
              target="_blank"
            >
              By netnovice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
