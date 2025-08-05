import Image from "next/image";
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

            {/* Nouveau titre */}
            <h2
              className="text-3xl md:text-4xl font-extrabold animate-[gradient_8s_linear_infinite] bg-[linear-gradient(to_right,#4f46e5,#8b5cf6,#ec4899,#4f46e5)] bg-[length:200%_auto] bg-clip-text text-transparent mb-6"
              data-aos="fade-up"
            >
              Prêt à simplifier votre gestion locative ?
            </h2>

            {/* Sous-titre (optionnel) */}
            <p className="text-gray-600 mb-8 text-lg" data-aos="fade-up" data-aos-delay={200}>
              Rejoignez LocaFlow et automatisez vos démarches en quelques clics.
            </p>

            {/* Bouton principal */}
            <div className="flex justify-center">
              <a
                className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-500 transition-colors duration-200"
                href="#"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                Créer un compte gratuitement
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
