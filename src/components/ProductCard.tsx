
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

export const ProductCard = ({ id, name, price, rating, image, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 });
    toast.success("Added to cart");
  };

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
        className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button 
          onClick={handleAddToCart}
          className="bg-white text-black px-6 py-2 rounded-full font-medium transform transition-transform duration-300 hover:scale-105 flex items-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </Card>
  );
};
