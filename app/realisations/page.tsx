import React from 'react';
import { Metadata } from 'next';
import { ArrowTopRightOnSquareIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Nos Réalisations | Pixonix",
  description: "Découvrez comment Pixonix transforme les idées complexes en solutions digitales performantes. Études de cas en ingénierie logicielle et création de sites web B2B.",
  openGraph: {
    title: "Nos Réalisations | Pixonix",
    description: "Découvrez nos études de cas et réalisations en ingénierie logicielle.",
    url: "https://www.pixonix.fr/realisations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Réalisations | Pixonix",
    description: "Découvrez comment Pixonix transforme les idées complexes en solutions performantes.",
  }
};

const cases = [
  {
    id: 1,
    title: "Site Vitrine & Réservation VTC",
    category: "Création Web & SEO",
    challenge: "Créer une présence en ligne professionnelle pour un chauffeur privé indépendant afin d'attirer une clientèle locale et de faciliter les demandes de réservation.",
    solution: "Conception d'un site vitrine sur-mesure optimisé pour le référencement local (SEO), avec un design premium inspirant la confiance et intégrant un formulaire de contact/réservation fluide sur mobile.",
    results: [
      { label: "Visibilité locale", value: "Top 3 Google", icon: <ChartBarIcon className="w-5 h-5 text-primary" /> },
      { label: "Prises de contact", value: "+ 30% / mois", icon: <ArrowTopRightOnSquareIcon className="w-5 h-5 text-primary" /> },
    ]
  },
  {
    id: 2,
    title: "Ingénierie Logicielle & Architecture (Projets d'Entreprise)",
    category: "Expertise Backend & Cloud",
    challenge: "Concevoir, développer et maintenir des applications critiques et robustes à forte charge dans le cadre de mon activité en entreprise (CDI à Paris).",
    solution: "Mise en place d'architectures backend complexes, optimisation des performances, intégration continue et application stricte des bonnes pratiques de qualité logicielle (Clean Code).",
    results: [
      { label: "Stabilité des apps", value: "99.9%", icon: <ClockIcon className="w-5 h-5 text-primary" /> },
      { label: "Dette technique", value: "Réduite", icon: <ChartBarIcon className="w-5 h-5 text-primary" /> },
    ]
  }
];

export default function RealisationsPage() {
  return (
    <div className="pb-20">
      <section className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto text-center animate-fade-in stagger-1">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up stagger-2">
          Transformer l'idée en <span className="text-primary">Réalisation</span>
        </h1>
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto animate-slide-up stagger-3">
          Nos études de cas illustrent comment notre exigence technique se traduit par des résultats mesurables pour nos clients.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 space-y-16 animate-slide-up stagger-3">
        {cases.map((caseStudy) => (
          <div key={caseStudy.id} className="glass-panel rounded-3xl p-8 lg:p-12 border border-slate-700/50 hover:border-slate-600 transition-colors tech-shadow">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <span className="inline-block px-3 py-1 rounded-full bg-surface text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                  {caseStudy.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">{caseStudy.title}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Le Défi</h3>
                    <p className="text-text-body">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">La Solution Pixonix</h3>
                    <p className="text-text-body">{caseStudy.solution}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3 bg-bg-dark/50 rounded-2xl p-6 border border-slate-700/50 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-white mb-6 text-center border-b border-slate-700/50 pb-4">Impact Mesuré</h3>
                <div className="space-y-6">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center flex-shrink-0">
                        {result.icon}
                      </div>
                      <div>
                        <div className="text-sm text-text-muted">{result.label}</div>
                        <div className="text-2xl font-bold text-white">{result.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-8 mt-32 animate-fade-in">
        <div className="bg-gradient-to-r from-surface to-slate-800 rounded-3xl p-10 lg:p-16 text-center border border-slate-700 tech-shadow">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à créer votre success story ?</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Discutons de vos objectifs et voyons comment notre expertise peut propulser votre activité.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-bg-dark font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25"
          >
            Démarrer votre projet
          </a>
        </div>
      </section>
    </div>
  );
}
