import { Link } from "react-router-dom";
import Container from "../component/layout/Container";
import Input from "../component/layout/Input";
import { Gift, BadgePercent, ShoppingBag, List } from "lucide-react";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";

const Register = () => {
  return (
    <div>
      <Navbar/>
    <Container>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center">
     
        <div className="w-full lg:w-1/2 p-8 flex flex-col items-center">
          <div className="max-w-md w-full">
            <h1 className="text-3xl font-bold text-center mb-2">Create Account</h1>
            <p className="text-gray-600 text-center mb-8">
              Join BabyBloom to start earning rewards today
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">First Name</label>
                <Input 
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Last Name</label>
                <Input 
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <Input 
                  type="password"
                  placeholder="Create a password"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
              </div>
              
              <button className="w-full bg-pink-600 text-white py-3 px-4 rounded hover:bg-pink-700 transition duration-200 mt-4">
                CREATE ACCOUNT
              </button>
              
              <p className="text-center text-gray-600 mt-4">
                Already have an account? {' '}
                <Link to="/login" className="text-pink-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
        
       
        <div className="hidden lg:block  h-170 w-px bg-gray-300 mx-8"></div>
        
       
        <div className="w-full lg:w-1/2 p-8 flex flex-col items-center">
          <div className="max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Why Join BabyBloom?</h2>
            <p className="text-gray-600 mb-6">
              Create a BabyBloom account and enjoy these benefits:
            </p>
            
            <ul className="space-y-5 mb-10 text-left pl-4">
              <li className="flex items-start gap-4">
                <Gift className="text-pink-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>earn points on every purchase</span>
              </li>
              <li className="flex items-start gap-4">
                <BadgePercent className="text-pink-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>easily redeem points at checkout</span>
              </li>
              <li className="flex items-start gap-4">
                <ShoppingBag className="text-pink-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>shop exclusive VIP sale</span>
              </li>
              <li className="flex items-start gap-4">
                <List className="text-pink-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Easy Order management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
    <Footer/>
    </div>
  );
};

export default Register;