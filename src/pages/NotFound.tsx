import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 font-display text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-4">{t('common.notFound')}</p>
        <a href="/" className="text-primary hover:text-primary-dark underline font-medium">
          {t('common.backHome')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
