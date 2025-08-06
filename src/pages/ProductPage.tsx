import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Heart, Share2, Star, Shield, Truck, Clock } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { createWhatsAppUrl } from '../utils/whatsapp';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading } = useProducts();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link
            to="/"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering "${product.name}" (LKR ${product.price.toLocaleString()}) - Quantity: ${quantity}. Could you please provide more details?`;
    window.open(createWhatsAppUrl(product, message), '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const gallery = product.gallery || [product.imageUrl];
  const features = product.features || [
    'Handcrafted with love',
    'Premium quality materials',
    'Perfect for gifting',
    'Carefully packaged'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <Link to="/" className="hover:text-pink-600 transition-colors">Home</Link>
        <span>/</span>
        <Link 
          to={`/${product.category}`} 
          className="hover:text-pink-600 transition-colors capitalize"
        >
          {product.category.replace('-', ' ')}
        </Link>
        <span>/</span>
        <span className="text-gray-800">{product.name}</span>
      </div>

      {/* Back Button */}
      <Link
        to={`/${product.category}`}
        className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to {product.category.replace('-', ' ')}</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl overflow-hidden">
            <img
              src={gallery[selectedImage]}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            {!product.available && (
              <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                <span className="bg-white px-6 py-3 rounded-full text-gray-800 font-medium">
                  Currently Unavailable
                </span>
              </div>
            )}
          </div>
          
          {gallery.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-pink-500 ring-2 ring-pink-200' 
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-800 leading-tight">
                {product.name}
              </h1>
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600 ml-2">(4.9/5)</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.available 
                  ? 'bg-rose-100 text-rose-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {product.available ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="text-4xl font-bold text-pink-600 mb-6">
              LKR {product.price.toLocaleString()}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Features</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity & Order */}
          <div className="border-t border-pink-100 pt-6">
            <div className="flex items-center space-x-4 mb-6">
              <label className="text-sm font-medium text-gray-700">Quantity:</label>
              <div className="flex items-center border border-pink-200 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-pink-600 hover:bg-pink-50 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-pink-200">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-pink-600 hover:bg-pink-50 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppOrder}
                disabled={!product.available}
                className={`flex-1 flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  product.available
                    ? 'bg-rose-500 hover:bg-rose-600 text-white hover:scale-105 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <MessageCircle className="h-5 w-5" />
                <span>Order via WhatsApp</span>
              </button>
              
              <button className="px-6 py-4 border-2 border-pink-200 hover:border-pink-300 text-pink-600 rounded-full font-medium transition-all duration-300 hover:bg-pink-50">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-pink-100">
            <div className="text-center">
              <div className="bg-pink-100 p-3 rounded-full w-fit mx-auto mb-2">
                <Shield className="h-5 w-5 text-pink-600" />
              </div>
              <div className="text-xs text-gray-600">Secure Payment</div>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 p-3 rounded-full w-fit mx-auto mb-2">
                <Truck className="h-5 w-5 text-pink-600" />
              </div>
              <div className="text-xs text-gray-600">Island-wide Delivery</div>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 p-3 rounded-full w-fit mx-auto mb-2">
                <Clock className="h-5 w-5 text-pink-600" />
              </div>
              <div className="text-xs text-gray-600">Quick Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={relatedProduct.imageUrl}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="text-lg font-bold text-pink-600">
                    LKR {relatedProduct.price.toLocaleString()}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;