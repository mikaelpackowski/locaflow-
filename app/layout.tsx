import "@/app/css/style.css"; // CSS

import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "/fonts/nacelle-regular.woff2",
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
