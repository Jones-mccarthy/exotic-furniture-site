'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
  isNew?: boolean;
}

export default function ProductCard({ id, name, price, image, category, discount, isNew }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const discountedPrice = discount ? price - (price * discount / 100) : price;
  
  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        {/* This would be replaced with actual images in production */}
        <div className="h-full w-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-lg">Image: {image}</span>
        </div>
        
        {/* Quick action buttons */}
        <div 
          className={`absolute top-0 right-0 p-2 flex flex-col gap-2 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
        
        {/* Product badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <span className="bg-black text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          )}
          {discount && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              {discount}% OFF
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <Link href={`/products/${category}/${id}`} className="block">
          <h3 className="font-medium text-lg mb-1 hover:text-gray-700">{name}</h3>
        </Link>
        
        <div className="flex items-center mb-3">
          <p className="font-bold text-lg">${discountedPrice.toLocaleString()}</p>
          {discount && (
            <p className="ml-2 text-gray-500 line-through text-sm">${price.toLocaleString()}</p>
          )}
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}