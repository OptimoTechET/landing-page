export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OptimoTech",
    "url": "https://optimotech.et",
    "logo": "https://optimotech.et/logo.png",
    "description": "Architecting Digital Infrastructure and Systems Excellence.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Addis Ababa",
      "addressCountry": "Ethiopia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales and Inquiries",
      "email": "operations@optimotech.et",
      "url": "https://optimotech.et/contact"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OptimoTech",
    "url": "https://optimotech.et",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://optimotech.et/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, websiteSchema]),
      }}
    />
  );
}
