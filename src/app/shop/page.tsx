'use client';

import Link from 'next/link';
import { useState } from 'react';

// Define furniture categories
const categories = [
  {
    id: 'turkish-doors',
    name: 'Turkish Doors',
    image: '/images/categories/turkish-doors.jpg',
    description: 'Premium handcrafted Turkish doors with intricate designs'
  },
  {
    id: 'mattresses',
    name: 'Luxury Mattresses',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
    description: 'High-quality mattresses for the perfect night\'s sleep'
  },
  {
    id: 'sofas',
    name: 'Modern Sofas',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
    description: 'Contemporary sofas that combine style and comfort'
  },
  {
    id: 'chandeliers',
    name: 'Elegant Chandeliers',
    image: '/images/categories/chandeliers.jpg',
    description: 'Stunning chandeliers to illuminate your space with sophistication'
  },
  {
    id: 'decor',
    name: 'Interior Decor',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop',
    description: 'Elegant accessories to complete your home\'s aesthetic'
  }
];

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-80 md:h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2080&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
          <div className="text-white px-6 md:px-12 lg:px-16 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">Shop Our Collections</h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-90">Discover premium furniture and decor for your dream home</p>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-gray-100 py-6 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${activeFilter === 'all' ? 'bg-black text-white shadow-md' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
            >
              All Categories
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${activeFilter === category.id ? 'bg-black text-white shadow-md' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories
            .filter(category => activeFilter === 'all' || category.id === activeFilter)
            .map(category => (
              <Link 
                href={`/products/${category.id}`} 
                key={category.id}
                className="group"
              >
                <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
                  <div className="h-56 sm:h-64 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3 text-center">{category.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                    <div className="flex items-center justify-center text-black font-medium">
                      <span className="text-sm">Explore Collection</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-gray-800 to-black text-transparent bg-clip-text">Featured Products</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Discover our most popular and exclusive furniture pieces</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                id: 1,
                name: 'Ornate Turkish Entry Door',
                price: 2499,
                image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop',
                category: 'turkish-doors'
              },
              {
                id: 2,
                name: 'Crystal Chandelier - Victoria',
                price: 1899,
                image: '/images/categories/chandeliers.jpg',
                category: 'chandeliers'
              },
              {
                id: 3,
                name: 'Premium Memory Foam Mattress',
                price: 1299,
                image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop',
                category: 'mattresses'
              },
              {
                id: 4,
                name: 'Modern L-Shaped Sectional Sofa',
                price: 2199,
                image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop',
                category: 'sofas'
              }
            ].map(product => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-56 sm:h-64 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 bg-black text-white text-xs px-3 py-1 m-2 rounded-full">
                    New Arrival
                  </div>
                  <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-lg mb-1 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <p className="text-gray-900 font-bold">${product.price.toLocaleString()}</p>
                    <div className="ml-2 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-black text-white py-2.5 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
                      Add to Cart
                    </button>
                    <button className="bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">Stay Updated</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-8 text-gray-300 max-w-xl mx-auto">Subscribe to receive updates on new arrivals, special offers and exclusive discounts.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 border-0"
              required
            />
            <button 
              type="submit"
              className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
        </div>
      </div>
    </div>
  );
}