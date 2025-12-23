import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface MenuItemProps {
  name: string;
  description?: string;
  price?: string; // Preço agora é opcional para maior flexibilidade
  manualImage?: string;
}

export const MenuItem = ({ name, description, price, manualImage }: MenuItemProps) => {
  // Cria um "slug" do nome (ex: "Bolo de Chocolate" -> "bolo-de-chocolate")
  const slug = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  const imagePath = manualImage || `/images/menu/${slug}.jpg`;
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col group border-border shadow-elegant">
      {!imageError && (
        <div className="h-48 w-full overflow-hidden bg-gray-100 relative">
             <img 
               src={imagePath} 
               alt={name}
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               onError={() => setImageError(true)}
             />
        </div>
      )}
      
      <CardContent className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-semibold text-lg text-primary mb-2 leading-tight">{name}</h3>
            {price && <span className="font-bold text-primary whitespace-nowrap">{price}</span>}
          </div>
          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};