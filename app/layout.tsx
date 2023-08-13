import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonWhatsApp from "@/components/ButtonWhatsapp";

export const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Costanet | el mejor de fibra de la costa",
  description: "Hacemos clientes felices",
  icons: {
    icon: "/costanet.png",
  },
  authors: {
    name: "costanet",
    url: "costanet.vercel.app",
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
