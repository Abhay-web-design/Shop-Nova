import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppData } from "../context/AppDataContext";
import Navbar from "../components/navbar/Navbar";
import ImageGallery from "../components/UI/ImageGallery";
import Reviews from "../components/UI/Reviews";
import RelatedProducts from "../components/UI/RelatedProducts";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, toggleWishlist, wishlist, addToCart } = useContext(AppData);

  const product = products.find(p => p.id === Number(id));
  if (!product) return null;

  const isWishlisted = wishlist.some(w => w.id === product.id);

  return (
    <>
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 md:p-8 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-6 grid md:grid-cols-2 gap-8">

          <ImageGallery images={product.images} />

          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-400">{product.brand}</p>

            <p className="text-2xl font-semibold mt-3">${product.price}</p>
            <p className="mt-4 text-gray-600">{product.description}</p>

            <div className="flex gap-4 mt-6 flex-wrap">
              <button
                onClick={() => addToCart(product)}
                className="bg-black text-white px-6 py-2 rounded-lg"
              >
                Add to Cart
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`px-6 py-2 rounded-lg border
                  ${isWishlisted ? "border-red-500 text-red-500" : ""}`}
              >
                {isWishlisted ? "Wishlisted ❤️" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>

        <Reviews />
        <RelatedProducts
          category={product.category}
          currentId={product.id}
        />
      </motion.div>
    </>
  );
};

export default ProductDetails;
