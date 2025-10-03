import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SEOHead from "@/components/SEOHead";
import { breadcrumbStructuredData, menuStructuredData } from "@/data/structuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wheat, ChefHat, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Pastelaria = () => {
  const { t } = useLanguage();
  const heroRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const productsRef = useScrollAnimation();
  const glutenFreeRef = useScrollAnimation();

  const menuItems = [
    { name: "Mil-folhas", description: "Clássico mil-folhas francês com creme pasteleiro" },
    { name: "Tarte de Limão", description: "Tarte de limão tradicional com merengue" },
    { name: "Éclair de Chocolate", description: "Éclair francês recheado com creme e cobertura de chocolate" },
    { name: "Profiteroles", description: "Pequenos choux recheados com creme chantilly" },
    { name: "Tarte Tropicale", description: "Tarte com sabores antilhanos únicos" }
  ];

  const structuredData = menuStructuredData("Pastelaria", menuItems);
  const breadcrumbs = breadcrumbStructuredData([
    { name: "Início", url: "/" },
    { name: "Pastelaria", url: "/pastelaria" }
  ]);

  return (
    <>
      <SEOHead 
        title="Pastelaria Francesa Tradicional | Doces Artesanais | Cozinha das Ilhas Faro"
        description="Delicie-se com a nossa pastelaria francesa: mil-folhas, tarte de limão, éclairs de chocolate e especialidades com toque antilhano. Doces artesanais em Faro."
        keywords="pastelaria francesa Faro, mil-folhas, tarte limão, éclair chocolate, doces franceses, pastelaria artesanal, doçaria Faro, patisserie"
        structuredData={[structuredData, breadcrumbs]}
        canonicalUrl="/pastelaria"
      />
    <main className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <header 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-primary text-white overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/a6da089c-d9f5-4a21-8ca3-fe504f673535.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <img 
          src="/lovable-uploads/a6da089c-d9f5-4a21-8ca3-fe504f673535.png" 
          alt="Pastelaria francesa tradicional - doces artesanais e especialidades francesas no Cozinha das Ilhas em Faro"
          className="sr-only"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            {t('pastryPage.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {t('pastry.subtitle')}
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </header>

      {/* Main Content */}
      <section ref={contentRef} className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('pastry.sectionTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            {t('pastry.description')}
          </p>
          <Link to="/menu-completo" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
            {t('common.viewFullMenu')}
          </Link>
        </div>

        {/* Pastry Display Image */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/9a550b9b-b93c-4e88-98b1-ad72439cc276.png" 
            alt="Vitrine de pastelaria com doces franceses artesanais"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-elegant"
          />
        </div>
      </section>

      {/* Gluten Free Highlight Section */}
      <section ref={glutenFreeRef} className="py-20 px-4 bg-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
              <Wheat className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('pastry.glutenFree')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('pastry.glutenFreeDescription')}
            </p>
            <Badge variant="outline" className="bg-accent/20 text-accent border-accent px-6 py-2 text-lg font-semibold">
              ✨ {t('pastry.glutenFreeCertified')}
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/aeb53870-e021-4436-a550-661670591577.png" 
              alt="Crepe francês artesanal"
              className="w-full h-48 object-cover rounded-lg shadow-elegant"
            />
            <div className="flex flex-col justify-center">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  {t('pastry.glutenFreeItems.cakes')}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  {t('pastry.glutenFreeItems.bread')}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  {t('pastry.glutenFreeItems.cookies')}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  {t('pastry.glutenFreeItems.traditional')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* French Desserts Section */}
      <section ref={productsRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            {t('pastry.homemadeFrenchDesserts')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Religieuse et éclair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">De café ou de chocolate</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Tartelette de morangos</CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Millefeuille</CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Tarte de limão com merengue</CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Cheesecake frutos vermelhos</CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Paris-brest</CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Macarons</CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Cannelés de Bordeaux</CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Foresta Negra</CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Fraisier</CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Baba com rum</CardTitle>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Tarte de maçã</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Pastelaria;