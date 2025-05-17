'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Mock data for demonstration
const heroSlides = [
  {
    id: 1,
    image: '/images/hero/turkish-doors.jpg',
    title: 'Premium Turkish Doors',
    subtitle: 'Handcrafted elegance for your entryway',
    cta: 'Explore Collection',
    link: '/products/turkish-doors'
  },
  {
    id: 2,
    image: '/images/hero/luxury-chandeliers.jpg',
    title: 'Luxury Chandeliers',
    subtitle: 'Illuminate your space with sophistication',
    cta: 'Shop Now',
    link: '/products/chandeliers'
  },
  {
    id: 3,
    image: '/images/hero/modern-sofas.jpg',
    title: 'Modern Sofas',
    subtitle: 'Comfort meets contemporary design',
    cta: 'View Collection',
    link: '/products/sofas'
  }
];

const categories = [
  {
    id: 'turkish-doors',
    name: 'Turkish Doors',
    image: '/images/categories/turkish-doors.jpg',
    link: '/products/turkish-doors'
  },
  {
    id: 'mattresses',
    name: 'Luxury Mattresses',
    image: '/images/categories/mattresses.jpg',
    link: '/products/mattresses'
  },
  {
    id: 'sofas',
    name: 'Modern Sofas',
    image: '/images/categories/sofas.jpg',
    link: '/products/sofas'
  },
  {
    id: 'chandeliers',
    name: 'Elegant Chandeliers',
    image: '/images/categories/chandeliers.jpg',
    link: '/products/chandeliers'
  },
  {
    id: 'decor',
    name: 'Interior Decor',
    image: '/images/categories/decor.jpg',
    link: '/products/decor'
  }
];

const newArrivals = [
  {
    id: 'product-1',
    name: 'Ornate Turkish Entry Door',
    price: 2499,
    image: '/images/products/turkish-door-1.jpg',
    category: 'turkish-doors'
  },
  {
    id: 'product-2',
    name: 'Crystal Chandelier - Victoria',
    price: 1899,
    image: '/images/products/chandelier-1.jpg',
    category: 'chandeliers'
  },
  {
    id: 'product-3',
    name: 'Premium Memory Foam Mattress',
    price: 1299,
    image: '/images/products/mattress-1.jpg',
    category: 'mattresses'
  },
  {
    id: 'product-4',
    name: 'Modern L-Shaped Sectional Sofa',
    price: 2199,
    image: '/images/products/sofa-1.jpg',
    category: 'sofas'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'The Turkish door we purchased transformed our entryway completely. The craftsmanship is exceptional!',
    image: '/images/testimonials/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    comment: 'We love our new chandelier. It\'s the centerpiece of our dining room and everyone compliments it.',
    image: '/images/testimonials/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    rating: 4,
    comment: 'The mattress quality is outstanding. Best sleep I\'ve had in years!',
    image: '/images/testimonials/testimonial-3.jpg'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isWhatsAppVisible, setIsWhatsAppVisible] = useState(false);

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Show WhatsApp button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsWhatsAppVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-gray-900/60 z-10" />
              <img 
                src={index === 0 ? 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop' : 
                     index === 1 ? 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2187&auto=format&fit=crop' : 
                     'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop'}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">{slide.subtitle}</p>
                <Link 
                  href={slide.link}
                  className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-black text-transparent bg-clip-text">Explore Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              href={category.link} 
              key={category.id}
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <img 
                src={
                  index === 0 ? '/images/categories/turkish-doors.jpg' :
                  index === 1 ? 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop' :
                  index === 2 ? 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop' :
                  index === 3 ? '/images/categories/chandeliers.jpg' :
                  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop'
                }
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <span className="px-4 py-2 border border-white rounded-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product, index) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={
                      index === 0 ? 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop' :
                      index === 1 ? 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2187&auto=format&fit=crop' :
                      index === 2 ? 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop' :
                      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop'
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-700 font-bold mb-3">${product.price.toLocaleString()}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
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
      </section>

      {/* Brand Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 h-96 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop"
              alt="Exotic Home Furnitures Showroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              At Exotic Home Furnitures, we believe that your home should be a reflection of your unique style and personality. 
              Our journey began with a passion for bringing the finest Turkish craftsmanship to homes around the world.
            </p>
            <p className="text-gray-600 mb-6">
              Each piece in our collection is carefully selected for its quality, design, and the story it tells. 
              From our signature Turkish doors to our luxury chandeliers, every item is crafted with attention to detail 
              and a commitment to excellence.
            </p>
            <Link 
              href="/about" 
              className="inline-block border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={
                        index === 0 ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop' :
                        index === 1 ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' :
                        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop'
                      }
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Follow Us on TikTok</h2>
          <p className="text-center text-gray-600 mb-8">@multiple_empire</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1470&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1470&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1487&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1469&auto=format&fit=crop'
            ].map((image, i) => (
              <div key={i} className="aspect-square rounded-md overflow-hidden group cursor-pointer">
                <img 
                  src={image} 
                  alt={`TikTok Video ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="https://www.tiktok.com/@multiple_empire" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
              </svg>
              Follow Us on TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-8">Subscribe to receive updates on new arrivals, special offers and other discount information.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <button 
              type="submit"
              className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex items-center justify-center gap-2">
            <input type="checkbox" id="consent" className="rounded" required />
            <label htmlFor="consent" className="text-sm text-gray-300">
              I agree to receive marketing emails and consent to the Privacy Policy
            </label>
          </div>
        </div>
      </section>

      {/* WhatsApp Support Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 ${
          isWhatsAppVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </main>
  );
}