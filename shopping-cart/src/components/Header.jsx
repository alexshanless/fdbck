import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { cart, removeFromCart, clearCart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <header className='bg-white shadow-md p-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-blue-600'>Shopping Cart</h1>
      <div className='realtive'>
        <button
          className='cursor-pointer'
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaShoppingCart className='text-2xl text-gray-700' />
          {itemCount > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
              {itemCount}
            </span>
          )}
        </button>
        {showDropdown && (
          <div className='absolute right-0 mt-2 w-80 bg-white rounded shadow-lg z-50'>
            <div className='p-4'>
              <h2 className='font-semibold text lg mb-2'>Cart Items</h2>
              {cart.length === 0 ? (
                <p className='text-gray-600'>Your cart is empty.</p>
              ) : (
                <>
                  <ul className='max-h-60 overflow-y-auto divide-y divide-gray-200'>
                    {cart.map(item => (
                      <li
                        key={item.id}
                        className='py-2 flex justify-between items-center'
                      >
                        <div>
                          <p className='font-semibold'>{item.name}</p>
                          <p>
                            {item.qty} x ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className='text-sm text-red-500 hover:underline'
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                    <div className='mt-4 flex justify-between font-semibold'>
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </ul>
                  <button
                    onClick={clearCart}
                    className='w-full bg-red-500 text-white mt-4 px-4 py-2 rounded transition hover:bg-red-600'
                  >
                    Clear cart
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
