import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixonix | Ingénierie Digitale & Solutions Web Haute Performance",
  description: "Partenaire technologique des entreprises ambitieuses. Pixonix architecte et développe des plateformes corporate, écosystèmes e-commerce et applications métiers sur-mesure. Experts basés à Rouen et Paris.",
  keywords: "ingénierie digitale, architecture web, développement sur-mesure, applications métiers, plateformes e-commerce, transformation numérique, agence tech, Rouen, Paris",
  metadataBase: new URL('https://www.pixonix.fr'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pixonix | Ingénierie Digitale & Solutions Web Sur-Mesure",
    description: "Écosystèmes digitaux robustes et applications métiers pour accélérer votre croissance. Cabinet d'ingénierie basé à Rouen et Paris.",
    url: "https://www.pixonix.fr",
    siteName: "Pixonix",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixonix - Ingénierie Digitale & Architecture Web',
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-dark text-text-body font-inter selection:bg-primary/30 selection:text-white">
        <OrganizationJsonLd />
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        {/* Footer */}
        <footer className="bg-bg-dark border-t border-slate-800 mt-20 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-montserrat">Pixonix</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Cabinet d'ingénierie technologique. Nous concevons des écosystèmes digitaux robustes et des expériences web haute performance.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><a href="/" className="hover:text-primary transition-colors">Accueil</a></li>
                <li><a href="/expertise" className="hover:text-primary transition-colors">Notre Expertise</a></li>
                <li><a href="/a-propos" className="hover:text-primary transition-colors">Le Cabinet</a></li>
                <li><a href="/etudes-de-cas" className="hover:text-primary transition-colors">Études de Cas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><a href="/expertise#plateformes-corporate" className="hover:text-primary transition-colors">Plateformes Corporate</a></li>
                <li><a href="/expertise#commerce-digital" className="hover:text-primary transition-colors">Commerce Digital</a></li>
                <li><a href="/expertise#applications-metiers" className="hover:text-primary transition-colors">Applications Métiers & SaaS</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><a href="/contact" className="hover:text-primary transition-colors">Nous Contacter</a></li>
                <li><a href="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</a></li>
                <li><a href="/politique-confidentialite" className="hover:text-primary transition-colors">Confidentialité</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Pixonix. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
