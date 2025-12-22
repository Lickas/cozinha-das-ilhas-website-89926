import { useState } from "react";
import { Menu, X, Facebook, Instagram, MessageCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border shadow-tropical-strong" style={{ backgroundColor: '#5a5550' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img src={logo} alt="Cozinha das Ilhas" className="h-16 w-auto" />
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium text-white hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg transition-all flex items-center gap-2">
                  {t('nav.fullMenu')}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52 bg-white border border-border shadow-tropical-strong rounded-xl z-50">
                <DropdownMenuItem className="p-3">
                  <Link to="/pequeno-almoco" className="w-full font-medium">{t('nav.breakfast')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3">
                  <Link to="/almoco" className="w-full font-medium">{t('nav.lunch')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3">
                  <Link to="/pastelaria" className="w-full font-medium">{t('nav.pastry')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 border-t border-border">
                  <Link to="/menu-completo" className="w-full font-medium text-primary">{t('nav.fullMenu')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/eventos" className="font-medium text-white hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg transition-all">
              {t('nav.events')}
            </Link>
            
            <Link to="/galeria" className="font-medium text-white hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg transition-all">
              {t('nav.gallery')}
            </Link>
            
            <Link to="/sobre-nos" className="font-medium text-white hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg transition-all">
              {t('nav.about')}
            </Link>
            
            <Link to="/rooftop" className="font-medium text-white hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg transition-all">
              {t('nav.rooftop')}
            </Link>
            
            <Link to="/contactos" className="font-medium text-white hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg transition-all">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Social Media Icons - Right Side */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://www.facebook.com/p/Cozinha-das-Ilhas-100083541483648/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-primary hover:bg-primary/10 p-2 rounded-lg transition-all"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/cozinhadasilhas/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-primary hover:bg-primary/10 p-2 rounded-lg transition-all"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=351911759010&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-accent hover:bg-accent/10 p-2 rounded-lg transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-white hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border" style={{ backgroundColor: '#5a5550' }}>
            <div className="flex flex-col space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="justify-start flex items-center gap-2 text-white hover:text-primary">
                    {t('nav.fullMenu')}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-white border border-border shadow-tropical-strong z-50">
                  <DropdownMenuItem>
                    <Link to="/pequeno-almoco" className="w-full" onClick={() => setIsOpen(false)}>
                      {t('nav.breakfast')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/almoco" className="w-full" onClick={() => setIsOpen(false)}>
                      {t('nav.lunch')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/pastelaria" className="w-full" onClick={() => setIsOpen(false)}>
                      {t('nav.pastry')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="border-t border-border">
                    <Link to="/menu-completo" className="w-full text-primary font-medium" onClick={() => setIsOpen(false)}>
                      {t('nav.fullMenu')}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link 
                to="/eventos" 
                className="block px-4 py-2 text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.events')}
              </Link>
              
              <Link 
                to="/galeria" 
                className="block px-4 py-2 text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.gallery')}
              </Link>
              
              <Link 
                to="/sobre-nos" 
                className="block px-4 py-2 text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.about')}
              </Link>
              
              <Link 
                to="/rooftop" 
                className="block px-4 py-2 text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.rooftop')}
              </Link>
              
              <Link 
                to="/contactos" 
                className="block px-4 py-2 text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.contact')}
              </Link>

              {/* Mobile Social Media */}
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-border">
                <a 
                  href="https://www.facebook.com/p/Cozinha-das-Ilhas-100083541483648/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors p-1"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/cozinhadasilhas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors p-1"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://api.whatsapp.com/send/?phone=351911759010&text&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent transition-colors p-1"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
