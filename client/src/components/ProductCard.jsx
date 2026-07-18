import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Product Image */}
      <img
        src={
          product.images?.[0]?.url ||
          "https://via.placeholder.com/300x220?text=No+Image"
        }
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>

        <p className="text-gray-500 mt-2">
          ₹ {product.price}
        </p>

        <p className="text-yellow-500 mt-2">
          ⭐ {product.ratings}
        </p>

        <Link
          to={`/products/${product._id}`}
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;