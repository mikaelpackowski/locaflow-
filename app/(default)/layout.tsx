// app/(default)/layout.tsx
import type { ReactNode } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <main className="relative flex grow flex-col bg-white text-gray-900">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
