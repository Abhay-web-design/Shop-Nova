import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [active, setActive] = useState(images[0]);

  return (
    <div>
      <img
        src={active}
        className="w-full h-80 object-contain bg-gray-100 rounded-xl"
      />

      <div className="flex gap-2 mt-4 justify-center">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActive(img)}
            className={`w-16 h-16 cursor-pointer object-cover rounded-lg border
              ${active === img ? "border-black" : "border-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
