import { Mail, MessageCircle, Heart, Briefcase, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Eventos = () => {
  const { t } = useLanguage();
  const headerRef = useScrollAnimation();
  const mainEventRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section ref={headerRef} className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t('events.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('events.subtitle')}
          </p>
        </div>
      </section>

      {/* Private Restaurant Rental */}
      <section ref={mainEventRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('events.privateRental.title')}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t('events.privateRental.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Family Events */}
            <Card className="shadow-tropical hover:shadow-tropical-strong transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-display text-center">{t('events.family.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  {t('events.family.description')}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Birthday Events */}
            <Card className="shadow-tropical hover:shadow-tropical-strong transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-secondary-dark" />
                </div>
                <CardTitle className="font-display text-center">{t('events.birthday.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  {t('events.birthday.description')}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Work Colleagues */}
            <Card className="shadow-tropical hover:shadow-tropical-strong transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-display text-center">{t('events.work.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  {t('events.work.description')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Contact Options */}
          <div className="bg-card rounded-2xl p-8 shadow-tropical text-center">
            <h3 className="font-display text-2xl font-bold mb-4">
              {t('events.contact.title')}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('events.contact.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-tropical hover:bg-primary-dark text-white font-medium px-8 py-4"
              >
                <a href="mailto:info@cozinhadasilhas.com" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  {t('common.sendEmail')}
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
              >
                <a 
                  href="https://wa.me/351911759010?text=Olá! Gostaria de informações sobre a privatização do restaurante para um evento." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eventos;