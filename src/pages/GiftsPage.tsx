import React from 'react';
import { Gift } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

const GiftsPage: React.FC = () => {
  const { products, loading, error, getProductsByCategory } = useProducts();
  const giftProducts = getProductsByCategory('gifts');

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">
          Error loading products: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-pink-100 p-4 rounded-full">
            <Gift className="h-10 w-10 text-pink-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Gifts Collection</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Thoughtfully curated gifts that speak from the heart. Perfect for birthdays, 
          anniversaries, and all your special moments.
        </p>
      </div>

      {/* Products Grid */}
      {giftProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No gifts available at the moment.</div>
          <p className="text-gray-400 mt-2">Please check back later for new arrivals!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {giftProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Bottom CTA */}
      <div className="text-center mt-16 bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Can't Find the Perfect Gift?
        </h3>
        <p className="text-gray-600 mb-6">
          Contact us for custom gift arrangements and personalized recommendations!
        </p>
        <a
          // href={createGeneralWhatsAppUrl("Hi! I need help finding the perfect gift.")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Chat with Us
        </a>
      </div>
    </div>
  );
};

export default GiftsPage;