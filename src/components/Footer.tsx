import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border mt-20" style={{ backgroundColor: '#5a5550' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="Cozinha das Ilhas" className="h-12 w-auto" />
            <p className="text-white/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/82jJjHB2xEvFfGwu9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  <p>{t('footer.address.line1')}</p>
                  <p>{t('footer.address.line2')}</p>
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+351911759010" 
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  +351 911 75 90 10
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:virginie.david7@gmail.com" 
                  className="text-sm text-white/70 hover:text-primary transition-colors break-all"
                >
                  virginie.david7@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">{t('footer.hours')}</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/70 space-y-1">
                  <p><span className="font-medium text-white">{t('footer.schedule.monTue')}</span> 08:00 - 19:00</p>
                  <p><span className="font-medium text-white">{t('footer.schedule.wed')}</span> <span className="text-destructive">{t('common.closed')}</span></p>
                  <p><span className="font-medium text-white">{t('footer.schedule.thuSat')}</span> 08:00 - 19:00</p>
                  <p><span className="font-medium text-white">{t('footer.schedule.sun')}</span> 08:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">{t('footer.links.title')}</h3>
            <div className="space-y-2">
              <Link to="/contactos" className="block text-sm text-white/70 hover:text-primary transition-colors">
                {t('footer.links.reservations')}
              </Link>
              <a 
                href="https://glovoapp.com/pt/en/faro/cozinha-das-ilhas-fao/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-white/70 hover:text-primary transition-colors"
              >
                {t('common.orderOnGlovo')}
              </a>
              <Link to="/galeria" className="block text-sm text-white/70 hover:text-primary transition-colors">
                {t('nav.gallery')}
              </Link>
              <Link to="/eventos" className="block text-sm text-white/70 hover:text-primary transition-colors">
                {t('nav.events')}
              </Link>
              <Link to="/rooftop" className="block text-sm text-white/70 hover:text-primary transition-colors">
                {t('footer.links.rooftopSoon')}
              </Link>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.facebook.com/p/Cozinha-das-Ilhas-100083541483648/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/cozinhadasilhas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://api.whatsapp.com/send/?phone=351911759010&text&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-white/70">
            © 2025 Cozinha das Ilhas. Todos os direitos reservados.
          </div>
          <div className="text-sm text-white/70">
            Made with <span className="text-destructive">♥</span> by{" "}
            <span className="font-medium text-primary">OxiriaStudios</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
