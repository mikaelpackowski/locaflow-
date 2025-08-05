import type { ReactNode } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main className="relative flex grow flex-col bg-white text-gray-900">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
