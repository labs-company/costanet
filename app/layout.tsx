import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonWhatsApp from "@/components/ButtonWhatsapp";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Costanet S.A.S",
  description:
    "Empresa de telecomunicaciones en cesar | Test de velocidad | Costanet | internet fibra optica",
  keywords:
    "internet,fibra,optica, costanet, internet de fibra optica,colombia intenert,colombia,valledupar,cesar,servicios,clientes,net,costa,costanetcolombia",
  robots: "./robots.txt",
  icons: {
    icon: "/costanet.png",
  },
  authors: {
    name: "costanet",
    url: "www.costanetcolombia.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin_sans.className}>
        <header className="fixed top-0 z-50 left-0 right-0">
          <Navbar />
        </header>
        <main className={`mt-14 ${josefin_sans.className}`}>{children}</main>
        <ButtonWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
