
export const HeroSection = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Discover Your Perfect Tech
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Curated recommendations based on your preferences. Experience the future of shopping.
        </p>
        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium transition-transform hover:scale-105 active:scale-100">
          Explore Now
        </button>
      </div>
    </div>
  );
};
