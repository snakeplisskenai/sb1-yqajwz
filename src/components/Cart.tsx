import React from 'react';
import { useCart } from './CartProvider';

export const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-2xl">Shopping Cart</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Close cart</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {state.items.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {state.items.map((item) => (
                <div key={item._id} className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-500">£{item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { _id: item._id, quantity: Math.max(0, item.quantity - 1) },
                          })
                        }
                        className="text-gray-500 hover:text-gray-700"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { _id: item._id, quantity: item.quantity + 1 },
                          })
                        }
                        className="text-gray-500 hover:text-gray-700"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item._id })}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <span className="sr-only">Remove item</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total</span>
                <span className="font-medium">£{state.total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-secondary text-primary py-3 font-medium hover:bg-opacity-90 transition-colors">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};