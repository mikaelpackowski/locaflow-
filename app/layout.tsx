import "../css/style.css"; // ✅ Chemin correct relatif depuis app/layout.tsx

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "/fonts/nacelle-regular.woff2", // ✅ Chemin depuis dossier public
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/nacelle-semibolditalic.woff2",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-white font-inter text-base text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
