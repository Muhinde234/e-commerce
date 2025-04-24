import { Link } from "react-router-dom";
import Container from "../component/layout/Container";
import Input from "../component/layout/Input";
import { Gift, BadgePercent, ShoppingBag, ListOrdered } from "lucide-react";

const Login = () => {
  return (
    <Container>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center">
      
        <div className="w-full lg:w-1/2 p-8 flex flex-col items-center">
          <div className="max-w-md w-full">
            <h1 className="text-3xl font-bold text-center mb-2">Login</h1>
            <p className="text-gray-600 text-center mb-8">
              Enter your email and password to login
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">E-mail</label>
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
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              
              <div className="text-right mb-6">
                <Link to="/forgot-password" className="text-pink-600 hover:underline">
                  Forgot your password?
                </Link>
              </div>
              
              <button className="w-full bg-pink-600 text-white py-3 px-4 rounded hover:bg-pink-700 transition duration-200">
                LOGIN
              </button>
            </div>
          </div>
        </div>
        
     
        <div className="hidden lg:block h-64 w-px bg-gray-300 mx-8"></div>
        <div className="w-full lg:w-1/2 p-8 flex flex-col items-center">
          <div className="max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4">New Here?</h2>
            <p className="text-gray-600 mb-8">
              Create a BabyBloom account and earn rewards, exclusive offers, access to double points days and more!
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
                <ListOrdered className="text-pink-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Easy Order management</span>
              </li>
            </ul>
            
            <Link 
              to="/Register " 
              className="inline-block border-2 border-pink-600 text-pink-600 font-medium py-3 px-12 rounded-md hover:bg-pink-600 hover:text-white transition-colors"
            >
              CREATE
              
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;