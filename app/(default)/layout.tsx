import React from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "LocaFlow - Simplifiez votre gestion locative",
  description: "Plateforme intelligente pour propriétaires, locataires et agences.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex grow flex-col bg-white text-gray-900">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
