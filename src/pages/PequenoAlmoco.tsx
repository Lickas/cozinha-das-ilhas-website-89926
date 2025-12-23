import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SEOHead from "@/components/SEOHead";
import { breadcrumbStructuredData, menuStructuredData } from "@/data/structuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Croissant, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { MenuItem } from "@/components/MenuItem";

const PequenoAlmoco = () => {
  const { t } = useLanguage();
  const heroRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const specialtiesRef = useScrollAnimation();

  const menuItems = [
    { name: "Croissant", description: "Croissant francês tradicional, crocante e amanteigado" },
    { name: "Pain au Chocolat", description: "Massa folhada francesa com chocolate" },
    { name: "English Breakfast", description: "Pequeno almoço completo com beans, bacon, toast, ovos fritos" },
    { name: "Crepes", description: "Crepes franceses com diversos recheios doces" },
    { name: "Smoothies Tropicais", description: "Batidos de frutas tropicais frescos" }
  ];

  const structuredData = menuStructuredData("Pequeno Almoço", menuItems);
  const breadcrumbs = breadcrumbStructuredData([
    { name: "Início", url: "/" },
    { name: "Pequeno Almoço", url: "/pequeno-almoco" }
  ]);

  return (
    <>
      <SEOHead 
        title="Pequeno Almoço Francês | Croissants e Pastelaria | Cozinha das Ilhas Faro"
        description="Comece o dia com o nosso pequeno almoço francês: croissants artesanais, pain au chocolat, café aromático e sumos naturais. Das 8h às 12h em Faro."
        keywords="pequeno almoço Faro, croissant francês, pain au chocolat, café francês, pastelaria manhã, breakfast Faro, padaria francesa"
        structuredData={[structuredData, breadcrumbs]}
        canonicalUrl="/pequeno-almoco"
      />
    <main className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <header 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-primary text-white overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/7a8d1814-3f62-4a44-bce9-481a257c68e1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <img 
          src="/lovable-uploads/7a8d1814-3f62-4a44-bce9-481a257c68e1.png" 
          alt="Pequeno almoço francês - croissants artesanais e café aromático no Cozinha das Ilhas em Faro"
          className="sr-only"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            {t('breakfast.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {t('breakfast.subtitle')}
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </header>

      {/* Main Content */}
      <section ref={contentRef} className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('breakfast.sectionTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            {t('breakfast.description')}
          </p>
          <div className="flex justify-center">
            <Link to="/menu-completo" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
              {t('common.viewFullMenu')}
            </Link>
          </div>
        </div>

      </section>

      {/* Menu Sections */}
      <section ref={specialtiesRef} className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* English Breakfast */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">English Breakfast</h2>
            <Card className="bg-card border-border shadow-elegant max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">English Breakfast - €9.50</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Beans, bacon, toast, fried eggs, sausage, grilled tomato and mushrooms</p>
              </CardContent>
            </Card>
          </div>

          {/* Viennoiseries */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">{t('breakfast.viennoiseries')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Croissant - €1.20</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Chocolatine - €1.50</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Chausson with apples - €1.80</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Pain Suisse - €1.80</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Raisin Bread - €1.80</h3>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Baguette, homemade jam & butter - €2.50</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Croissant, homemade jam & butter - €3.00</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Crepes */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">{t('breakfast.crepes')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Sugar & butter - €2.50</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Lemon & sugar - €3.50</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Jam (strawberry, pineapple, goyava, maracuja) - €3.00</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Nutella - €3.50</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Nutella & banana - €4.50</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Salted caramel & ice-cream - €6.00</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Smoothies */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">{t('breakfast.smoothies')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Tropical Dream - €4.00</h3>
                  <p className="text-muted-foreground text-sm">Mango, Pineapple, Coconut</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Strawberry Samba - €4.00</h3>
                  <p className="text-muted-foreground text-sm">Strawberry, Orange, Banana</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Green Adventure - €4.00</h3>
                  <p className="text-muted-foreground text-sm">Kiwi, Mint, Apple</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Hot Drinks */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">{t('breakfast.hotDrinks')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Espresso/Ristretto - €1.00</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Cappuccino - €3.00</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Latte macchiato - €2.50</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Irish Coffee - €6.50</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Hot Chocolate Chantilly - €3.80</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Various Teas & Infusions - €2.00</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default PequenoAlmoco;