export const restaurantStructuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Cozinha das Ilhas",
  "description": "Restaurante de gastronomia martinicana e pastelaria francesa em Faro. Descubra os sabores únicos da Martinica e a elegância da pastelaria francesa.",
  "url": "https://cozinhadasilhas.com",
  "logo": "https://cozinhadasilhas.com/src/assets/logo.png",
  "image": [
    "https://cozinhadasilhas.com/lovable-uploads/d849a841-5695-466b-abdf-f79b3f3d422c.png",
    "https://cozinhadasilhas.com/lovable-uploads/19b7c887-a360-4ec3-84d9-8cb89fa680d5.png",
    "https://cozinhadasilhas.com/lovable-uploads/assiette-creole.jpg"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Conselheiro Bivar 36",
    "addressLocality": "Faro",
    "postalCode": "8000-252",
    "addressCountry": "PT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.0194,
    "longitude": -7.9322
  },
  "telephone": "+351911759010",
  "email": "virginie.david7@gmail.com",
  "openingHours": [
    "Mo 08:00-19:00",
    "Tu 08:00-19:00", 
    "Th 08:00-19:00",
    "Fr 08:00-19:00",
    "Sa 08:00-19:00",
    "Su 08:00-17:00"
  ],
  "servesCuisine": [
    "Caribbean",
    "French",
    "Martinican"
  ],
  "priceRange": "€€",
  "paymentAccepted": "Cash, Credit Card",
  "currenciesAccepted": "EUR",
  "hasMenu": "https://cozinhadasilhas.com/menu-completo",
  "menu": [
    {
      "@type": "Menu",
      "name": "Pequeno Almoço",
      "url": "https://cozinhadasilhas.com/pequeno-almoco",
      "description": "Croissants frescos, cafés aromáticos e pastelaria francesa"
    },
    {
      "@type": "Menu", 
      "name": "Almoço",
      "url": "https://cozinhadasilhas.com/almoco",
      "description": "Pratos tradicionais da Martinica e especialidades caribenhas"
    },
    {
      "@type": "Menu",
      "name": "Pastelaria",
      "url": "https://cozinhadasilhas.com/pastelaria", 
      "description": "Doces franceses tradicionais e especialidades artesanais"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Maria Silva"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Experiência gastronómica única em Faro! Os pratos da Martinica são autênticos e deliciosos."
    }
  ]
};

export const breadcrumbStructuredData = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://cozinhadasilhas.com${item.url}`
  }))
});

export const menuStructuredData = (menuName: string, items: Array<{name: string, description: string, price?: string}>) => ({
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": `${menuName} - Cozinha das Ilhas`,
  "description": `Menu de ${menuName.toLowerCase()} com especialidades da Martinica e pastelaria francesa`,
  "hasMenuSection": {
    "@type": "MenuSection",
    "name": menuName,
    "hasMenuItem": items.map(item => ({
      "@type": "MenuItem",
      "name": item.name,
      "description": item.description,
      ...(item.price && { "offers": {
        "@type": "Offer",
        "price": item.price,
        "priceCurrency": "EUR"
      }})
    }))
  }
});