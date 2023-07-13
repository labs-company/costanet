import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <header className="relative">
        <Navbar />
        </header>
        
        {children}
      </body>
    </html>
  );
}
