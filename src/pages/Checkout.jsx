import { useContext } from "react";
import { AppData } from "../context/AppDataContext";
import Navbar from "../components/navbar/Navbar";

const Checkout = () => {
  const { cart } = useContext(AppData);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* SHIPPING FORM */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">
              Shipping Information
            </h2>

            <form className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border p-3 rounded"
              />
              <input
                type="text"
                placeholder="Address"
                className="border p-3 rounded md:col-span-2"
              />
              <input
                type="text"
                placeholder="City"
                className="border p-3 rounded"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border p-3 rounded"
              />
              <input
                type="text"
                placeholder="Country"
                className="border p-3 rounded md:col-span-2"
              />
            </form>
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white p-6 rounded-xl shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-sm mb-2"
              >
                <span>
                  {item.title} × {item.qty}
                </span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              className="w-full py-3 rounded-xl text-white
              bg-linear-to-r from-orange-500 to-purple-600"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
