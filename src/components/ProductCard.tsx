import React from 'react';
import { MessageCircle, Heart, Eye } from 'lucide-react';
import { Product } from '../types/Product';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleWhatsAppOrder = () => {
    window.open(createWhatsAppUrl(product), '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="h-4 w-4 text-pink-600" />
        </div>
        {!product.available && (
          <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded-full text-gray-800 font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-pink-600">
            LKR {product.price.toLocaleString()}
          </div>
          
          <div className="flex items-center space-x-2">
            <Link
              to={`/product/${product.id}`}
              className="flex items-center space-x-1 px-3 py-2 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 font-medium transition-all duration-300 hover:scale-105"
            >
              <Eye className="h-4 w-4" />
              <span className="text-sm">View</span>
            </Link>
            <button
              onClick={handleWhatsAppOrder}
              disabled={!product.available}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                product.available
                  ? 'bg-rose-500 hover:bg-rose-600 text-white hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;