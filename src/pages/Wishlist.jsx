import { useContext } from "react";
import { AppData } from "../context/AppDataContext";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/UI/Card";

const Wishlist = () => {
  const { wishlist } = useContext(AppData);

  return (
    <>
      <Navbar />

      <div className="p-4">
        <h3 className="text-3xl font-medium bg-clip-text text-transparent
          bg-linear-to-r from-orange-500 to-purple-600">
          Your Wishlist
        </h3>

        {wishlist.length === 0 ? (
          <p className="mt-6 text-gray-500">No items in wishlist</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
            {wishlist.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
