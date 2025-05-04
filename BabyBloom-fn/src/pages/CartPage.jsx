import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity, clearCart } from "../redux/cartSlice";
import EmptyCart from "../components/common/EmptyCart";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const shippingFee = totalPrice > 50 ? 0 : 5.99;

  if (items.length === 0) return <EmptyCart />;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart ({totalQuantity})</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row">
                   
                      <div className="flex-shrink-0 w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
                        <div className="flex justify-between">
                          <Link
                            to={`/product/${item.id}`}
                            className="text-lg font-medium text-gray-900 hover:text-pink-600"
                          >
                            {item.name}
                          </Link>
                          <p className="ml-4 text-lg font-medium text-gray-900">${item.price.toFixed(2)}</p>
                        </div>

                     
                        <div className="mt-2 text-sm text-gray-600">
                          {item.selectedColor && <p>Color: <span className="capitalize">{item.selectedColor}</span></p>}
                          {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                        </div>

                   
                        <div className="mt-4 flex items-center">
                          <button
                            onClick={() => dispatch(updateQuantity({ id: item.id, color: item.selectedColor, size: item.selectedSize, quantity: item.quantity - 1 }))}
                            disabled={item.quantity <= 1}
                            className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-50 text-gray-500 disabled:opacity-50"
                          >
                            −
                          </button>
                          <span className="px-4 py-1 border-t border-b border-gray-300 bg-white text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => dispatch(updateQuantity({ id: item.id, color: item.selectedColor, size: item.selectedSize, quantity: item.quantity + 1 }))}
                            className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-50 text-gray-500"
                          >
                            +
                          </button>

                       
                          <button
                            onClick={() => dispatch(removeItem({ id: item.id, color: item.selectedColor, size: item.selectedSize }))}
                            className="ml-4 text-sm text-pink-600 hover:text-pink-800"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

             
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

      
          <div className="mt-8 lg:mt-0 lg:col-span-4">
            <div className="bg-white shadow rounded-lg p-6 h-fit sticky top-4">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>

              <div className="divide-y divide-gray-200">
                <div className="py-4 space-y-2">
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">Subtotal</p>
                    <p className="text-sm font-medium text-gray-900">${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">Shipping</p>
                    <p className="text-sm font-medium text-gray-900">
                      {shippingFee === 0 ? 'Free' : `$${shippingFee.toFixed(2)}`}
                    </p>
                  </div>
                </div>

                <div className="py-4 flex justify-between">
                  <p className="text-base font-medium text-gray-900">Total</p>
                  <p className="text-base font-medium text-gray-900">
                    ${(totalPrice + shippingFee).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700"
                >
                  Proceed to Checkout
                </Link>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500">
                <p>
                  or{' '}
                  <Link to="/products" className="text-pink-600 hover:text-pink-500">
                    Continue Shopping
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;