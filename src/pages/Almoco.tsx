import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SEOHead from "@/components/SEOHead";
import { breadcrumbStructuredData, menuStructuredData } from "@/data/structuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Utensils, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Almoco = () => {
  const { t } = useLanguage();
  const heroRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const menuRef = useScrollAnimation();

  const menuItems = [
    { name: "Colombo de Frango", description: "Prato tradicional da Martinica com especiarias típicas das Antilhas" },
    { name: "Acras de Bacalhau", description: "Bolinhos crocantes de bacalhau com especiarias caribenhas" },
    { name: "Gratinado de Chayote", description: "Legume tropical gratinado com queijo e ervas aromáticas" },
    { name: "Bokit Bacon & Frango", description: "Sanduíche tradicional das Antilhas com bacon e frango temperado" },
    { name: "Fricassé de Lambis", description: "Caracol do mar preparado no estilo tradicional martinicano" }
  ];

  const structuredData = menuStructuredData("Almoço", menuItems);
  const breadcrumbs = breadcrumbStructuredData([
    { name: "Início", url: "/" },
    { name: "Menu de Almoço", url: "/almoco" }
  ]);

  return (
    <>
      <SEOHead 
        title="Menu de Almoço - Pratos da Martinica | Cozinha das Ilhas Faro"
        description="Descubra o nosso menu de almoço com pratos autênticos da Martinica: Colombo de Frango, Acras de Bacalhau, Bokit e muito mais. Sabores caribenhos em Faro."
        keywords="menu almoço Faro, pratos martinica, colombo frango, acras bacalhau, comida caribenha, gastronomia antilhas, restaurante tropical Faro"
        structuredData={[structuredData, breadcrumbs]}
        canonicalUrl="/almoco"
      />
    <main className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <header 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-primary text-white overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/2ffd30b9-5693-49d0-9b7c-eecda7e9295c.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <img 
          src="/lovable-uploads/2ffd30b9-5693-49d0-9b7c-eecda7e9295c.png" 
          alt="Menu de almoço da Martinica - pratos tradicionais caribenhos no restaurante Cozinha das Ilhas em Faro"
          className="sr-only"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            {t('lunchPage.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {t('lunchPage.subtitle')}
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg rounded-full shadow-glow"
          >
            {t('common.reserveNow')}
          </Button>
        </div>
      </header>

      {/* Description Section */}
      <section ref={contentRef} className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('lunch.sectionTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('lunch.description')}
          </p>
          <div className="flex justify-center items-center gap-4 mb-8">
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Leaf className="h-4 w-4" />
              {t('lunchPage.vegetarianOptions')}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Utensils className="h-4 w-4" />
              {t('lunchPage.veganOptions')}
            </Badge>
          </div>
          <Link to="/menu-completo" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
            {t('common.viewFullMenu')}
          </Link>
        </div>

      </section>

      {/* Menu Sections */}
      <section ref={menuRef} className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Entradas */}
          <div id="appetizers">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">{t('lunch.appetizers')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Salada "Bem Vindos" - €1.50</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">3 Accras de Bacalhau - €3.50</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Farandole de 3 Tostas - €6.50</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pratos Principais */}
          <div id="mains">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">{t('lunch.mains')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Espetada de Frango à Crioula - €14.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Servido com batatas doces fritas receita "Cajun" e salada mista</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Costoletas de Porco - €12.50</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Com batatas fritas e salada mista</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Daurada a Plancha - €15.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/lovable-uploads/2ffd30b9-5693-49d0-9b7c-eecda7e9295c.png"
                    alt="Dourada grelhada com banana caramelizada e arroz"
                    className="w-full h-40 object-cover rounded-lg mb-3"
                    loading="lazy"
                  />
                  <p className="text-muted-foreground">Servido com batatas fritas, arroz e salada</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Espetada de Camarões c/ Chouriço - €15.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Servido com arroz e legumes e salada mista</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bokit Burgers */}
          <div id="bokit">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">{t('lunchPage.bokitBurgers')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Bacon & Frango - €11.50</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Batavia, tomate, cebola & molho creoline. Servido com batatas fritas</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Beef & Queijo - €10.50</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Batavia, tomate, cebola & molho creoline. Servido com batatas fritas</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Camarão & Abacate - €10.50</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Batavia, tomate, cebola & molho creoline. Servido com batatas fritas</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Bacalhau à Creola - €10.50</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Batavia, tomate, cebola & molho creoline. Servido com batatas fritas</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Saladas */}
          <div id="salads">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">{t('lunch.salads')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Frango - €11.50</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Batavia, tomate, cebola, queijo, cenoura & molho de mostarda</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Creola - €12.50</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/lovable-uploads/assiette-creole.jpg"
                    alt="Salada Créola com acras de bacalhau, legumes frescos e pão de queijo"
                    className="w-full h-40 object-cover rounded-lg mb-3"
                    loading="lazy"
                  />
                  <p className="text-muted-foreground">Bolinhas de bacalhau, batavia, tomate, grão de milho, pepino, cenoura, abacate & molho creoline</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Salmão Fumado - €12.50</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Batavia, tomate, pepino, Burrata, curgete grelhada, sésamo assado, azeite & creme balsâmico</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sobremesas */}
          <div id="desserts">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">{t('lunchPage.desserts')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <img 
                    src="/lovable-uploads/7a8d1814-3f62-4a44-bce9-481a257c68e1.png"
                    alt="Pastel de nata artesanal com café expresso"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold text-primary mb-2">Espresso + Pastel Nata - €2.00</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Baba com Rum & Chantilly - €3.10</h3>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Salada de Frutas & Gelado - €4.50</h3>
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

export default Almoco;
