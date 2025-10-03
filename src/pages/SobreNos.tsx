import { Heart, Globe, ChefHat, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { breadcrumbStructuredData } from "@/data/structuredData";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const SobreNos = () => {
  const { t } = useLanguage();
  const headerRef = useScrollAnimation();
  const storyRef = useScrollAnimation({ threshold: 0.2 });
  const valuesCardsRef = useStaggeredScrollAnimation(150);
  const missionRef = useScrollAnimation();
  const teamRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const breadcrumbs = breadcrumbStructuredData([
    { name: "Início", url: "/" },
    { name: "Sobre Nós", url: "/sobre-nos" }
  ]);

  return (
    <>
      <SEOHead 
        title="Sobre Nós | História e Valores | Cozinha das Ilhas Faro"
        description="Conheça a história da Cozinha das Ilhas - restaurante de gastronomia martinicana e pastelaria francesa em Faro. Virginie e Jean-Michel partilham a sua paixão."
        keywords="história restaurante Faro, Virginie Jean-Michel, valores Cozinha das Ilhas, missão restaurante, gastronomia martinicana história"
        structuredData={breadcrumbs}
        canonicalUrl="/sobre-nos"
      />
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section ref={headerRef} className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            {t('about.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            {t('about.introDescription')}
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section ref={storyRef} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-tropical-strong">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-bold mb-4">{t('about.history.title')}</h2>
                <p className="text-lg text-muted-foreground">{t('about.history.subtitle')}</p>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                  {t('about.history.paragraph1')}
                </p>
                
                <p>
                  {t('about.history.paragraph2')}
                </p>
                
                <p>
                  {t('about.history.paragraph3')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div ref={valuesCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-tropical">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-display">{t('about.values.passion.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('about.values.passion.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-tropical">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-display">{t('about.values.tradition.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('about.values.tradition.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-tropical">
              <CardHeader>
                <div className="mx-auto bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <ChefHat className="h-8 w-8 text-secondary-dark" />
                </div>
                <CardTitle className="font-display">{t('about.values.quality.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('about.values.quality.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-tropical">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-display">{t('about.values.excellence.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('about.values.excellence.description')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Missão */}
      <section ref={missionRef} className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                {t('about.mission.title')}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t('about.mission.paragraph1')}
                </p>
                <p>
                  {t('about.mission.paragraph2')}
                </p>
                <p>
                  {t('about.mission.paragraph3')}
                </p>
              </div>
              
              <Button 
                asChild
                size="lg" 
                className="mt-8 bg-tropical hover:bg-primary-dark text-white font-medium px-8 py-4"
              >
                <Link to="/contactos">{t('about.mission.cta')}</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 shadow-tropical-strong">
                <div className="space-y-6">
                  <div className="bg-card rounded-2xl p-6 shadow-tropical">
                    <h3 className="font-display font-semibold text-lg mb-2">{t('about.specialties.martinican.title')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('about.specialties.martinican.description')}
                    </p>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-tropical">
                    <h3 className="font-display font-semibold text-lg mb-2">{t('about.specialties.french.title')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('about.specialties.french.description')}
                    </p>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-tropical">
                    <h3 className="font-display font-semibold text-lg mb-2">{t('about.specialties.fusion.title')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('about.specialties.fusion.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team (Placeholder) */}
      <section ref={teamRef} className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            {t('about.team.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t('about.team.subtitle')}
          </p>
          
          <div className="bg-secondary/20 rounded-2xl p-8">
            <p className="text-muted-foreground mb-6">
              {t('about.team.description')}
            </p>
            <div className="text-center">
              <p className="text-lg font-medium text-foreground mb-2">
                {t('about.team.quote')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('about.team.signature')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t('about.cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-tropical hover:bg-primary-dark text-white font-medium px-8 py-4"
            >
              <Link to="/contactos">{t('common.makeReservation')}</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
            >
              <Link to="/">{t('common.viewMenu')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default SobreNos;