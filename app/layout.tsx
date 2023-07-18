import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

export const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Costanet",
  description: "Hacemos clientes felices",
  icons: {
    icon: "/costanet.png",
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
        <header className="relative">
          <Navbar />
        </header>

        {children}
      </body>
    </html>
  );
}
