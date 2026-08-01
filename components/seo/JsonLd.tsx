import React from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Pixonix",
    "image": "https://www.pixonix.fr/logo.png",
    "@id": "https://www.pixonix.fr",
    "url": "https://www.pixonix.fr",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Rouen",
        "addressLocality": "Rouen",
        "postalCode": "76000",
        "addressCountry": "FR"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Paris",
        "addressLocality": "Paris",
        "postalCode": "75000",
        "addressCountry": "FR"
      }
    ],
    "description": "Entreprise spécialisée en ingénierie logicielle, architecture Cloud-Native, et développement backend robuste (Java/Spring Boot).",
    "areaServed": ["Paris", "Rouen", "France", "Europe"],
    "priceRange": "$$$"
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pixonix",
    "url": "https://www.pixonix.fr",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.pixonix.fr/recherche?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <JsonLd data={data} />
      <JsonLd data={websiteData} />
    </>
  );
}
