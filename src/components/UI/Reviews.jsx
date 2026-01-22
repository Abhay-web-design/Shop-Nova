const reviews = [
  { name: "Amit", rating: 5, text: "Excellent quality!" },
  { name: "Priya", rating: 4, text: "Worth the price." },
  { name: "Rahul", rating: 5, text: "Fast delivery & great product." }
];

const Reviews = () => {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>

      <div className="space-y-4">
        {reviews.map((r, i) => (
          <div key={i} className="border p-4 rounded-lg">
            <p className="font-medium">{r.name}</p>
            <p className="text-sm">⭐ {r.rating}/5</p>
            <p className="text-gray-600">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
