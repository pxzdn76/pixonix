import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4 animate-pulse">404</h1>
        <h2 className="text-3xl font-bold text-white mb-6">Page introuvable</h2>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-bg-dark font-bold hover:bg-primary-hover transition-colors"
        >
          <HomeIcon className="w-5 h-5" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
