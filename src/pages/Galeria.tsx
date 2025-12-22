import { Camera, Images, UtensilsCrossed, Cake, Sparkles, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { breadcrumbStructuredData } from "@/data/structuredData";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

const Galeria = () => {
  const { t } = useLanguage();
  const headerRef = useScrollAnimation();
  const sectionsRef = useStaggeredScrollAnimation(120);
  const workflowRef = useStaggeredScrollAnimation(120);
  const ctaRef = useScrollAnimation();

  const breadcrumbs = breadcrumbStructuredData([
    { name: "Início", url: "/" },
    { name: t("gallery.title"), url: "/galeria" }
  ]);

  const sections = [
    { icon: Images, title: t("gallery.sections.restaurant.title"), description: t("gallery.sections.restaurant.description"), accent: "from-primary/10 to-secondary/10" },
    { icon: UtensilsCrossed, title: t("gallery.sections.dishes.title"), description: t("gallery.sections.dishes.description"), accent: "from-secondary/10 to-accent/10" },
    { icon: Cake, title: t("gallery.sections.pastry.title"), description: t("gallery.sections.pastry.description"), accent: "from-accent/10 to-primary/10" },
    { icon: Sparkles, title: t("gallery.sections.events.title"), description: t("gallery.sections.events.description"), accent: "from-primary/10 to-secondary/20" }
  ];

  const workflow = [
    { icon: Camera, title: t("gallery.workflow.collect.title"), description: t("gallery.workflow.collect.description"), accent: "from-primary/15 to-accent/15" },
    { icon: Images, title: t("gallery.workflow.organize.title"), description: t("gallery.workflow.organize.description"), accent: "from-secondary/15 to-primary/15" },
    { icon: UtensilsCrossed, title: t("gallery.workflow.linkMenu.title"), description: t("gallery.workflow.linkMenu.description"), accent: "from-accent/15 to-secondary/15" }
  ];

  return (
    <>
      <SEOHead 
        title={`${t("gallery.title")} | Cozinha das Ilhas Faro`}
        description={t("gallery.subtitle")}
        canonicalUrl="/galeria"
        structuredData={breadcrumbs}
      />
      <div className="min-h-screen pt-16">
        {/* Hero */}
        <section ref={headerRef} className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              {t("gallery.title")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t("gallery.subtitle")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {t("gallery.description")}
            </p>
          </div>
        </section>

        {/* Placeholder description */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-tropical-strong">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-primary font-semibold mb-2">
                      {t("gallery.inProgress.title")}
                    </p>
                    <CardTitle className="font-display text-3xl mb-2">
                      {t("gallery.inProgress.heading")}
                    </CardTitle>
                    <p className="text-muted-foreground max-w-3xl">
                      {t("gallery.inProgress.description")} 
                      <span className="font-semibold text-foreground">{t("gallery.inProgress.note")}</span>
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-6 text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                      <Images className="h-6 w-6" />
                    </div>
                    <p className="font-medium text-sm text-muted-foreground">
                      {t("gallery.inProgress.badge")}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Sections overview */}
        <section className="py-10 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {t("gallery.sectionsTitle")}
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {t("gallery.sectionsDescription")}
              </p>
            </div>

            <div ref={sectionsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sections.map((section) => (
                <Card key={section.title} className="shadow-tropical overflow-hidden">
                  <div className={`h-2 w-full bg-gradient-to-r ${section.accent}`} />
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <section.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-display text-xl">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {t("gallery.workflowTitle")}
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {t("gallery.workflowDescription")}
              </p>
            </div>

            <div ref={workflowRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workflow.map((step) => (
                <Card key={step.title} className="shadow-tropical h-full">
                  <div className={`h-2 w-full bg-gradient-to-r ${step.accent}`} />
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary-dark mb-4">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-display text-xl">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-3xl shadow-tropical-strong p-10 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-3">
                {t("gallery.cta.title")}
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                {t("gallery.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-tropical hover:bg-primary-dark text-white font-medium px-8 py-4">
                  <Link to="/contactos">{t("gallery.cta.contact")}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4">
                  <a href="https://www.instagram.com/cozinhadasilhas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Instagram className="h-5 w-5" />
                    {t("gallery.cta.instagram")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Galeria;
