import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ id, name, price, image, colors = [], sizes = [] }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col group">
    
    
      <Link 
        to={`/product-details/${id}`} 
        className="flex-grow block relative overflow-hidden"
      >
        <div className="aspect-square bg-gray-100 relative">
      
      
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
             
            }}
          />
         
          <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            New
          </div>
        </div>
      </Link>

    
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product-details/${id}`} className="hover:text-pink-500">
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{name}</h3>
        </Link>
        
        <p className="text-pink-500 font-bold text-xl mb-3">${price.toFixed(2)}</p>
   
        {colors.length > 0 && (
          <div className="mb-3">
            <p className="text-sm text-gray-600 mb-1">Color:</p>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-pink-500' : 'border-gray-200'}`}
                  style={{ backgroundColor: color }}
                  title={color}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
        )}

   
        {sizes.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Size:</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-2 py-1 text-xs rounded ${selectedSize === size ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

     
        <button className="mt-auto w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
         <ShoppingCart/>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;