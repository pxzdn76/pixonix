"use client";

import React, { useState } from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    project: 'Création d\'un site vitrine B2B',
    message: '',
    _honeypot: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          project: 'Création d\'un site vitrine B2B',
          message: '',
          _honeypot: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Une erreur est survenue.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Problème de connexion au serveur.');
    }
  };

  return (
    <div className="pb-20">
      <section className="pt-24 pb-12 px-6 lg:px-8 max-w-7xl mx-auto text-center animate-fade-in stagger-1">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up stagger-2">
          Démarrons votre <span className="text-primary">Projet</span>
        </h1>
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
          Nous sommes à votre écoute pour analyser vos besoins et concevoir la solution digitale adaptée à vos enjeux métiers.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 animate-slide-up stagger-3">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="glass-panel p-8 rounded-3xl border border-slate-700/50 tech-shadow">
              <h3 className="text-xl font-bold text-white mb-6">Adresse</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPinIcon className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Rouen</h4>

                  </div>
                </div>

              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-700/50 tech-shadow">
              <h3 className="text-xl font-bold text-white mb-6">Coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <EnvelopeIcon className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">contact@pixonix.fr</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <PhoneIcon className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">+33 (0)7 60 49 56 06</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 lg:p-10 rounded-3xl border border-slate-700/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -z-10" />
            
            <h3 className="text-2xl font-bold text-white mb-8">Parlez-nous de votre vision</h3>
            
            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                <h4 className="text-lg font-bold text-green-400 mb-2">Message envoyé avec succès !</h4>
                <p className="text-text-muted text-sm">Notre équipe vous recontactera très prochainement.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-primary font-bold hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users but visible to bots */}
                <input
                  type="text"
                  id="_honeypot"
                  name="_honeypot"
                  value={formData._honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-text-muted mb-2">Prénom *</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-surface border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-text-muted mb-2">Nom *</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-surface border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Dupont"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-muted mb-2">Entreprise</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-surface border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Nom de votre société"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email professionnel *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="jean.dupont@entreprise.fr"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-text-muted mb-2">Nature du projet *</label>
                  <select
                    id="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full bg-surface border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                  >
                    <option>Création d'un site vitrine B2B</option>
                    <option>Développement E-commerce</option>
                    <option>Application Mobile / Métier</option>
                    <option>Architecture Backend / Cloud</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Décrivez brièvement vos objectifs..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="text-sm font-bold text-red-400">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-4 rounded-xl text-bg-dark font-bold transition-colors shadow-lg shadow-primary/25 ${
                    status === 'loading' ? 'bg-primary/50 cursor-not-allowed' : 'bg-primary hover:bg-primary-hover'
                  }`}
                >
                  {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
