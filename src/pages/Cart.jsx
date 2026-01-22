import { useContext } from "react";
import { AppData } from "../context/AppDataContext";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useContext(AppData);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      <Navbar />

      <div className="p-6 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-xl">Your cart is empty 🛒</p>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* ITEMS */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-white p-4 rounded-xl shadow"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-28 h-28 object-contain"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.brand}</p>
                    <p className="font-semibold mt-1">${item.price}</p>

                    {/* QTY */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQty(item.id, "dec")}
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, "inc")}
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-xl"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="bg-white p-6 rounded-xl shadow h-fit">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="flex justify-between mb-2">
                <span>Total Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between mb-4 font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link
                    to="/checkout"
                    className="block text-center w-full py-3 rounded-xl text-white
                    bg-linear-to-r from-orange-500 to-purple-600"
                    >
                    Checkout
                    </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
