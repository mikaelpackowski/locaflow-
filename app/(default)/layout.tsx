// app/(default)/layout.tsx

import { ReactNode } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex grow flex-col bg-white text-gray-900">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
