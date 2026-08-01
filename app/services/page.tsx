import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  CodeBracketSquareIcon, 
  ShoppingCartIcon, 
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Nos Services | Pixonix - Transformation Digitale Sur-Mesure",
  description: "Découvrez nos solutions sur-mesure pour votre transformation digitale : création de sites vitrines haut de gamme, plateformes e-commerce et applications mobiles.",
  openGraph: {
    title: "Nos Services | Pixonix",
    description: "Solutions digitales sur-mesure : sites vitrines, e-commerce, applications métiers.",
    url: "https://www.pixonix.fr/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Services | Pixonix",
    description: "Solutions digitales sur-mesure : sites vitrines, e-commerce, applications métiers.",
  }
};

const services = [
  {
    id: 'vitrine',
    title: 'Sites Vitrines Sur-Mesure (B2B & B2C)',
    description: 'Que vous soyez un artisan, une startup ou une grande entreprise, votre image en ligne est votre première vitrine. Nous concevons des sites web institutionnels performants, esthétiques et pensés pour convertir vos visiteurs en clients.',
    icon: <CodeBracketSquareIcon className="w-8 h-8" />,
    features: ['Design sur-mesure et immersif', 'SEO Technique intégré', 'Performances Core Web Vitals', 'Adapté à tous les secteurs'],
  },
  {
    id: 'ecommerce',
    title: 'Plateformes E-commerce & Vente en Ligne',
    description: 'Développez votre chiffre d\'affaires avec une boutique en ligne rapide et fiable. Du commerce de détail (B2C) aux catalogues professionnels (B2B), nous créons des expériences d\'achat fluides et sécurisées.',
    icon: <ShoppingCartIcon className="w-8 h-8" />,
    features: ['Boutique évolutive', 'Paiement sécurisé', 'Gestion simplifiée des stocks', 'Optimisation du tunnel d\'achat'],
  },
  {
    id: 'application',
    title: 'Applications Mobiles & Outils Sur-Mesure',
    description: 'Une idée novatrice ou un besoin de digitaliser votre activité ? Nous développons des applications mobiles (iOS/Android) et des logiciels sur-mesure pour vous faire gagner du temps et automatiser votre quotidien.',
    icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
    features: ['Applications iOS & Android', 'Interface intuitive', 'Automatisation des processus', 'Hébergement Cloud performant'],
  }
];

export default function ServicesPage() {
  return (
    <div className="pb-20">
      {/* Header Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center animate-fade-in stagger-1">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up stagger-2">
            L'Ingénierie au service de votre <br className="hidden lg:block" />
            <span className="text-primary">Transformation Digitale</span>
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            De la création de sites vitrines immersifs au développement d'applications métiers complexes, 
            Pixonix transforme vos idées en véritables actifs digitaux, conçus pour la performance et le ROI.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 space-y-24 animate-slide-up stagger-3">
        {services.map((service, index) => (
          <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Content */}
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-surface text-primary rounded-2xl flex items-center justify-center mb-6 border border-slate-700/50 shadow-lg shadow-primary/10">
                {service.icon}
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">{service.title}</h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-text-body font-medium">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors group"
              >
                Discuter de votre projet
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Visual representation */}
            <div className="lg:w-1/2 w-full h-[400px] glass-panel rounded-3xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-surface to-bg-dark opacity-90 z-10" />
               <div className="absolute inset-0 flex items-center justify-center z-20">
                 {/* Decorative background glow */}
                 <div className="absolute w-64 h-64 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors duration-500" />
                 {/* Cloned large icon */}
                 <div className="text-primary/40 group-hover:text-primary/60 transition-all duration-500 group-hover:scale-110 transform">
                   {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-48 h-48' })}
                 </div>
               </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Bottom */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mt-32 animate-fade-in">
        <div className="bg-gradient-to-r from-surface to-slate-800 rounded-3xl p-10 lg:p-16 text-center border border-slate-700 tech-shadow">
          <h2 className="text-3xl font-bold text-white mb-4">Une idée ? Un besoin spécifique ?</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Nous concevons des solutions sur-mesure. Nos architectes logiciels sont à votre disposition pour analyser la faisabilité technique de votre vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-bg-dark font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25"
          >
            Obtenir une consultation gratuite
          </Link>
        </div>
      </section>
    </div>
  );
}
