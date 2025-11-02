import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../Redux/Slice/CartSlice";
import { useNavigate } from "react-router";
import { FaTrashAlt } from "react-icons/fa";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // ✅ Correct state key
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty, // ✅ Correct quantity field
    0
  );

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/buynow");
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Your cart is empty 😢
        </p>
      ) : (
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
          {cartItems.map((item) => (
            <div
              key={item.id} // ✅ use unique id as key
              className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 py-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded-lg shadow-sm"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Rs. {item.price}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => dispatch(decreaseQuantity({ id: item.id }))} // ✅ Correct action
                  className="px-3 py-1 text-lg bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  −
                </button>
                <span className="text-lg text-gray-800 dark:text-gray-100">
                  {item.qty} {/* ✅ Correct quantity field */}
                </span>
                <button
                  onClick={() => dispatch(increaseQuantity({ id: item.id }))} // ✅ Correct action
                  className="px-3 py-1 text-lg bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  +
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  Rs. {item.price * item.qty} {/* ✅ Correct */}
                </p>
                <button
                  onClick={() => dispatch(removeFromCart({ name: item.name }))} // ✅ Correct action
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt size={18} />
                </button>
              </div>
            </div>
          ))}

          {/* Total & Checkout */}
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Total: Rs. {totalPrice}
            </h2>
            <button
              onClick={handleBuyNow}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
