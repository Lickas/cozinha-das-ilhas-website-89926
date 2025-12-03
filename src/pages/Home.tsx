import { ChefHat, Coffee, Cake, MapPin, Clock, Star, ChevronDown, Gift, Crown, Candy, Wine, Snowflake, Music2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ReservationForm from "@/components/ReservationForm";
import SEOHead from "@/components/SEOHead";
import { restaurantStructuredData } from "@/data/structuredData";
import restaurantInterior from "/lovable-uploads/19b7c887-a360-4ec3-84d9-8cb89fa680d5.png";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  const specialtiesRef = useScrollAnimation({ threshold: 0.2 });
  const cardGridRef = useStaggeredScrollAnimation(200);
  const servicesRef = useStaggeredScrollAnimation(150);
  const ctaRef = useScrollAnimation();

  const showFestiveOffers = true;

  const festiveCards = [
    {
      key: 'buches',
      icon: Gift,
      accent: 'text-primary bg-primary/10',
      title: t('home.festive.buches.title'),
      description: t('home.festive.buches.description'),
      items: [
        t('home.festive.buches.items.butterCream'),
        t('home.festive.buches.items.passion'),
        t('home.festive.buches.items.pear'),
        t('home.festive.buches.items.royal'),
        t('home.festive.buches.items.blackForest'),
        t('home.festive.buches.items.raspberry'),
        t('home.festive.buches.items.chestnut'),
      ],
      prices: [
        t('home.festive.buches.prices.individual'),
        t('home.festive.buches.prices.small'),
        t('home.festive.buches.prices.large'),
      ],
    },
    {
      key: 'galette',
      icon: Crown,
      accent: 'text-secondary-dark bg-secondary/10',
      title: t('home.festive.galette.title'),
      description: t('home.festive.galette.description'),
      items: [
        t('home.festive.galette.variants.almond'),
        t('home.festive.galette.variants.dry'),
        t('home.festive.galette.variants.apple'),
        t('home.festive.galette.variants.flexible'),
      ],
      prices: [
        t('home.festive.galette.prices.one'),
        t('home.festive.galette.prices.three'),
        t('home.festive.galette.prices.five'),
        t('home.festive.galette.prices.eight'),
        t('home.festive.galette.prices.ten'),
      ],
    },
    {
      key: 'gourmandises',
      icon: Candy,
      accent: 'text-amber-700 bg-amber-100/60',
      title: t('home.festive.gourmandises.title'),
      description: t('home.festive.gourmandises.description'),
      items: [
        t('home.festive.gourmandises.items.foie'),
        t('home.festive.gourmandises.items.truffles'),
        t('home.festive.gourmandises.items.orangettes'),
        t('home.festive.gourmandises.items.petitsFours'),
        t('home.festive.gourmandises.items.breads'),
      ],
      prices: [],
    },
    {
      key: 'tasting',
      icon: Wine,
      accent: 'text-accent bg-accent/10',
      title: t('home.festive.tasting.title'),
      description: t('home.festive.tasting.description'),
      items: [t('home.festive.tasting.details')],
      prices: [],
    },
  ];

  const festiveHighlights = [
    {
      icon: Snowflake,
      label: t("home.festive.atmosphere.decor"),
      accent: "from-amber-100 to-amber-50",
    },
    {
      icon: Music2,
      label: t("home.festive.atmosphere.music"),
      accent: "from-primary/10 to-primary/5",
    },
    {
      icon: Sparkles,
      label: t("home.festive.atmosphere.toast"),
      accent: "from-secondary/15 to-secondary/5",
    },
  ];

  const scrollToFestive = () =>
    document.getElementById("festive-offers")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <SEOHead 
        title="Cozinha das Ilhas - Gastronomia da Martinica & Pastelaria Francesa | Faro"
        description="Descubra os sabores únicos da Martinica e a elegância da pastelaria francesa na Cozinha das Ilhas em Faro. Pequeno-almoço e almoço das 8h às 19h."
        keywords="restaurante Faro, gastronomia Martinica, pastelaria francesa, pequeno-almoço, almoço, Cozinha das Ilhas, restaurante caribenho, comida tropical, doces franceses"
        structuredData={restaurantStructuredData}
        canonicalUrl="/"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-24 pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${restaurantInterior})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-white/10 border border-white/15 px-4 py-3 backdrop-blur text-white shadow-tropical">
              <div className="flex items-center gap-2">
                <Snowflake className="h-5 w-5 text-amber-200" />
                <span className="font-medium">{t("home.hero.festiveNotice.message")}</span>
              </div>
              <Button
                size="sm"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={scrollToFestive}
              >
                {t("home.hero.festiveNotice.cta")}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up text-white">
              <div className="space-y-6">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {t('home.hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
                  {t('home.hero.description')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-tropical hover:bg-primary-dark text-white font-medium px-8 py-4 shadow-tropical"
                >
                  <Link to="/contactos">{t('home.hero.reserveButton')}</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
                >
                  <a 
                    href="https://glovoapp.com/pt/en/faro/cozinha-das-ilhas-fao/" 
                    target="_blank" 
                    rel="noopener noreferrer"
>
                      {t('common.orderOnGlovo')}
                    </a>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-white">R. Conselheiro Bivar 36, Faro</span>
                </div>
                <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-white">8h-19h (Qua fechado)</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-4 md:p-8 shadow-tropical-strong float-animation backdrop-blur-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-tropical">
                    <ChefHat className="h-8 w-8 md:h-10 md:w-10 text-primary mb-3 md:mb-4" />
                    <h3 className="font-display font-semibold text-base md:text-lg mb-2 text-foreground">{t('home.features.gastronomy.title')}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{t('home.features.gastronomy.subtitle')}</p>
                  </div>
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-tropical">
                    <Cake className="h-8 w-8 md:h-10 md:w-10 text-secondary-dark mb-3 md:mb-4" />
                    <h3 className="font-display font-semibold text-base md:text-lg mb-2 text-foreground">{t('home.features.pastry.title')}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{t('home.features.pastry.subtitle')}</p>
                  </div>
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-tropical">
                    <Coffee className="h-8 w-8 md:h-10 md:w-10 text-accent mb-3 md:mb-4" />
                    <h3 className="font-display font-semibold text-base md:text-lg mb-2 text-foreground">{t('home.features.breakfast.title')}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{t('home.features.breakfast.subtitle')}</p>
                  </div>
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-tropical">
                    <Star className="h-8 w-8 md:h-10 md:w-10 text-secondary-dark mb-3 md:mb-4" />
                    <h3 className="font-display font-semibold text-base md:text-lg mb-2 text-foreground">{t('home.features.experience.title')}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{t('home.features.experience.subtitle')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToFestive}
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
            aria-label={t("home.hero.festiveNotice.scrollLabel")}
          >
            <span className="text-sm mb-2 group-hover:text-primary transition-colors">{t("home.hero.festiveNotice.scrollLabel")}</span>
            <ChevronDown className="h-6 w-6 group-hover:text-primary transition-colors" />
          </button>
        </div>
      </header>

      {showFestiveOffers && (
        <section id="festive-offers" className="py-16 bg-amber-50/70 border-y border-amber-100/70 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(251,146,60,0.12),transparent_32%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-amber-700 uppercase tracking-[0.08em]">
                  {t('home.festive.deadline')}
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {t('home.festive.title')}
                </h2>
                <p className="text-muted-foreground max-w-3xl text-base">
                  {t('home.festive.subtitle')}
                </p>
                <div className="inline-flex items-center gap-2 bg-white/85 px-4 py-3 rounded-xl border border-amber-100 text-sm text-amber-900 shadow-sm">
                  <Clock className="h-4 w-4 text-amber-700" />
                  <span>{t('home.festive.contact')}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-primary/10 text-primary border-primary/30">
                  {t('home.festive.deadline')}
                </Badge>
                <Button asChild className="bg-primary text-white hover:bg-primary-dark">
                  <Link to="/contactos">{t('home.festive.cta')}</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {festiveHighlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={`${highlight.label}-${index}`}
                    className={`relative overflow-hidden rounded-2xl border border-amber-100/80 bg-gradient-to-br ${highlight.accent} shadow-sm`}
                  >
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
                    <div className="relative flex items-center gap-3 p-4">
                      <span className="inline-flex items-center justify-center rounded-full bg-white shadow px-3 py-2 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-sm font-medium text-foreground">{highlight.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {festiveCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Card key={card.key} className="h-full border-amber-100 shadow-tropical/30 shadow-sm">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-full ${card.accent}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-semibold text-foreground">{card.title}</h3>
                          <p className="text-sm text-muted-foreground">{card.description}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {card.items.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {card.prices.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {card.prices.map((price) => (
                            <Badge
                              key={price}
                              variant="secondary"
                              className="bg-white text-foreground border border-amber-100 shadow-sm"
                            >
                              {price}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* About Our Specialties */}
      <section ref={specialtiesRef} id="specialties" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {t('home.specialties.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('home.about.description')}
            </p>
          </div>

          <div ref={cardGridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Caribbean Cuisine */}
            <Card className="overflow-hidden shadow-tropical-strong hover:shadow-tropical transition-shadow group">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: "url('/lovable-uploads/assiette-creole.jpg')" }}
              >
                <div className="absolute inset-0 bg-primary/20"></div>
                <img 
                  src="/lovable-uploads/assiette-creole.jpg" 
                  alt="Prato típico da Martinica - gastronomia caribenha com especiarias tropicais e ingredientes frescos"
                  className="sr-only"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <ChefHat className="h-8 w-8 text-primary" />
                  <h3 className="font-display text-2xl font-semibold">{t('home.specialties.lunch')}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('home.specialties.lunchDesc')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {t('home.specialties.lunchBullet1')}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {t('home.specialties.lunchBullet2')}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {t('home.specialties.lunchBullet3')}
                  </div>
                </div>
                <Button 
                  asChild
                  className="mt-6 bg-tropical hover:bg-primary-dark text-white"
                >
                  <Link to="/almoco">{t('common.viewFullMenu')}</Link>
                </Button>
              </CardContent>
            </Card>

            {/* French Pastry */}
            <Card className="overflow-hidden shadow-tropical-strong hover:shadow-tropical transition-shadow group">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: "url('/lovable-uploads/9a550b9b-b93c-4e88-98b1-ad72439cc276.png')" }}
              >
                <div className="absolute inset-0 bg-secondary/20"></div>
                <img 
                  src="/lovable-uploads/9a550b9b-b93c-4e88-98b1-ad72439cc276.png" 
                  alt="Pastelaria francesa tradicional - doces refinados e técnicas artesanais francesas"
                  className="sr-only"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Cake className="h-8 w-8 text-secondary-dark" />
                  <h3 className="font-display text-2xl font-semibold">{t('home.specialties.pastry')}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('home.specialties.pastryDesc')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-secondary-dark rounded-full mr-3"></span>
                    {t('home.specialties.pastryBullet1')}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-secondary-dark rounded-full mr-3"></span>
                    {t('home.specialties.pastryBullet2')}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-secondary-dark rounded-full mr-3"></span>
                    {t('home.specialties.pastryBullet3')}
                  </div>
                </div>
                <Button 
                  asChild
                  className="mt-6 bg-sunset hover:bg-secondary-dark text-white"
                >
                  <Link to="/pastelaria">{t('common.viewPastry')}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Opening Hours & Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={servicesRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="shadow-tropical relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: "url('/lovable-uploads/aeb53870-e021-4436-a550-661670591577.png')" }}
              ></div>
              <CardContent className="p-8 text-center relative">
                <Coffee className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold mb-4">{t('home.services.breakfast.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('home.services.breakfast.desc')}
                </p>
                <div className="text-sm font-medium text-primary">{t('home.services.breakfast.time')}</div>
              </CardContent>
            </Card>

            <Card className="shadow-tropical relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: "url('/lovable-uploads/19b7c887-a360-4ec3-84d9-8cb89fa680d5.png')" }}
              ></div>
              <CardContent className="p-8 text-center relative">
                <ChefHat className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold mb-4">{t('home.services.lunch.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('home.services.lunch.desc')}
                </p>
                <div className="text-sm font-medium text-primary">{t('home.services.lunch.time')}</div>
              </CardContent>
            </Card>

            <Card className="shadow-tropical relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-5"
                style={{ backgroundImage: "url('/lovable-uploads/8462ebc1-2ba2-4fd0-8cce-843ea71b1774.png')" }}
              ></div>
              <CardContent className="p-8 text-center relative">
                <Clock className="h-12 w-12 text-secondary-dark mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold mb-4">{t('home.services.hours.title')}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{t('home.services.hours.weekdays1')}</span>
                    <span className="font-medium">8:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('home.services.hours.sunday')}</span>
                    <span className="font-medium">8:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('home.services.hours.wednesday')}</span>
                    <span className="font-medium text-destructive">{t('common.closed')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <ReservationForm />

      {/* Call to Action */}
      <section ref={ctaRef} className="py-20 bg-tropical text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-4"
            >
              <Link to="/contactos">{t('home.cta.reserve')}</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="text-primary hover:bg-white/90 font-medium px-8 py-4"
            >
              <a href="tel:+351911759010">{t('common.callNow')}</a>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;