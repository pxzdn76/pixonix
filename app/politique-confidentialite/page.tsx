import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Pixonix",
  description: "Politique de confidentialité et gestion des données personnelles de Pixonix, en conformité avec le RGPD.",
  openGraph: {
    title: "Politique de Confidentialité | Pixonix",
    description: "Politique de confidentialité et gestion des données personnelles.",
    url: "https://www.pixonix.fr/politique-confidentialite",
    type: "website",
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-20">
      <section className="pt-24 pb-12 px-6 lg:px-8 max-w-4xl mx-auto text-center border-b border-slate-800 animate-fade-in stagger-1">
        <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4 text-white animate-slide-up stagger-2">
          Politique de Confidentialité
        </h1>
        <p className="text-text-muted animate-slide-up stagger-3">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-12 prose prose-invert prose-slate animate-slide-up stagger-3">
        <div className="glass-panel p-8 lg:p-12 rounded-3xl border border-slate-700/50">
          
          <h2 className="text-xl font-bold text-white mb-4 mt-0 flex items-center gap-2"><span className="w-6 h-1 bg-primary block rounded-full"></span> 1. Collecte des données</h2>
          <p className="text-text-body mb-8 leading-relaxed">
            Nous collectons les données suivantes via notre formulaire de contact :
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Prénom et Nom</li>
              <li>Adresse email professionnelle</li>
              <li>Nom de l'entreprise (facultatif)</li>
              <li>Données relatives à votre projet</li>
            </ul>
          </p>

          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><span className="w-6 h-1 bg-primary block rounded-full"></span> 2. Utilisation des données</h2>
          <p className="text-text-body mb-8 leading-relaxed">
            Ces données sont exclusivement utilisées pour :
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Répondre à vos demandes de contact et devis</li>
              <li>Vous fournir un accompagnement technique personnalisé</li>
            </ul>
            Vos données ne sont <strong>jamais</strong> revendues ou partagées avec des tiers à des fins commerciales.
          </p>

          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><span className="w-6 h-1 bg-primary block rounded-full"></span> 3. Sécurité des données</h2>
          <p className="text-text-body mb-8 leading-relaxed">
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles (HTTPS, honeypot, sanitisation des entrées) pour protéger vos données contre tout accès non autorisé, altération ou destruction.
          </p>

          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><span className="w-6 h-1 bg-primary block rounded-full"></span> 4. Vos droits (RGPD)</h2>
          <p className="text-text-body mb-8 leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Droit d'accès et de rectification</li>
              <li>Droit à l'effacement ("droit à l'oubli")</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition</li>
            </ul>
            Pour exercer ces droits, vous pouvez nous contacter par email à : <strong>contact@pixonix.fr</strong>.
          </p>

          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><span className="w-6 h-1 bg-primary block rounded-full"></span> 5. Cookies</h2>
          <p className="text-text-body leading-relaxed">
            Notre site utilise uniquement des cookies techniques strictement nécessaires à la navigation et à la sécurité. Aucun cookie de traçage ou de publicité n'est déposé sur votre appareil.
          </p>

        </div>
      </section>
    </div>
  );
}
