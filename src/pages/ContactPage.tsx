import React from 'react';
import { MessageCircle, Mail, MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+94 70 123 4567',
      link: 'https://wa.me/94701234567',
      description: 'Best way to reach us for quick responses'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@romantica.lk',
      link: 'mailto:hello@romantica.lk',
      description: 'For detailed inquiries and custom orders'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Colombo, Sri Lanka',
      link: '#',
      description: 'Island-wide delivery available'
    },
    {
      icon: Clock,
      title: 'Hours',
      value: '9:00 AM - 8:00 PM',
      link: '#',
      description: 'Monday to Saturday'
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@romantica.lk',
      link: 'https://instagram.com/romantica.lk',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'Romantica.lk',
      link: 'https://facebook.com/romantica.lk',
      color: 'bg-blue-600'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="bg-pink-100 p-6 rounded-full">
            <MessageCircle className="h-12 w-12 text-pink-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We'd love to hear from you! Whether you have a question about our products, 
          need help with a custom order, or just want to say hello, we're here to help.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactInfo.map((info) => (
          <div
            key={info.title}
            className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-pink-100"
          >
            <div className="bg-pink-100 p-4 rounded-full w-fit mx-auto mb-4">
              <info.icon className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
            <a
              href={info.link}
              className="text-pink-600 hover:text-pink-700 font-medium block mb-2 transition-colors"
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {info.value}
            </a>
            <p className="text-gray-500 text-sm">{info.description}</p>
          </div>
        ))}
      </div>

      {/* Main CTA Section */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl p-12 text-white text-center mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-rose-100 text-lg mb-8">
            The fastest way to get in touch with us is through WhatsApp. 
            We typically respond within minutes during business hours!
          </p>
          <a
            // href={createGeneralWhatsAppUrl("Hi! I'd like to place an order from Romantica.lk")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-3"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Start WhatsApp Chat</span>
          </a>
        </div>
      </div>

      {/* Social Media */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} hover:shadow-xl text-white p-6 rounded-2xl transition-all duration-300 hover:scale-105 flex flex-col items-center space-y-3 min-w-[160px]`}
            >
              <social.icon className="h-8 w-8" />
              <div className="text-center">
                <div className="font-semibold">{social.name}</div>
                <div className="text-sm opacity-90">{social.handle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">How do I place an order?</h3>
            <p className="text-gray-600 text-sm">
              Simply browse our products and click "Order via WhatsApp" on any item you like. 
              We'll guide you through the rest of the process.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Do you deliver island-wide?</h3>
            <p className="text-gray-600 text-sm">
              Yes! We deliver anywhere in Sri Lanka. Delivery charges may vary based on location.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">How long does custom artwork take?</h3>
            <p className="text-gray-600 text-sm">
              Custom pencil portraits typically take 3-5 business days depending on complexity 
              and our current order volume.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600 text-sm">
              We accept bank transfers, mobile payments, and cash on delivery 
              for orders within Colombo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;