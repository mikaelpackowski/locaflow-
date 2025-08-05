import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

// Police Inter de Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Police locale Nacelle (dans public/fonts/)
const nacelle = localFont({
  src: [
    {
      path: "/public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "/public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "LocaFlow - Simplifiez votre gestion locative",
  description: "Plateforme intelligente pour propriétaires, locataires et agences.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${nacelle.variable} bg-white font-inter text-base text-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
