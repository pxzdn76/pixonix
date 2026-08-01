import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "À Propos | Pixonix - Experts en Ingénierie",
  description: "Découvrez l'ADN de Pixonix : des experts en ingénierie logicielle basés à Rouen et Paris, passionnés par la qualité du code et les architectures robustes.",
  openGraph: {
    title: "À Propos | Pixonix",
    description: "Experts en ingénierie logicielle basés à Rouen et Paris.",
    url: "https://www.pixonix.fr/a-propos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos | Pixonix",
    description: "Experts en ingénierie logicielle basés à Rouen et Paris.",
  }
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      <section className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in stagger-1">
        <div className="text-center mb-16 animate-slide-up stagger-2">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            L'Excellence Technique <br className="hidden lg:block" />
            <span className="text-primary">comme standard</span>
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Basée entre Rouen et Paris, Pixonix est née d'une conviction : la véritable transformation digitale nécessite des fondations logicielles irréprochables.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center animate-slide-up stagger-3">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary block rounded-full"></span>
                Notre ADN
              </h2>
              <p className="text-text-muted leading-relaxed">
                Chez Pixonix, nous ne faisons pas de compromis sur la qualité. Nous appliquons les principes stricts de la <strong>Clean Architecture</strong> et du <strong>Software Craftsmanship</strong> à chaque projet. Qu'il s'agisse d'un site vitrine, d'une plateforme e-commerce ou d'un microservice complexe en Java/Spring Boot, notre code est pensé pour être maintenable, testable et évolutif.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary block rounded-full"></span>
                Notre Mission
              </h2>
              <p className="text-text-muted leading-relaxed">
                Faire le pont entre vos idées d'affaires et la réalité technologique. Nous accompagnons les entreprises B2B et B2C dans leur digitalisation en fournissant des solutions sur-mesure qui répondent exactement à leurs besoins métiers, sans friction.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-[500px] rounded-3xl overflow-hidden glass-panel border border-slate-700/50 p-2 relative z-10">
               {/* Illustration */}
               <div className="w-full h-full rounded-2xl bg-surface relative overflow-hidden flex flex-col items-center justify-center text-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark via-surface to-secondary/20" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl font-bold text-primary">{'</>'}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Artisans du Code</h3>
                    <p className="text-text-muted">Passionnés par l'ingénierie et l'innovation continue.</p>
                  </div>
               </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-2xl rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/30 blur-2xl rounded-full -z-10" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 animate-fade-in">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-text-muted text-sm font-semibold uppercase tracking-wider">Années d'Expérience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-text-muted text-sm font-semibold uppercase tracking-wider">Sur-Mesure</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">Rouen</div>
            <div className="text-text-muted text-sm font-semibold uppercase tracking-wider">& Paris</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">0</div>
            <div className="text-text-muted text-sm font-semibold uppercase tracking-wider">Compromis Technique</div>
          </div>
        </div>
      </section>
    </div>
  );
}
