import { useContext } from "react";
import { AppData } from "../../context/AppDataContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const Card = ({ product }) => {
  const { toggleWishlist, wishlist } = useContext(AppData);
  const navigate = useNavigate();

  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className='cursor-pointer w-full h-full p-2 shadow-xl hover:shadow-2xl bg-white rounded-2xl'
        onClick={() => navigate(`/product/${product.id}`)}>
      {/* IMAGE */}
      <div className="relative bg-gray-100 rounded-lg">
        <img
            className='w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105'
            src={product.thumbnail}
             alt={product.title}
          />


        {/* ❤️ WISHLIST */}
        <button
          onClick={(e) => {
            e.stopPropagation();   // 🔥 IMPORTANT LINE
            toggleWishlist(product);
          }}
          className="absolute top-2 right-2"
        >
          <i
            className={`text-2xl ${
              isWishlisted
                ? "ri-heart-3-fill text-red-500"
                : "ri-heart-add-line text-black"
            }`}
          ></i>
          
        </button>
      </div>

      {/* INFO */}
      <h3 className="mt-2 text-lg font-medium">{product.title}</h3>
      <p className="text-sm text-gray-400">{product.brand}</p>
      <p className="text-lg font-semibold">${product.price}</p>
    </motion.div>
  );
};

export default Card;
