import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ReservationForm from "@/components/ReservationForm";
import SEOHead from "@/components/SEOHead";
import { breadcrumbStructuredData } from "@/data/structuredData";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Contactos = () => {
  const { t } = useLanguage();
  const headerRef = useScrollAnimation();
  const contactCardsRef = useStaggeredScrollAnimation(200);
  const quickContactRef = useScrollAnimation();
  const hoursRef = useScrollAnimation();

  const breadcrumbs = breadcrumbStructuredData([
    { name: "Início", url: "/" },
    { name: "Contactos", url: "/contactos" }
  ]);

  return (
    <>
      <SEOHead 
        title="Contactos e Horários | Cozinha das Ilhas Faro"
        description="Entre em contacto com o Cozinha das Ilhas em Faro. R. Conselheiro Bivar 36, telefone +351 911 75 90 10. Aberto das 8h às 19h, fechado às quartas."
        keywords="contactos restaurante Faro, horários Cozinha das Ilhas, reservas restaurante, telefone +351911759010, R. Conselheiro Bivar 36"
        structuredData={breadcrumbs}
        canonicalUrl="/contactos"
      />
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section ref={headerRef} className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={contactCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Location */}
            <Card className="shadow-tropical hover:shadow-tropical-strong transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{t('contact.location.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="font-medium">R. Conselheiro Bivar 36</p>
                <p className="text-muted-foreground">8000-252 Faro</p>
                <Button 
                  asChild
                  variant="outline" 
                  size="sm" 
                  className="mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <a 
                    href="https://maps.app.goo.gl/82jJjHB2xEvFfGwu9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {t('contact.location.viewMap')}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="shadow-tropical hover:shadow-tropical-strong transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-display text-xl">{t('contact.phone.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="font-medium text-lg">+351 911 75 90 10</p>
                <p className="text-muted-foreground text-sm">{t('contact.phone.description')}</p>
                <Button 
                  asChild
                  variant="outline" 
                  size="sm" 
                  className="mt-4 border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <a href="tel:+351911759010">{t('contact.phone.callNow')}</a>
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="shadow-tropical hover:shadow-tropical-strong transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-secondary-dark" />
                </div>
                <CardTitle className="font-display text-xl">{t('contact.email.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="font-medium break-all">virginie.david7@gmail.com</p>
                <p className="text-muted-foreground text-sm">{t('contact.email.description')}</p>
                <Button 
                  asChild
                  variant="outline" 
                  size="sm" 
                  className="mt-4 border-secondary-dark text-secondary-dark hover:bg-secondary-dark hover:text-white"
                >
                  <a href="mailto:virginie.david7@gmail.com">{t('common.sendEmail')}</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Methods */}
          <div ref={quickContactRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* WhatsApp */}
            <Card className="shadow-tropical-strong">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <MessageCircle className="h-12 w-12 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold mb-2">{t('contact.whatsapp.title')}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t('contact.whatsapp.description')}
                    </p>
                    <Button 
                      asChild
                      className="bg-accent hover:bg-accent-light text-white"
                    >
                      <a 
                        href="https://api.whatsapp.com/send/?phone=351911759010&text=Olá, gostaria de fazer uma reserva na Cozinha das Ilhas&type=phone_number&app_absent=0"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {t('contact.whatsapp.sendMessage')}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Glovo */}
            <Card className="shadow-tropical-strong">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Globe className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold mb-2">{t('contact.glovo.title')}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t('contact.glovo.description')}
                    </p>
                    <Button 
                      asChild
                      className="bg-primary hover:bg-primary-dark text-white"
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section ref={hoursRef} className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-tropical-strong">
            <CardHeader className="text-center">
              <div className="mx-auto bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-secondary-dark" />
              </div>
              <CardTitle className="font-display text-2xl">{t('contact.hours.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-lg">{t('contact.hours.weekdays')}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">{t('contact.hours.monday')}</span>
                      <span className="text-primary font-medium">8:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">{t('contact.hours.tuesday')}</span>
                      <span className="text-primary font-medium">8:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">{t('contact.hours.wednesday')}</span>
                      <span className="text-destructive font-medium">{t('contact.hours.closed')}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">{t('contact.hours.thursday')}</span>
                      <span className="text-primary font-medium">8:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">{t('contact.hours.friday')}</span>
                      <span className="text-primary font-medium">8:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">{t('contact.hours.saturday')}</span>
                      <span className="text-primary font-medium">8:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">{t('contact.hours.sunday')}</span>
                      <span className="text-accent font-medium">8:00 - 17:00</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-lg">{t('contact.services.title')}</h4>
                  <div className="space-y-3">
                <div className="bg-accent/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{t('contact.services.breakfast.title')}</span>
                    <span className="text-accent font-medium">8:00 - 15:00</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.services.breakfast.description')}
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{t('contact.services.lunch.title')}</span>
                    <span className="text-primary font-medium">10:30 - 15:00</span>
                  </div>
                      <p className="text-sm text-muted-foreground">
                        {t('contact.services.lunch.description')}
                      </p>
                    </div>
                    <div className="bg-secondary/20 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{t('contact.services.pastry.title')}</span>
                        <span className="text-secondary-dark font-medium">8:00 - 19:00</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('contact.services.pastry.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reservation Form */}
      <ReservationForm />
    </div>
    </>
  );
};

export default Contactos;