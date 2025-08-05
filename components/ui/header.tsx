"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []);

  return (
    <>
      <main className="relative flex grow flex-col bg-white text-gray-900">
        <section className="pt-20 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-extrabold leading-tight tracking-tighter mb-4">
                Bienvenue sur <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">LocaFlow</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">Simplifiez la gestion locative : dépôt de bien, recherche de logement, automatisation des démarches.</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
                  Propriétaire
                </button>
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded">
                  Locataire
                </button>
              </div>
            </div>
            <div className="mt-12">
              <video
                className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/real-estate-demo.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéo.
              </video>
            </div>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}
