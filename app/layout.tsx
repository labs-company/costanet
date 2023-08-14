import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonWhatsApp from "@/components/ButtonWhatsapp";

export const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Costanet costanet | El mejor de fibra de la costa",
  description: "Costanet costanet | Hacemos clientes felices",
  applicationName: "costanet servicio de internet",
  keywords: [
    "costanet",
    "internet",
    "fibra",
    "optica",
    "internet de fibra optica",
    "colombia intenert",
    "colombia",
    "valledupar",
    "cesar",
    "servicios",
    "clientes",
    "net",
    "costa",
  ],
  robots: "/robots.txt",
  icons: {
    icon: "/costanet.png",
  },
  authors: {
    name: "costanet",

    url: "https://costanet.vercel.app",
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
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        {children}
        <ButtonWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
