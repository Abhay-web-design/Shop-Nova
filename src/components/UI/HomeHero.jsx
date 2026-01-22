import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full rounded-3xl p-6 md:p-10 
      bg-linear-to-r from-orange-500 to-purple-600 
      text-white shadow-2xl"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Text */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Discover Amazing Products
          </h1>
          <p className="mt-3 text-lg md:text-xl text-white/90">
            Shop smarter with <span className="font-semibold">ShopNova</span>
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-xl hover:scale-105 transition">
            Explore Now
          </button>
        </div>

        {/* Decorative */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:block text-6xl font-bold opacity-20"
        >
          🛍️
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeHero;
