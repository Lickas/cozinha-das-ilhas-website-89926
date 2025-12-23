import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ZoomIn, Users, MapPin, Utensils, Coffee } from "lucide-react";

// LISTA DE FOTOS COM OS NOMES EXATOS QUE ENVIOU
const galleryItems = [
  // --- EQUIPA ---
  { 
    id: 1, 
    name: "A Nossa Equipa", 
    category: "team", 
    src: "images/menu/equipa.jpg", 
    alt: "A equipa fantástica do Cozinha das Ilhas" 
  },

  // --- ESPAÇO ---
  { 
    id: 2, 
    name: "Interior do Restaurante", 
    category: "space", 
    src: "images/menu/interior1.jpg", 
    alt: "Ambiente acolhedor da sala principal" 
  },
  { 
    id: 3, 
    name: "Sala de Jantar", 
    category: "space", 
    src: "images/menu/interior2.jpg", 
    alt: "A nossa sala de jantar" 
  },
  { 
    id: 4, 
    name: "Espaço Exterior", 
    category: "space", 
    src: "images/menu/espacoexterior.jpg", 
    alt: "A nossa esplanada convidativa" 
  },

  // --- PRATOS (ALMOÇO) ---
  { 
    id: 5, 
    name: "Espetada de Frango Cajun", 
    category: "dishes", 
    src: "images/menu/espetada de frango com batatas doces receita Cajun.jpg", 
    alt: "Espetada de frango com batatas doces receita Cajun" 
  },
  { 
    id: 6, 
    name: "Espetada de Camarão", 
    category: "dishes", 
    src: "images/menu/espetadadecamarochouriçocomarrozsalteadocomlegumes.jpg", 
    alt: "Espetada de camarão e chouriço com arroz salteado" 
  },
  { 
    id: 7, 
    name: "Bokit de Frango", 
    category: "dishes", 
    src: "images/menu/Bokitefrangocombatatasdoces.jpeg", 
    alt: "Bokit e frango com batatas doces" 
  },
  { 
    id: 8, 
    name: "Omelete Mista", 
    category: "dishes", 
    src: "images/menu/omelettecombatatasfritasesaladamista.jpg", 
    alt: "Omelete com batatas fritas e salada mista" 
  },
  { 
    id: 9, 
    name: "Salada Creola", 
    category: "dishes", 
    src: "images/menu/saladacreola.jpeg", 
    alt: "Salada fresca e colorida" 
  },

  // --- PASTELARIA & SOBREMESAS ---
  { 
    id: 10, 
    name: "Religieuse", 
    category: "pastry", 
    src: "images/menu/religieuse.jpg", 
    alt: "Clássico da pastelaria francesa" 
  },
  { 
    id: 11, 
    name: "Tarte de Morangos", 
    category: "pastry", 
    src: "images/menu/tartedemorangos.jpg", 
    alt: "Tartelette de morangos frescos" 
  },
  { 
    id: 12, 
    name: "Baba au Rum", 
    category: "pastry", 
    src: "images/menu/Babacomrumechantilly.jpg", 
    alt: "Baba com rum e chantilly" 
  },

  // --- PEQUENO ALMOÇO ---
  { 
    id: 13, 
    name: "English Breakfast", 
    category: "breakfast", 
    src: "images/menu/Englishbreakfast.jpg", 
    alt: "Pequeno almoço completo inglês" 
  },
  { 
    id: 14, 
    name: "Viennoiseries", 
    category: "breakfast", 
    src: "images/menu/capuccinoetviennoiseries.jpg", 
    alt: "Cappuccino e pastelaria folhada" 
  },
  { 
    id: 15, 
    name: "Crepes com Frutos", 
    category: "breakfast", 
    src: "images/menu/crepecomfrutosechantilly.jpg", 
    alt: "Crepe delicioso com frutos e chantilly" 
  },
  { 
    id: 16, 
    name: "Iogurte com Muesli", 
    category: "breakfast", 
    src: "images/menu/yogurtmueslifrutosetmel.jpg", 
    alt: "Iogurte, muesli, frutos e mel" 
  },
];

const Galeria = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const heroRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();

  // Filtra as fotos com base na categoria selecionada
  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <SEOHead 
        title="Galeria - Cozinha das Ilhas | Fotos Reais dos Nossos Pratos"
        description="Veja as fotos reais da nossa equipa, do nosso espaço e dos pratos deliciosos que preparamos para si."
        canonicalUrl="/galeria"
      />
      
      <main className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <header 
          ref={heroRef}
          className="relative h-[50vh] flex items-center justify-center bg-primary text-white overflow-hidden"
        >
          {/* Fundo do Hero usa uma das fotos do interior */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('images/menu/interior1.jpg')` }} 
          />
          <div className="absolute inset-0 bg-black/60" /> 
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
              {t('gallery.title') || 'A Nossa Galeria'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90">
              {t('gallery.subtitle') || 'A nossa casa, a nossa equipa e os nossos sabores.'}
            </p>
          </div>
        </header>

        {/* Filtros */}
        <section ref={galleryRef} className="py-16 px-4 max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-white shadow-md rounded-xl border border-border">
              <Button variant={filter === "all" ? "default" : "ghost"} onClick={() => setFilter("all")}>
                Todos
              </Button>
              <Button variant={filter === "team" ? "default" : "ghost"} onClick={() => setFilter("team")} className="gap-2">
                <Users className="w-4 h-4" /> Equipa
              </Button>
              <Button variant={filter === "space" ? "default" : "ghost"} onClick={() => setFilter("space")} className="gap-2">
                <MapPin className="w-4 h-4" /> Espaço
              </Button>
              <Button variant={filter === "dishes" ? "default" : "ghost"} onClick={() => setFilter("dishes")} className="gap-2">
                <Utensils className="w-4 h-4" /> Pratos
              </Button>
              <Button variant={filter === "pastry" ? "default" : "ghost"} onClick={() => setFilter("pastry")} className="gap-2">
                <Coffee className="w-4 h-4" /> Pastelaria
              </Button>
              <Button variant={filter === "breakfast" ? "default" : "ghost"} onClick={() => setFilter("breakfast")} className="gap-2">
                <Coffee className="w-4 h-4" /> P. Almoço
              </Button>
            </div>
          </div>

          {/* Grid de Fotos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-white rounded-xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={item.src} 
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                      />
                      
                      {/* Overlay com Ícone */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 p-3 rounded-full text-primary shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          <ZoomIn className="w-6 h-6" />
                        </div>
                      </div>
                      
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/95 backdrop-blur shadow-sm text-xs uppercase tracking-wider font-bold">
                          {item.category === 'team' ? 'Equipa' : 
                           item.category === 'space' ? 'Espaço' : 
                           item.category === 'pastry' ? 'Pastelaria' : 
                           item.category === 'breakfast' ? 'P. Almoço' : 'Prato'}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4 text-left">
                      <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                {/* Lightbox (Ecrã Cheio) */}
                <DialogContent className="max-w-6xl w-full bg-transparent border-none shadow-none p-0 flex flex-col items-center justify-center outline-none">
                  <DialogTitle className="sr-only">{item.name}</DialogTitle>
                  <DialogDescription className="sr-only">{item.alt}</DialogDescription>
                  
                  <div className="relative w-auto max-w-full rounded-lg overflow-hidden shadow-2xl bg-black">
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      className="w-auto h-auto max-h-[90vh] object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white text-center">
                      <h2 className="text-2xl font-bold mb-1">{item.name}</h2>
                      <p className="opacity-90">{item.alt}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>Nenhuma foto encontrada nesta categoria.</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Galeria;