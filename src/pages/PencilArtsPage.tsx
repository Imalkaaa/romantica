import React from 'react';
import { Palette } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

const PencilArtsPage: React.FC = () => {
  const { products, loading, error, getProductsByCategory } = useProducts();
  const artProducts = getProductsByCategory('pencil-arts');

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
          <div className="bg-purple-100 p-4 rounded-full">
            <Palette className="h-10 w-10 text-purple-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Pencil Arts Collection</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Transform your precious memories into timeless pencil artworks. 
          Custom portraits and sketches that capture every detail with artistic precision.
        </p>
      </div>

      {/* Process Section */}
      <div className="mb-16 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl font-bold text-purple-600">1</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Send Your Photo</h3>
            <p className="text-gray-600 text-sm">Share your favorite photo via WhatsApp</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl font-bold text-purple-600">2</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">We Create</h3>
            <p className="text-gray-600 text-sm">Our artist creates your custom pencil artwork</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Delivered</h3>
            <p className="text-gray-600 text-sm">Receive your beautiful artwork at your doorstep</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {artProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No pencil arts available at the moment.</div>
          <p className="text-gray-400 mt-2">Please check back later for new artworks!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Custom Order CTA */}
      <div className="text-center mt-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">
          Want a Custom Pencil Portrait?
        </h3>
        <p className="mb-6 text-purple-100">
          Send us your photo and let us create a beautiful, personalized pencil artwork just for you!
        </p>
        <a
          // href={createGeneralWhatsAppUrl("Hi! I'd like to order a custom pencil portrait. Here's my photo:")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Order Custom Portrait
        </a>
      </div>
    </div>
  );
};

export default PencilArtsPage;