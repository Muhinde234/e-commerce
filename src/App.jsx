import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from "./pages/LandingPage"
import Baby from "./pages/Baby"
import Toddler from "./pages/Toddler"
import Brand from "./pages/Brand"
import Kid from "./pages/Kid"
import Sale  from "./pages/Sale"
import Login  from "./pages/Login"
import Logout from "./pages/Logout"
import  Register from "./pages/Register"
import ProductPage from "./pages/ProductPage"

function App() {
  return (
    <div className="font-['Poppins']">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/tdodler" element={<Toddler />} />
        <Route path="/kid" element={<Kid />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register/>}/>
        <Route path='/product' element={<ProductPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
