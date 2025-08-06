import React from 'react';
import { Sparkles } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

const AccessoriesPage: React.FC = () => {
  const { products, loading, error, getProductsByCategory } = useProducts();
  const accessoryProducts = getProductsByCategory('accessories');

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
          <div className="bg-yellow-100 p-4 rounded-full">
            <Sparkles className="h-10 w-10 text-yellow-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Accessories Collection</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Handcrafted jewelry and accessories that add a touch of elegance to your style. 
          Each piece is carefully made with love and attention to detail.
        </p>
      </div>

      {/* Features Section */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-yellow-50 to-gold-100 p-6 rounded-2xl text-center">
          <div className="bg-white p-3 rounded-full w-fit mx-auto mb-4">
            <Sparkles className="h-6 w-6 text-yellow-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Handmade Quality</h3>
          <p className="text-gray-600 text-sm">Each piece is carefully crafted by hand</p>
        </div>
        <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-2xl text-center">
          <div className="bg-white p-3 rounded-full w-fit mx-auto mb-4">
            <span className="text-pink-600 font-bold">✨</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Premium Materials</h3>
          <p className="text-gray-600 text-sm">Using only the finest materials and gems</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-2xl text-center">
          <div className="bg-white p-3 rounded-full w-fit mx-auto mb-4">
            <span className="text-purple-600 font-bold">💝</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Perfect Gifts</h3>
          <p className="text-gray-600 text-sm">Beautiful packaging for special occasions</p>
        </div>
      </div>

      {/* Products Grid */}
      {accessoryProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No accessories available at the moment.</div>
          <p className="text-gray-400 mt-2">Please check back later for new arrivals!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {accessoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Care Instructions */}
      <div className="mt-16 bg-gradient-to-r from-gray-50 to-pink-50 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Care Instructions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Jewelry Care:</h4>
            <ul className="space-y-1">
              <li>• Store in a dry, cool place</li>
              <li>• Clean gently with soft cloth</li>
              <li>• Avoid contact with perfumes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Chain & Bracelet Care:</h4>
            <ul className="space-y-1">
              <li>• Remove before swimming</li>
              <li>• Handle with care to prevent tangling</li>
              <li>• Clean regularly for best shine</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;