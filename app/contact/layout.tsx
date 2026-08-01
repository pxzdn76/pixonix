import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contactez-nous | Pixonix",
  description: "Discutez de votre projet de transformation digitale ou de développement logiciel avec les experts Pixonix à Rouen et Paris.",
  openGraph: {
    title: "Contactez-nous | Pixonix",
    description: "Discutez de votre projet avec les experts Pixonix.",
    url: "https://www.pixonix.fr/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contactez-nous | Pixonix",
    description: "Discutez de votre projet avec les experts Pixonix.",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
