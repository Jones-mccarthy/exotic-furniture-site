'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';

// Mock data for demonstration - this would come from a CMS in production
const productDetails = {
  'turkish-door-1': {
    id: 'turkish-door-1',
    name: 'Ornate Turkish Entry Door',
    price: 2499,
    discount: null,
    description: 'This premium Turkish entry door features intricate hand-carved details, solid wood construction, and premium hardware. The perfect statement piece for your home entrance, combining traditional craftsmanship with modern durability.',
    features: [
      'Handcrafted from premium solid wood',
      'Intricate traditional Turkish carvings',
      'Premium brass hardware included',
      'Weather-resistant finish',
      'Custom sizing available',
      'Professional installation recommended'
    ],
    specifications: {
      'Material': 'Solid Oak Wood',
      'Dimensions': '36" x 80" x 2.25" (Custom sizes available)',
      'Finish': 'Hand-applied multi-layer stain with protective clear coat',
      'Hardware': 'Premium brass handles and hinges included',
      'Weight': 'Approximately 125 lbs',
      'Warranty': '5-year limited warranty'
    },
    images: [
      '/images/products/turkish-door-1.jpg',
      '/images/products/turkish-door-1-detail.jpg',
      '/images/products/turkish-door-1-installed.jpg',
      '/images/products/turkish-door-1-closeup.jpg'
    ],
    category: 'turkish-doors',
    inStock: true,
    isNew: true,
    reviews: {
      average: 4.8,
      count: 24
    }
  },
  'chandelier-1': {
    id: 'chandelier-1',
    name: 'Crystal Chandelier - Victoria',
    price: 1899,
    discount: null,
    description: 'The Victoria Crystal Chandelier brings timeless elegance to any space. Featuring premium K9 crystals that refract light beautifully, this chandelier creates a stunning visual display while providing warm, ambient lighting for your dining room, entryway, or living space.',
    features: [
      'Premium K9 crystal prisms',
      'Chrome-finished metal frame',
      'Adjustable hanging height',
      'Dimmable lighting compatible',
      'Professional installation recommended',
      'Includes all mounting hardware'
    ],
    specifications: {
      'Material': 'Metal frame with K9 crystal elements',
      'Dimensions': '32" diameter x 36" height (adjustable)',
      'Bulb Type': 'E12 candelabra base, 8 bulbs (40W max each)',
      'Finish': 'Chrome',
      'Weight': 'Approximately 28 lbs',
      'Warranty': '2-year limited warranty'
    },
    images: [
      '/images/products/chandelier-1.jpg',
      '/images/products/chandelier-1-detail.jpg',
      '/images/products/chandelier-1-installed.jpg',
      '/images/products/chandelier-1-closeup.jpg'
    ],
    category: 'chandeliers',
    inStock: true,
    isNew: true,
    reviews: {
      average: 4.9,
      count: 37
    }
  }
};

// Mock related products
const relatedProducts = {
  'turkish-door-1': [
    {
      id: 'turkish-door-2',
      name: 'Handcrafted Wooden Turkish Door',
      price: 1899,
      image: '/images/products/turkish-door-2.jpg',
      category: 'turkish-doors',
      discount: 10
    },
    {
      id: 'turkish-door-3',
      name: 'Luxury Double Turkish Door',
      price: 3299,
      image: '/images/products/turkish-door-3.jpg',
      category: 'turkish-doors'
    },
    {
      id: 'turkish-door-4',
      name: 'Modern Turkish Door with Glass',
      price: 2199,
      image: '/images/products/turkish-door-4.jpg',
      category: 'turkish-doors'
    }
  ],
  'chandelier-1': [
    {
      id: 'chandelier-2',
      name: 'Modern LED Chandelier',
      price: 1299,
      image: '/images/products/chandelier-2.jpg',
      category: 'chandeliers'
    },
    {
      id: 'chandelier-3',
      name: 'Luxury Gold Chandelier',
      price: 2499,
      image: '/images/products/chandelier-3.jpg',
      category: 'chandeliers',
      discount: 10
    },
    {
      id: 'chandelier-4',
      name: 'Vintage Crystal Chandelier',
      price: 1799,
      image: '/images/products/chandelier-4.jpg',
      category: 'chandeliers'
    }
  ]
};

export default function ProductPage({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;
  const product = productDetails[slug as keyof typeof productDetails];
  const related = relatedProducts[slug as keyof typeof relatedProducts] || [];
  
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist.</p>
          <Link href={`/products/${category}`} className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Back to {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href={`/products/${category}`} className="text-gray-500 hover:text-gray-700">
            {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4 aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
              {/* This would be replaced with actual images in production */}
              <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Image: {product.images[currentImage]}</span>
              </div>
              
              {/* Product badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                {product.isNew && (
                  <span className="bg-black text-white text-xs px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {product.discount && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`aspect-square bg-gray-100 rounded-md overflow-hidden ${
                    currentImage === index ? 'ring-2 ring-black' : ''
                  }`}
                >
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Thumb {index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${i < Math.floor(product.reviews.average) ? 'text-yellow-400' : 'text-gray-300'}`}>
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">{product.reviews.average} ({product.reviews.count} reviews)</span>
            </div>
            
            <div className="mb-6">
              <span className="text-3xl font-bold">${product.price.toLocaleString()}</span>
              {product.discount && (
                <span className="ml-2 text-gray-500 line-through text-xl">${(product.price / (1 - product.discount / 100)).toFixed(0)}</span>
              )}
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Features:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <div className="flex border border-gray-300 rounded-md">
                    <button 
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="px-3 py-1 border-r border-gray-300"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 text-center focus:outline-none"
                    />
                    <button 
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="px-3 py-1 border-l border-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Availability
                  </label>
                  {product.inStock ? (
                    <span className="text-green-600 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      In Stock
                    </span>
                  ) : (
                    <span className="text-red-600 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>
              
              <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors mb-3">
                Add to Cart
              </button>
              
              <button className="w-full border border-black py-3 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                Add to Wishlist
              </button>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                <span className="text-gray-600">Free shipping on orders over $1000</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
                </svg>
                <span className="text-gray-600">Need help? Contact us via WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <div className="border-t border-gray-200">
            {Object.entries(product.specifications).map(([key, value], index) => (
              <div key={key} className={`py-4 flex ${index !== Object.entries(product.specifications).length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="w-1/3 font-medium">{key}</div>
                <div className="w-2/3 text-gray-600">{value}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {related.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  price={relatedProduct.price}
                  image={relatedProduct.image}
                  category={relatedProduct.category}
                  discount={relatedProduct.discount}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}