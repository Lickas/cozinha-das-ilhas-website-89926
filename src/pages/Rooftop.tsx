import { Calendar, Star, Sunrise } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Rooftop = () => {
  const { t } = useLanguage();
  const heroRef = useScrollAnimation();
  const expectationsSectionRef = useScrollAnimation();
  const cardsRef = useStaggeredScrollAnimation(150);
  const contactSectionRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/8462ebc1-2ba2-4fd0-8cce-843ea71b1774.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-secondary/20 text-secondary-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="h-4 w-4" />
            <span>{t('rooftop.spring2026')}</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            {t('rooftopPage.title')}
            <br />
            <span className="bg-tropical bg-clip-text text-transparent">{t('rooftop.comingSoon')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            {t('rooftop.subtitle')}
          </p>

          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-tropical-strong inline-block">
            <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
              {t('rooftop.spring2026')}
            </div>
            <div className="text-muted-foreground">
              {t('rooftop.openingEstimate')}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section ref={expectationsSectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {t('rooftop.whatToExpect')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('rooftop.whatToExpectDescription')}
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-tropical hover:shadow-tropical-strong transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-display">{t('rooftop.views')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('rooftop.viewsDesc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-tropical hover:shadow-tropical-strong transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Sunrise className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-display">{t('rooftop.ambiance')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('rooftop.ambianceDesc')}
                </CardDescription>
              </CardContent>
            </Card>


            <Card className="text-center shadow-tropical hover:shadow-tropical-strong transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-display">{t('rooftop.events')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('rooftop.eventsDesc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Stay Updated */}
      <section ref={contactSectionRef} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            {t('rooftop.stayUpdated')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t('rooftop.updatesDesc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-tropical hover:bg-primary-dark text-white font-medium px-8 py-4"
            >
              <Link to="/contactos">{t('rooftop.contactUs')}</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
            >
              <a 
                href="https://www.instagram.com/cozinhadasilhas/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('rooftop.followInstagram')}
              </a>
            </Button>
          </div>

          <div className="mt-12 bg-secondary/20 rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold mb-4">
              {t('rooftop.privateEvents')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('rooftop.privateEventsDesc')}
            </p>
            <Button 
              asChild
              variant="outline"
              className="border-secondary-dark text-secondary-dark hover:bg-secondary-dark hover:text-white"
            >
              <a href="mailto:virginie.david7@gmail.com?subject=Interesse no Rooftop - Eventos Privados">
                {t('rooftop.learnMore')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooftop;