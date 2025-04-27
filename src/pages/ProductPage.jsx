import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/layout/Navbar";
import Container from "../component/layout/Container";
import Footer from "../component/layout/Footer";
import ProductCard from "../component/common/ProductCard";
import girl from "../assets/products/girl.jpeg";
import romper from "../assets/products/romper.webp";
import bodysuit from "../assets/products/bodysuit.webp";
import dress from "../assets/products/dress.jpeg";
import overalls from "../assets/products/overalls.webp";
import pajama from "../assets/products/pajama.webp";


const ProductPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

 


const sampleProducts = [
  {
    id: 1,
    name: "Organic Cotton Onesie",
    price: 19.99,
    image: girl, 
    category: "girl",
    colors: ["pink", "white", "mint"],
    sizes: ["0-3M", "3-6M", "6-12M"]
  },
  {
    id: 2,
    name: "Striped Baby Romper",
    price: 24.99,
    image: romper, 
    category: "boy",
    colors: ["blue", "gray", "yellow"],
    sizes: ["0-3M", "3-6M"]
  },
  {
    id: 3,
    name: "Animal Print Bodysuit",
    price: 17.99,
    image: bodysuit, 
    category: "unisex",
    colors: ["white", "gray"],
    sizes: ["0-3M", "3-6M", "6-12M"]
  },
  {
    id: 4,
    name: "Floral Dress Set",
    price: 29.99,
    image: dress, 
    category: "girl",
    colors: ["pink", "lavender"],
    sizes: ["3-6M", "6-12M"]
  },
  {
    id: 5,
    name: "Denim Overalls",
    price: 34.99,
    image: overalls, 
    category: "boy",
    colors: ["blue", "black"],
    sizes: ["0-3M", "3-6M", "6-12M"]
  },
  {
    id: 6,
    name: "Cloud Print Pajama Set",
    price: 22.99,
    image: pajama, 
    category: "unisex",
    colors: ["white", "blue"],
    sizes: ["0-3M", "3-6M"]
  }
];
  useEffect(() => {
   
    const queryParams = new URLSearchParams(location.search);
    const urlCategory = queryParams.get('category') || 'all';
   
    setCategory(urlCategory);
    
    
    const filteredProducts = urlCategory === 'all' 
      ? sampleProducts 
      : sampleProducts.filter(product => product.category === urlCategory);
    
  
    const timer = setTimeout(() => {
      setProducts(filteredProducts);
      setLoading(false);
    }, 500);

   
    return () => clearTimeout(timer);
  }, [location.search]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setLoading(true);
    
    const filteredProducts = newCategory === 'all' 
      ? sampleProducts 
      : sampleProducts.filter(product => product.category === newCategory);
    
    const timer = setTimeout(() => {
      setProducts(filteredProducts);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Container>
          <div className="py-4 text-sm text-gray-600">
            <span className="hover:text-pink-500 cursor-pointer">Home</span> &gt; 
            <span className="hover:text-pink-500 cursor-pointer"> Products</span>
            {category !== "all" && (
              <span> &gt; <span className="capitalize">{category}</span></span>
            )}
          </div>

          <div className="py-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              {category === "all" ? "All Products" : `Baby ${category.charAt(0).toUpperCase() + category.slice(1)} Collection`}
            </h1>
            <p className="text-gray-600 mt-2">
              {category === "all" 
                ? "Discover our complete collection of baby essentials" 
                : `Adorable outfits perfect for your little ${category}`}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => handleCategoryChange("all")}
              className={`px-4 py-2 rounded-full ${category === "all" ? 'bg-pink-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              All
            </button>
            <button 
              onClick={() => handleCategoryChange("girl")}
              className={`px-4 py-2 rounded-full ${category === "girl" ? 'bg-pink-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Baby Girl
            </button>
            <button 
              onClick={() => handleCategoryChange("boy")}
              className={`px-4 py-2 rounded-full ${category === "boy" ? 'bg-pink-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Baby Boy
            </button>
            <button 
              onClick={() => handleCategoryChange("unisex")}
              className={`px-4 py-2 rounded-full ${category === "unisex" ? 'bg-pink-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Unisex
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
              {products.map(product => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  colors={product.colors}
                  sizes={product.sizes}
                />
              ))}
            </div>
          )}

          {!loading && products.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-700">No products found</h2>
              <p className="text-gray-500 mt-2">We couldn't find any products matching your selection</p>
              <button 
                onClick={() => handleCategoryChange("all")}
                className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
              >
                View All Products
              </button>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;