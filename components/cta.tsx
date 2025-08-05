import Image from "next/image";
import { PlusIcon, LogInIcon } from "lucide-react";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-gray-200 rounded-3xl py-12 md:py-20 shadow-xl">
          <div className="mx-auto max-w-3xl text-center">
            {/* Titre animé */}
            <h2
              className="text-3xl md:text-4xl font-extrabold animate-[gradient_8s_linear_infinite] bg-[linear-gradient(to_right,#4f46e5,#8b5cf6,#ec4899,#4f46e5)] bg-[length:200%_auto] bg-clip-text text-transparent mb-6"
              data-aos="fade-up"
            >
              Prêt à simplifier votre gestion locative ?
            </h2>

            {/* Sous-titre */}
            <p
              className="text-gray-600 mb-8 text-lg"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              Rejoignez LocaFlow et automatisez vos démarches en quelques clics.
            </p>

            {/* Boutons animés */}
            <div
              className="flex flex-col sm:flex-row justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              {/* Bouton Déposer un bien */}
              <a
                href="/deposer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-500 hover:scale-105 transition-all duration-200 text-center"
              >
                <PlusIcon className="w-4 h-4" />
                Déposer un bien
              </a>

              {/* Bouton Accéder à mon espace */}
              <a
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-indigo-600 px-6 py-3 text-indigo-600 font-semibold hover:bg-indigo-50 hover:scale-105 transition-all duration-200 text-center"
              >
                Accéder à mon espace
                <LogInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
