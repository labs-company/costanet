import Link from "next/link";
import Popupfooter from "@/components/PopupFooter";
export default function FooterWithSocialMediaIcons() {
  return (
    <footer className="bg-footer rounded-none p-0 text-white">
      <div className="w-full">
        <div
          className="grid w-full p-5 relative"
          style={{ gridTemplateColumns: "40% 60%" }}
        >
          <div>
            <div>
              <h2 className="font-bold text-5xl hover:font-light transition-all cursor-pointer mb-5 inline-block">
                COSTANET
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 sm:mt-4 sm:grid-cols-4 sm:gap-4 pl-3">
            <Popupfooter />
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
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2">SERVICIOS</h2>
              <ul>
                <li className="mt-1">
                  <Link
                    href="/servicios"
                    className="hover:underline font-light"
                  >
                    Internet de Fibra Óptica
                  </Link>
                </li>
                <li className="mt-1">
                  <Link href="/pqrs" className="hover:underline font-light">
                    PQR
                  </Link>
                </li>
                <li className="mt-1">
                  <Link href="/pse" className="hover:underline font-light">
                    Pago Seguro en Línea
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2">VELOCIDAD</h2>
              <ul>
                <li>
                  <Link
                    href="/test-de-velocidad"
                    className="hover:underline font-light"
                  >
                    Test de Velocidad
                  </Link>
                </li>
                {/* <li className="flex items-center gap-2 pt-4 pl-4">
                  <a
                    href="https://www.facebook.com/costanetiptv.santaana"
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={facebookIcon}
                      alt="Facebook de CostaNet"
                      className="w-auto h-8"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/costanetsantaana/"
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={instagramIcon}
                      alt="Instagram de CostaNet"
                      className="w-auto h-7 -mt-1"
                    />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="w-full flex md:items-center md:justify-between px-2 gap-2 justify-center flex-col md:flex-row items-center">
            <Link href="/" className="hover:underline text-gray px-2">
              © 2023 CostaNet S.A.S. | Todos los derechos reservados
            </Link>
            <Link
              href="https://github.com/netlabs-team"
              className="hover:underline text-gray"
              target="_blank"
              rel="noopener noreferrer"
            >
              By netnovice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
