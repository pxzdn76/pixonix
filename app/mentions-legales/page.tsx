import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions Légales | Pixonix",
  description: "Mentions légales, politique de confidentialité et conditions générales de Pixonix.",
};

export default function LegalPage() {
  return (
    <div className="pb-20">
      <section className="pt-24 pb-12 px-6 lg:px-8 max-w-4xl mx-auto text-center border-b border-slate-800 animate-fade-in stagger-1">
        <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4 text-white animate-slide-up stagger-2">
          Mentions Légales
        </h1>
        <p className="text-text-muted animate-slide-up stagger-3">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-12 prose prose-invert prose-slate animate-slide-up stagger-3">
        <div className="glass-panel p-8 lg:p-12 rounded-3xl border border-slate-700/50">
          
          <h2 className="text-xl font-bold text-white mb-4 mt-0 flex items-center gap-2"><span className="w-6 h-1 bg-primary block rounded-full"></span> 1. Éditeur du site</h2>
          <p className="text-text-body mb-8 bg-surface p-6 rounded-xl border border-slate-700">
            Le site <strong>pixonix.fr</strong> est édité par la société <strong>Pixonix</strong>.<br/><br/>
            <span className="text-text-muted">Siège social :</span> <span className="text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded font-mono text-sm">À_COMPLÉTER_ADRESSE</span><br/>
            <span className="text-text-muted">RCS :</span> <span className="text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded font-mono text-sm">À_COMPLÉTER_SIRET</span><br/>
            <span className="text-text-muted">Email :</span> contact@pixonix.fr<br/>
            <span className="text-text-muted">Directeur de la publication :</span> <span className="text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded font-mono text-sm">À_COMPLÉTER_NOM_DIRIGEANT</span>
          </p>

          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><span className="w-6 h-1 bg-primary block rounded-full"></span> 2. Hébergement</h2>
          <p className="text-text-body mb-8 bg-surface p-6 rounded-xl border border-slate-700">
            Ce site est hébergé par <span className="text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded font-mono text-sm">À_COMPLÉTER_HÉBERGEUR</span>.<br/><br/>
            <span className="text-text-muted">Adresse de l'hébergeur :</span> <span className="text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded font-mono text-sm">À_COMPLÉTER_ADRESSE_HÉBERGEUR</span>
          </p>

          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><span className="w-6 h-1 bg-primary block rounded-full"></span> 3. Propriété intellectuelle</h2>
          <p className="text-text-body mb-8 leading-relaxed">
            L'ensemble des éléments figurant sur le site pixonix.fr (textes, graphismes, logos, conception architecturale) est protégé par les dispositions du Code de la propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
          </p>

          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><span className="w-6 h-1 bg-primary block rounded-full"></span> 4. Données personnelles et RGPD</h2>
          <p className="text-text-body mb-8 leading-relaxed">
            Dans le cadre de l'utilisation du formulaire de contact, Pixonix est amené à collecter des données personnelles (nom, prénom, email, entreprise). Ces données sont utilisées exclusivement pour répondre à vos demandes commerciales.<br/><br/>
            Conformément à la loi "Informatique et Libertés" et au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Pour exercer ce droit, veuillez nous contacter à : <strong>contact@pixonix.fr</strong>. <br/><br/>
            Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>.
          </p>

          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><span className="w-6 h-1 bg-primary block rounded-full"></span> 5. Cookies</h2>
          <p className="text-text-body leading-relaxed">
            Le site pixonix.fr utilise des cookies techniques strictement nécessaires à son fonctionnement. Nous n'utilisons aucun cookie de ciblage publicitaire sans votre consentement explicite.
          </p>
          
        </div>
      </section>
    </div>
  );
}
