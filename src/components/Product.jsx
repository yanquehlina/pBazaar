import {
  PencilLineIcon,
  Trash2,
} from "lucide-react";
import React from "react";

const Product = ({ product, handleEditProductModal, handleDeleteProductModal }) => {
  return (
    <div
      key={product.id}
      className="p-4 bg-white shadow-lg rounded-lg"
    >
      <Trash2
        className="text-red-600 ms-auto cursor-pointer"
        onClick={() => handleDeleteProductModal(product.id)}
      />
      <img
        src={product.imageUrl || "default-image.jpg"}
        alt={product.name}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <PencilLineIcon
        className="text-accent ms-auto cursor-pointer"
        onClick={() => handleEditProductModal(product.id)}
      />

      <div className="p-4">
        <h3 className="font-bold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.description}</p>
        <p className="text-sm text-gray-900">
          Quantity In Stock: {product.stockQuantity}
        </p>
        <p className="text-gray-700 font-bold">GHS {product.price}</p>
      </div>
    </div>
  );
};

export default Product;
