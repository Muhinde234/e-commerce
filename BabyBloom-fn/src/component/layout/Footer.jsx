import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-30 py-12 px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
      
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-base mb-4">ACCOUNT</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/orders" className="hover:text-gray-900 transition-colors">Orders</Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-gray-900 transition-colors">Wishlist</Link>
            </li>
            <li>
              <Link to="/referral" className="hover:text-gray-900 transition-colors">Give $10, Get $10</Link>
            </li>
            <li>
              <Link to="/rewards" className="inline-block mt-2">
                <span className="bg-pink-200 hover:bg-pink-300 text-gray-800 font-medium px-3 py-1.5 rounded-md transition-colors">
                  BabyBloom Rewards
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-base mb-4">HELP CENTER</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/contact" className="hover:text-gray-900 transition-colors">Contact Us</Link>
            </li>
            <li>
              <Link to="/order-help" className="hover:text-gray-900 transition-colors">Order Help</Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-gray-900 transition-colors">Returns & Exchanges</Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-gray-900 transition-colors">Shipping & Delivery</Link>
            </li>
            <li>
              <Link to="/size-chart" className="hover:text-gray-900 transition-colors">Size Chart</Link>
            </li>
            <li>
              <Link to="/gift-cards" className="hover:text-gray-900 transition-colors">E-Gift Cards</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-gray-900 transition-colors">FAQ</Link>
            </li>
            <li>
              <Link to="/store-locator" className="hover:text-gray-900 transition-colors">Store Locator</Link>
            </li>
          </ul>
        </div>

    
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-base mb-4">ABOUT US</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/our-story" className="hover:text-gray-900 transition-colors">Our Story</Link>
            </li>
            <li>
              <Link to="/rewards-join" className="hover:text-gray-900 transition-colors">Join My BabyBloom Rewards</Link>
            </li>
            <li>
              <Link to="/cares" className="hover:text-gray-900 transition-colors">BabyBloom Cares</Link>
            </li>
            <li>
              <Link to="/military" className="hover:text-gray-900 transition-colors">BabyBloom Loves Our Military</Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-gray-900 transition-colors">Reviews</Link>
            </li>
          </ul>
        </div>

    
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-base mb-4">CONNECT WITH US</h3>
          <div className="flex gap-4">
            <a 
              href="https://facebook.com" 
              aria-label="Facebook" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              aria-label="Twitter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com" 
              aria-label="Instagram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

       
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-base mb-4">NEWSLETTER</h3>
          <p className="text-gray-600 mb-4">
            Sign up for exclusive offers, early access to new arrivals, and parenting tips.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="font-logo text-xl text-gray-800">  BabyBloom </span>
            <span className="text-gray-500">© {new Date().getFullYear()} BabyBloom</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link 
              to="/terms" 
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link 
              to="/privacy" 
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/accessibility" 
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}