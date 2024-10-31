import React from 'react';
import { useCart } from './CartProvider';
import type { Product } from '../types';

interface QuickViewProps {
  product: Product;
  onClose: () => void;
}

export const ProductQuickView: React.FC<QuickViewProps> = ({ product, onClose }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        _id: product._id,
        title: product.title,
        price: product.pricing.basePrice,
        quantity: 1,
        image: product.mainImage,
      },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white max-w-2xl w-full mx-4 rounded-lg overflow-hidden">
        <div className="flex">
          <div className="w-1/2">
            <img 
              src={product.mainImage} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 p-6">
            <div className="flex justify-between items-start">
              <h2 className="font-serif text-2xl mb-2">{product.title}</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-xl mb-4">£{product.pricing.basePrice.toFixed(2)}</p>
            <div className="prose prose-sm mb-6">
              <p>{product.description}</p>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-3 px-6 text-center font-medium transition-colors ${
                product.inStock
                  ? 'bg-secondary text-primary hover:bg-opacity-90'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};