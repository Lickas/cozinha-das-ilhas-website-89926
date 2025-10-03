import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object;
  canonicalUrl?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords = "restaurante Faro, gastronomia Martinica, pastelaria francesa, pequeno-almoço, almoço, Cozinha das Ilhas",
  ogImage = "/lovable-uploads/d849a841-5695-466b-abdf-f79b3f3d422c.png",
  structuredData,
  canonicalUrl
}: SEOHeadProps) => {
  const fullTitle = title.includes('Cozinha das Ilhas') ? title : `${title} | Cozinha das Ilhas`;
  const siteUrl = "https://cozinhadasilhas.com";
  const currentUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Cozinha das Ilhas" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pt-PT" />
      <meta name="geo.region" content="PT-08" />
      <meta name="geo.placename" content="Faro" />
      <meta name="geo.position" content="37.0194;-7.9322" />
      <meta name="ICBM" content="37.0194, -7.9322" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="restaurant" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:alt" content="Cozinha das Ilhas - Restaurante de gastronomia martinicana e pastelaria francesa em Faro" />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:site_name" content="Cozinha das Ilhas" />
      <meta property="business:contact_data:street_address" content="R. Conselheiro Bivar 36" />
      <meta property="business:contact_data:locality" content="Faro" />
      <meta property="business:contact_data:postal_code" content="8000-252" />
      <meta property="business:contact_data:country_name" content="Portugal" />
      <meta property="business:contact_data:phone_number" content="+351911759010" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content="Cozinha das Ilhas - Restaurante de gastronomia martinicana e pastelaria francesa em Faro" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;