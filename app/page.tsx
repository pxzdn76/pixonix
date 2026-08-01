import React from 'react';
import Link from 'next/link';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { ServerIcon, CloudIcon, DevicePhoneMobileIcon, ArrowRightIcon,
CodeBracketSquareIcon,ShoppingCartIcon} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10 bg-bg-dark" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[500px] bg-secondary/30 blur-[120px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full mix-blend-screen opacity-60" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-8 animate-fade-in stagger-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Ingénierie Logicielle d'Excellence
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 lg:mb-8 animate-slide-up stagger-2">
            De l'idée à la concrétisation. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block mt-2 lg:mt-4">
              Propulsez votre entreprise.
            </span>
          </h1>

          <p className="mt-6 text-base lg:text-xl leading-relaxed text-text-muted max-w-2xl mx-auto animate-slide-up stagger-3">
            Pixonix transforme vos ambitions en outils digitaux performants : 
            sites web sur-mesure, plateformes e-commerce et applications métiers.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-bg-dark font-bold font-montserrat hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group"
            >
              Démarrer un projet
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/realisations"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface border border-slate-700 hover:bg-surface-hover hover:border-slate-600 transition-all text-white font-semibold flex items-center justify-center"
            >
              Découvrir nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 animate-slide-up stagger-3">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Nos Domaines d'Expertise</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-white">Une ingénierie de précision pour vos défis </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Développement Sur-Mesure"
            description="Besoin d'un site vitrine, d'une boutique en ligne ou d'une application unique ? Nous créons des solutions adaptées à votre vision."
            icon={<CodeBracketSquareIcon />}
          />
          <FeatureCard
            title="Outils & Automatisation"
            description="Gagnez du temps avec des logiciels métiers automatisés. Nous digitalisons vos processus internes pour booster votre productivité."
            icon={<ServerIcon />}
          />
          <FeatureCard
            title="E-Commerce & Performance"
            description="Vendez en ligne efficacement. Nous concevons des plateformes robustes, fluides et optimisées pour transformer vos visiteurs en clients."
            icon={<ShoppingCartIcon />}
          />
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-10 animate-fade-in stagger-2">
        <div className="glass-panel p-8 lg:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-secondary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Pourquoi choisir Pixonix ?</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">01</div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Technologie de Pointe</h4>
              <p className="text-text-muted">Un code propre, robuste et moderne. Nous utilisons les meilleurs outils pour garantir la durabilité et la performance de votre projet.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">02</div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Solution 100% Sur-Mesure</h4>
              <p className="text-text-muted">Pas de solutions "toutes faites". Nous écoutons vos besoins spécifiques pour concevoir un outil qui vous ressemble vraiment.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">03</div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Accompagnement Humain</h4>
              <p className="text-text-muted">Une collaboration transparente et réactive. De la première idée à la mise en ligne, nous sommes vos partenaires de réussite.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carte d'action */}
      <div className="bg-surface rounded-2xl p-8 border border-slate-700 shadow-2xl relative">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 blur-xl rounded-full" />
        <h3 className="text-2xl font-bold mb-4 text-white">Un projet en tête ?</h3>
        <p className="text-text-muted mb-8">Discutons de vos besoins. Nous vous apporterons notre expertise technique pour transformer vos idées en réalité.</p>
        <Link
          href="/contact"
          className="w-full block text-center px-6 py-4 rounded-xl bg-white text-bg-dark font-bold hover:bg-slate-200 transition-colors"
        >
          Parlons-en gratuitement
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
