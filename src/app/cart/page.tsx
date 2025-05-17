'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock cart data for demonstration
const initialCartItems = [
  {
    id: 'turkish-door-1',
    name: 'Ornate Turkish Entry Door',
    price: 2499,
    image: '/images/products/turkish-door-1.jpg',
    category: 'turkish-doors',
    quantity: 1
  },
  {
    id: 'chandelier-1',
    name: 'Crystal Chandelier - Victoria',
    price: 1899,
    image: '/images/products/chandelier-1.jpg',
    category: 'chandeliers',
    quantity: 1
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 1000 ? 0 : 150;
  const total = subtotal + shipping;
  
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-400 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link href="/" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="py-4 px-6 text-left">Product</th>
                      <th className="py-4 px-6 text-center">Quantity</th>
                      <th className="py-4 px-6 text-right">Price</th>
                      <th className="py-4 px-6 text-right">Total</th>
                      <th className="py-4 px-6"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <div className="h-20 w-20 flex-shrink-0 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                              <span className="text-gray-500 text-xs">Image: {item.image}</span>
                            </div>
                            <div>
                              <Link href={`/products/${item.category}/${item.id}`} className="font-medium hover:text-gray-700">
                                {item.name}
                              </Link>
                              <p className="text-gray-500 text-sm">Category: {item.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex justify-center">
                            <div className="flex border border-gray-300 rounded-md">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-1 border-r border-gray-300"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                className="w-12 text-center focus:outline-none"
                              />
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1 border-l border-gray-300"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-right">
                          ${item.price.toLocaleString()}
                        </td>
                        <td className="py-4 px-6 text-right font-medium">
                          ${(item.price * item.quantity).toLocaleString()}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-500 hover:text-red-500"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 flex justify-between">
                <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Continue Shopping
                </Link>
                
                <button 
                  onClick={() => setCartItems([])}
                  className="text-gray-600 hover:text-gray-800 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Clear Cart
                </button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `$${shipping.toLocaleString()}`}
                    </span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-xl">${total.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/checkout" 
                    className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Secure Checkout
                  </div>
                  
                  <div className="flex justify-center gap-2">
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-medium mb-4">Have a promo code?</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Enter code" 
                    className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-r-md border border-gray-300 border-l-0 hover:bg-gray-200 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  <span className="text-gray-600">Free shipping on orders over $1000</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}