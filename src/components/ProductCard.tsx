
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

export const ProductCard = ({ name, price, rating, image, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl animate-fade-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="text-xs text-muted-foreground mb-2">{category}</div>
        <h3 className="font-medium text-lg mb-2 line-clamp-1">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">${price}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{rating}</span>
          </div>
        </div>
      </div>
      <div
        className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium transform transition-transform duration-300 hover:scale-105">
          Quick View
        </button>
      </div>
    </Card>
  );
};
