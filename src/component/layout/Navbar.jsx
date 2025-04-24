import { useState } from "react";
import { Search, UserCircle, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <Container className="mt-12">
      <nav className="w-full shadow-sm border-b border-gray-200 bg-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

       

        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/baby"
            className="text-sm font-medium text-black hover:text-pink-600"
          >
            Baby
          </Link>
          <Link
            to="/toodler"
            className="text-sm font-medium text-black hover:text-pink-600"
          >
            Toddler
          </Link>
          <Link
            to="/kid"
            className="text-sm font-medium text-black hover:text-pink-600"
          >
            Kid
          </Link>
          <Link
            to="/brand"
            className="text-sm font-medium text-black hover:text-pink-600"
          >
            Brands
          </Link>
          <Link
            to="/sale"
            className="text-sm font-medium text-black hover:text-pink-600"
          >
            Sale
          </Link>
        </div>
        <div className="text-2xl font-bold text-pink-300 mx-auto md:mx-0 ">
          <Link to="/home">BabyBloom's</Link>
        </div>

        <div className="flex items-center space-x-4 relative">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Find your product"
              className="border rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>

          <div className="relative">
            <button onClick={() => setUserMenuOpen(!userMenuOpen)}>
              <UserCircle className="w-6 h-6" />
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>

          <Link>
            <ShoppingCart className="w-6 h-6 " />
          </Link>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 border-b border-gray-200">
          <div className="flex flex-col space-y-2">
            <Link
              to="/baby"
              className="text-sm font-medium text-black hover:text-pink-600"
            >
              Baby
            </Link>
            <Link
              to="/toodler"
              className="text-sm font-medium text-black hover:text-pink-600"
            >
              Toddler
            </Link>
            <Link
              to="/kid"
              className="text-sm font-medium text-black hover:text-pink-600"
            >
              Kid
            </Link>
            <Link
              to="/brand"
              className="text-sm font-medium text-black hover:text-pink-600"
            >
              Brands
            </Link>
            <Link
              to="/sale"
              className="text-sm font-medium text-black hover:text-pink-600"
            >
              Sale
            </Link>
            <input
              type="text"
              placeholder="Find your product"
              className="mt-2 w-full border rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
