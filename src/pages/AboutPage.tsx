import React from 'react';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every piece is created with love and dedication to bring joy to your special moments.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We use only the finest materials and techniques to ensure lasting beauty in every creation.'
    },
    {
      icon: Users,
      title: 'Personal Touch',
      description: 'Each item is personally crafted and customized to reflect your unique story and style.'
    },
    {
      icon: Sparkles,
      title: 'Memories',
      description: 'We believe in creating pieces that become treasured memories for years to come.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="bg-pink-100 p-6 rounded-full">
            <Heart className="h-12 w-12 text-pink-600 fill-current" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Romantica</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to Romantica, where art meets emotion and craftsmanship meets creativity. 
          We specialize in creating beautiful, personalized pieces that celebrate life's most precious moments.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Romantica was born from a passion for creating meaningful connections through art and craftsmanship. 
            What started as a small home-based venture has grown into a beloved brand that touches hearts across Sri Lanka.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our founder, inspired by the beauty of human connections and the power of personalized gifts, 
            began creating custom pencil portraits and handcrafted accessories as tokens of love and remembrance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, we continue this tradition with the same dedication to quality, attention to detail, 
            and commitment to making every customer feel special. Each piece tells a story, 
            and we're honored to be part of your most cherished memories.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"
            alt="Romantic setup with roses"
            className="rounded-2xl shadow-xl w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent rounded-2xl"></div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-white p-4 rounded-full w-fit mx-auto mb-4 shadow-lg">
                <value.icon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl p-12 text-white mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <p className="text-pink-100 text-lg">
            A complete range of personalized gifts and handcrafted items
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-fit mx-auto mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Thoughtful Gifts</h3>
            <p className="text-pink-100 text-sm">
              Curated gift boxes and romantic arrangements for all occasions
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-fit mx-auto mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Custom Artworks</h3>
            <p className="text-pink-100 text-sm">
              Personalized pencil portraits and sketches from your favorite photos
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-fit mx-auto mb-4">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Handmade Jewelry</h3>
            <p className="text-pink-100 text-sm">
              Beautiful bracelets, necklaces, and accessories crafted with care
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-br from-pink-50 to-rose-50 p-12 rounded-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Let's Create Something Beautiful Together
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Whether you're looking for the perfect gift, a custom artwork, or a special accessory, 
          we're here to help bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            // href={createGeneralWhatsAppUrl("Hi! I'd like to know more about your services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Chat with Us
          </a>
          <a
            href="/contact"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;