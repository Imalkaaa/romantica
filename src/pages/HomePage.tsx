import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Palette, Gift, Sparkles, Quote } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const { products, loading } = useProducts();
  const featuredProducts = products.slice(0, 3);

  const categories = [
    {
      name: 'Gifts',
      path: '/gifts',
      icon: Gift,
      description: 'Thoughtful gifts for your loved ones',
      bgColor: 'bg-gradient-to-br from-pink-100 to-rose-200',
      iconColor: 'text-pink-600'
    },
    {
      name: 'Pencil Arts',
      path: '/pencil-arts',
      icon: Palette,
      description: 'Custom portraits and artwork',
      bgColor: 'bg-gradient-to-br from-purple-100 to-pink-200',
      iconColor: 'text-purple-600'
    },
    {
      name: 'Accessories',
      path: '/accessories',
      icon: Sparkles,
      description: 'Handmade jewelry and accessories',
      bgColor: 'bg-gradient-to-br from-gold-100 to-yellow-200',
      iconColor: 'text-yellow-600'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Bride-to-be',
      content: 'The custom portrait of my fiancé and I was absolutely stunning. It captured our essence perfectly and now hangs proudly in our home. The attention to detail was remarkable!',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Anniversary Gift',
      content: 'I ordered the personalized jewelry for our 10th anniversary and my wife was moved to tears. The craftsmanship exceeded all expectations. Will definitely be ordering again!',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Wedding Planner',
      content: 'I regularly source gifts from Romantica for my clients. The quality is consistently exceptional, and the personalized touches make each piece truly special.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="space-y-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 via-rose-50 to-pink-100 py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse",
                duration: 4 
              }}
              className="flex justify-center mb-8"
            >
              <div className="bg-white p-5 rounded-full shadow-lg transform transition-all duration-500 hover:rotate-12">
                <Heart className="h-14 w-14 text-pink-600 fill-current" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight"
            >
              Welcome to{' '}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Romantica
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              Discover beautiful handcrafted gifts, personalized pencil artworks, and elegant accessories 
              that create lasting memories for your special moments.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/gifts"
                className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-5 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="h-5 w-5" />
                Shop Now
              </Link>
              <Link
                to="/about"
                className="bg-white hover:bg-gray-50 text-pink-600 px-10 py-5 rounded-full font-medium transition-all duration-300 border-2 border-pink-600 hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                <Palette className="h-5 w-5" />
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our carefully curated collection of gifts, artwork, and accessories
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div key={category.path} variants={item}>
              <Link to={category.path} className="group block">
                <div className={`${category.bgColor} p-10 rounded-3xl text-center hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col items-center justify-center`}>
                  <div className="bg-white p-5 rounded-full w-fit mx-auto mb-6 shadow-lg transform transition-all duration-500 group-hover:rotate-12">
                    <category.icon className={`h-10 w-10 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  <span className="text-pink-600 font-medium flex items-center gap-1 mt-auto">
                    Explore
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Creations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our most popular and beautiful handcrafted pieces
          </p>
        </motion.div>
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {featuredProducts.map((product, index) => (
              <motion.div key={product.id} variants={item} custom={index}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/gifts"
            className="inline-flex items-center bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-12 py-4 rounded-full font-medium transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Discover All Collections
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center bg-white p-3 rounded-full shadow-md mb-6">
              <Quote className="h-8 w-8 text-pink-600 rotate-180" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Loved by Our Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hear what our cherished customers say about their Romantica experiences
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={item}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="bg-gradient-to-r from-pink-200 to-rose-200 p-1 rounded-full mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=ffd6e7&color=fff`;
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-pink-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/testimonials"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-all duration-300 group"
            >
              Read more testimonials
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://uploads-ssl.webflow.com/5f3b2a0a5b2b7c09a9a9b5b5/5f3b2a0a5b2b7c09a9a9b5b6_5f3b2a0a5b2b7c09a9a9b5b7_pattern.svg')] bg-repeat"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Craft Your Perfect Gift
            </h2>
            <p className="text-pink-100 text-xl mb-10 leading-relaxed">
              Whether it's a custom portrait, a thoughtful gift, or a beautiful accessory, 
              we're here to help you create memories that last forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-pink-600 px-12 py-5 rounded-full font-medium transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Heart className="h-5 w-5" />
                Get in Touch
              </Link>
              <Link
                to="/custom-orders"
                className="bg-transparent hover:bg-pink-700 text-white px-12 py-5 rounded-full font-medium transition-all duration-500 hover:scale-105 border-2 border-white hover:border-pink-700 flex items-center justify-center gap-2"
              >
                <Palette className="h-5 w-5" />
                Custom Order
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;