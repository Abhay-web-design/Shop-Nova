import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse w-full p-2 bg-white rounded-2xl shadow-xl">
      
      {/* Image skeleton */}
      <div className="w-full h-40 bg-gray-300 rounded-lg"></div>

      {/* Text skeletons */}
      <div className="mt-3 h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="mt-2 h-3 bg-gray-200 rounded w-1/2"></div>
      <div className="mt-3 h-4 bg-gray-300 rounded w-1/4"></div>

    </div>
  );
};

export default SkeletonCard;
