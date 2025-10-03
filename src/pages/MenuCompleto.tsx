import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Coffee, Utensils, Cake, Leaf, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MenuCompleto = () => {
  const { t, language, setLanguage } = useLanguage();
  const heroRef = useScrollAnimation();
  const menuRef = useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative bg-gradient-to-br from-primary via-primary-glow to-primary-variant min-h-[60vh] flex items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="flex justify-end mb-4">
            <div className="flex gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-1">
              <Button
                variant={language === 'pt' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('pt')}
                className="text-xs"
              >
                PT
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="text-xs"
              >
                EN
              </Button>
              <Button
                variant={language === 'fr' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('fr')}
                className="text-xs"
              >
                FR
              </Button>
            </div>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('menu.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              {t('menu.hero.subtitle')}
            </p>
          
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
                <Leaf className="h-4 w-4" />
                {t('menu.hero.vegetarianOptions')}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 px-4 py-2 border-white/20 text-white">
                {t('menu.hero.glutenFree')}
              </Badge>
            </div>
            
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              {t('menu.hero.reserveNow')}
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section ref={menuRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {/* Breakfast Section */}
            <AccordionItem value="breakfast" className="border border-border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <Coffee className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">{t('menu.sections.breakfast')}</h3>
                    <p className="text-sm text-muted-foreground">8:00 - 15:00</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-8">
                  {/* English Breakfast */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">{t('menu.breakfast.englishBreakfast.name')}</h4>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-muted-foreground">{t('menu.breakfast.englishBreakfast.description')}</p>
                        <p className="text-lg font-bold text-primary mt-2">€12.00</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Viennoiseries */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">{t('menu.breakfast.viennoiseries.title')}</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.viennoiseries.items.croissant')}</h5>
                          <p className="text-sm font-bold text-primary">€2.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.viennoiseries.items.chocolatine')}</h5>
                          <p className="text-sm font-bold text-primary">€2.80</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.viennoiseries.items.chaussonApples')}</h5>
                          <p className="text-sm font-bold text-primary">€3.00</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.viennoiseries.items.painSuisse')}</h5>
                          <p className="text-sm font-bold text-primary">€3.20</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.viennoiseries.items.raisinBread')}</h5>
                          <p className="text-sm font-bold text-primary">€2.80</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.viennoiseries.items.baguetteJam')}</h5>
                          <p className="text-sm font-bold text-primary">€4.50</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Crepes */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">{t('menu.breakfast.crepes.title')}</h4>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.crepes.items.sugarButter')}</h5>
                          <p className="text-sm font-bold text-primary">€2.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.crepes.items.lemonSugar')}</h5>
                          <p className="text-sm font-bold text-primary">€3.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.crepes.items.jam')}</h5>
                          <p className="text-sm font-bold text-primary">€3.00</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.crepes.items.jamCream')}</h5>
                          <p className="text-sm font-bold text-primary">€4.00</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.crepes.items.nutella')}</h5>
                          <p className="text-sm font-bold text-primary">€3.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.crepes.items.nutellaBanana')}</h5>
                          <p className="text-sm font-bold text-primary">€4.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.crepes.items.fruitsCream')}</h5>
                          <p className="text-sm font-bold text-primary">€4.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.crepes.items.saltedCaramel')}</h5>
                          <p className="text-sm font-bold text-primary">€4.00</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.crepes.items.saltedCaramelIce')}</h5>
                          <p className="text-sm font-bold text-primary">€6.00</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.crepes.items.honeyAlmond')}</h5>
                          <p className="text-sm font-bold text-primary">€4.50</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      <p>{t('menu.breakfast.crepes.addIngredients')}</p>
                      <p>{t('menu.breakfast.crepes.addIceCream')}</p>
                    </div>
                  </div>

                  {/* Smoothies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">{t('menu.breakfast.smoothies.title')}</h4>
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.smoothies.items.tropicalDream.name')}</h5>
                          <p className="text-sm text-muted-foreground">{t('menu.breakfast.smoothies.items.tropicalDream.description')}</p>
                          <p className="text-sm font-bold text-primary">€5.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.smoothies.items.strawberrySamba.name')}</h5>
                          <p className="text-sm text-muted-foreground">{t('menu.breakfast.smoothies.items.strawberrySamba.description')}</p>
                          <p className="text-sm font-bold text-primary">€5.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.smoothies.items.greenAdventure.name')}</h5>
                          <p className="text-sm text-muted-foreground">{t('menu.breakfast.smoothies.items.greenAdventure.description')}</p>
                          <p className="text-sm font-bold text-primary">€5.50</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Hot Drinks */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">{t('menu.breakfast.hotDrinks.title')}</h4>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.hotDrinks.items.espresso')}</h5>
                          <p className="text-sm font-bold text-primary">€1.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.hotDrinks.items.americano')}</h5>
                          <p className="text-sm font-bold text-primary">€2.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.hotDrinks.items.capuccino')}</h5>
                          <p className="text-sm font-bold text-primary">€2.80</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.breakfast.hotDrinks.items.hotChocolate')}</h5>
                          <p className="text-sm font-bold text-primary">€3.50</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      <p>{t('menu.breakfast.hotDrinks.addMilk')}</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Lunch Section */}
            <AccordionItem value="lunch" className="border border-border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <Utensils className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">{t('menu.sections.lunch')}</h3>
                    <p className="text-sm text-muted-foreground">10:30 - 15:00</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-8">
                  {/* Starters */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">{t('menu.lunch.starters.title')}</h4>
                    <div className="grid gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.lunch.starters.items.saladaBemVindos')}</h5>
                          <p className="text-sm font-bold text-primary">€6.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.lunch.starters.items.accrasBacalhau')}</h5>
                          <p className="text-sm font-bold text-primary">€5.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.lunch.starters.items.farandoleTostas')}</h5>
                          <p className="text-sm font-bold text-primary">€7.00</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Main Dishes */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">{t('menu.lunch.mains.title')}</h4>
                    <div className="grid gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.lunch.mains.items.espetadaFrango.name')}</h5>
                          <p className="text-sm text-muted-foreground">{t('menu.lunch.mains.items.espetadaFrango.description')}</p>
                          <p className="text-sm font-bold text-primary">€15.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.lunch.mains.items.costeletasPorco.name')}</h5>
                          <p className="text-sm text-muted-foreground">{t('menu.lunch.mains.items.costeletasPorco.description')}</p>
                          <p className="text-sm font-bold text-primary">€14.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.lunch.mains.items.dauradaPlancha.name')}</h5>
                          <p className="text-sm text-muted-foreground">{t('menu.lunch.mains.items.dauradaPlancha.description')}</p>
                          <p className="text-sm font-bold text-primary">€18.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.lunch.mains.items.espetadaCamarao.name')}</h5>
                          <p className="text-sm text-muted-foreground">{t('menu.lunch.mains.items.espetadaCamarao.description')}</p>
                          <p className="text-sm font-bold text-primary">€17.50</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Salads */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">{t('menu.lunch.salads.title')}</h4>
                    <div className="grid gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.lunch.salads.items.frango.name')}</h5>
                          <p className="text-sm text-muted-foreground">{t('menu.lunch.salads.items.frango.description')}</p>
                          <p className="text-sm font-bold text-primary">€12.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.lunch.salads.items.creola.name')}</h5>
                          <p className="text-sm text-muted-foreground">{t('menu.lunch.salads.items.creola.description')}</p>
                          <p className="text-sm font-bold text-primary">€13.50</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h5 className="font-medium">{t('menu.lunch.salads.items.salmaoFumado.name')}</h5>
                          <p className="text-sm text-muted-foreground">{t('menu.lunch.salads.items.salmaoFumado.description')}</p>
                          <p className="text-sm font-bold text-primary">€15.50</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* French Desserts Section */}
            <AccordionItem value="desserts" className="border border-border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <Cake className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">{t('menu.sections.desserts')}</h3>
                    <p className="text-sm text-muted-foreground">8:00 - 18:00</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold">{t('menu.frenchDesserts.title')}</h4>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium">{t('menu.frenchDesserts.items.millefeuille')}</h5>
                        <p className="text-sm font-bold text-primary">€4.50</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium">{t('menu.frenchDesserts.items.tarteLimao')}</h5>
                        <p className="text-sm font-bold text-primary">€4.00</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium">{t('menu.frenchDesserts.items.cheesecakeFrutos')}</h5>
                        <p className="text-sm font-bold text-primary">€5.00</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium">{t('menu.frenchDesserts.items.parisBrest')}</h5>
                        <p className="text-sm font-bold text-primary">€4.50</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium">{t('menu.frenchDesserts.items.macarons')}</h5>
                        <p className="text-sm font-bold text-primary">€2.50</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium">{t('menu.frenchDesserts.items.canneles')}</h5>
                        <p className="text-sm font-bold text-primary">€3.50</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium">{t('menu.frenchDesserts.items.forestaNegra')}</h5>
                        <p className="text-sm font-bold text-primary">€5.50</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium">{t('menu.frenchDesserts.items.fraisier')}</h5>
                        <p className="text-sm font-bold text-primary">€5.00</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium">{t('menu.frenchDesserts.items.babaRum')}</h5>
                        <p className="text-sm font-bold text-primary">€4.50</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default MenuCompleto;