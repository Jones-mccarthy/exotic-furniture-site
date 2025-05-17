'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/product/ProductCard';

// Mock data for demonstration
const products = {
  'turkish-doors': [
    {
      id: 'turkish-door-1',
      name: 'Ornate Turkish Entry Door',
      price: 2499,
      image: '/images/products/turkish-door-1.jpg',
      category: 'turkish-doors',
      isNew: true
    },
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
    },
    {
      id: 'turkish-door-5',
      name: 'Traditional Turkish Door with Carvings',
      price: 2799,
      image: '/images/products/turkish-door-5.jpg',
      category: 'turkish-doors',
      isNew: true
    },
    {
      id: 'turkish-door-6',
      name: 'Antique Style Turkish Door',
      price: 3499,
      image: '/images/products/turkish-door-6.jpg',
      category: 'turkish-doors'
    }
  ],
  'mattresses': [
    {
      id: 'mattress-1',
      name: 'Premium Memory Foam Mattress',
      price: 1299,
      image: '/images/products/mattress-1.jpg',
      category: 'mattresses',
      isNew: true
    },
    {
      id: 'mattress-2',
      name: 'Luxury Hybrid Mattress',
      price: 1599,
      image: '/images/products/mattress-2.jpg',
      category: 'mattresses'
    },
    {
      id: 'mattress-3',
      name: 'Orthopedic Pocket Spring Mattress',
      price: 1199,
      image: '/images/products/mattress-3.jpg',
      category: 'mattresses',
      discount: 15
    },
    {
      id: 'mattress-4',
      name: 'Premium Latex Mattress',
      price: 1899,
      image: '/images/products/mattress-4.jpg',
      category: 'mattresses'
    }
  ],
  'sofas': [
    {
      id: 'sofa-1',
      name: 'Modern L-Shaped Sectional Sofa',
      price: 2199,
      image: '/images/products/sofa-1.jpg',
      category: 'sofas',
      isNew: true
    },
    {
      id: 'sofa-2',
      name: 'Luxury 3-Seater Velvet Sofa',
      price: 1799,
      image: '/images/products/sofa-2.jpg',
      category: 'sofas',
      discount: 5
    },
    {
      id: 'sofa-3',
      name: 'Contemporary Leather Sofa',
      price: 2499,
      image: '/images/products/sofa-3.jpg',
      category: 'sofas'
    },
    {
      id: 'sofa-4',
      name: 'Modular Sofa Set',
      price: 3299,
      image: '/images/products/sofa-4.jpg',
      category: 'sofas'
    }
  ],
  'chandeliers': [
    {
      id: 'chandelier-1',
      name: 'Crystal Chandelier - Victoria',
      price: 1899,
      image: '/images/products/chandelier-1.jpg',
      category: 'chandeliers',
      isNew: true
    },
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
  ],
  'decor': [
    {
      id: 'decor-1',
      name: 'Handcrafted Turkish Rug',
      price: 899,
      image: '/images/products/decor-1.jpg',
      category: 'decor',
      isNew: true
    },
    {
      id: 'decor-2',
      name: 'Decorative Wall Mirror',
      price: 499,
      image: '/images/products/decor-2.jpg',
      category: 'decor'
    },
    {
      id: 'decor-3',
      name: 'Luxury Table Lamp',
      price: 349,
      image: '/images/products/decor-3.jpg',
      category: 'decor',
      discount: 15
    },
    {
      id: 'decor-4',
      name: 'Ceramic Vase Set',
      price: 199,
      image: '/images/products/decor-4.jpg',
      category: 'decor'
    }
  ]
};

const categoryTitles = {
  'turkish-doors': 'Turkish Doors',
  'mattresses': 'Luxury Mattresses',
  'sofas': 'Modern Sofas',
  'chandeliers': 'Elegant Chandeliers',
  'decor': 'Interior Decor'
};

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' }
];

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(products[category as keyof typeof products] || []);
  
  useEffect(() => {
    let sorted = [...(products[category as keyof typeof products] || [])];
    
    switch (sortBy) {
      case 'newest':
        sorted = sorted.filter(product => product.isNew).concat(sorted.filter(product => !product.isNew));
        break;
      case 'price-low-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        // Featured is default, no sorting needed
        break;
    }
    
    setFilteredProducts(sorted);
  }, [category, sortBy]);
  
  if (!products[category as keyof typeof products]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="mb-6">The category you're looking for doesn't exist.</p>
          <a href="/" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Return to Homepage
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{categoryTitles[category as keyof typeof categoryTitles]}</h1>
        <p className="text-gray-600 mb-8">
          Discover our collection of premium {categoryTitles[category as keyof typeof categoryTitles].toLowerCase()}.
        </p>
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-600">{filteredProducts.length} products</span>
          </div>
          
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-gray-600">Sort by:</label>
            <select 
              id="sort" 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              discount={product.discount}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </div>
  );
}