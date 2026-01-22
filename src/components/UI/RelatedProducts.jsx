import { useContext } from "react";
import { AppData } from "../../context/AppDataContext";
import Card from "./Card";

const RelatedProducts = ({ category, currentId }) => {
  const { products } = useContext(AppData);

  const related = products
    .filter(p => p.category === category && p.id !== currentId)
    .slice(0, 6);

  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold mb-4">Related Products</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {related.map(p => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
