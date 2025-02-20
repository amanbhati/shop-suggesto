
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 399.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Wearables"
  },
  {
    id: 3,
    name: "Professional Camera Kit",
    price: 1299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    category: "Photography"
  },
  {
    id: 4,
    name: "Laptop Pro 16",
    price: 1999.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    category: "Computers"
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: 159.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
    category: "Audio"
  },
  {
    id: 6,
    name: "Gaming Console Elite",
    price: 499.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128",
    category: "Gaming"
  },
];

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
