import Navbar from "../component/layout/Navbar";
import baby1 from "../assets/baby1.webp";
import Container from "../component/layout/Container";
import { Link } from "react-router-dom";
// import Login from "./Login";
import Footer from "../component/layout/Footer";
// import Register from "../pages/Register"
import MainSection from "../component/common/MainSection";


const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div
          className="w-full h-[500px]  lg:min-h-screen bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${baby1})` }}
        >
          <div className="h-full w-full flex flex-col items-center justify-center pb-48 pt-42 ">
            <h1 className="text-white text-xl font-bold pb-5  ">
              Welcome to the world
            </h1>
            <h1 className="text-5xl  text-white font-extrabold ">
              Newborn Essentials
            </h1>
            <div className="flex flex-col lg:flex-row gap-10 mt-10 text-pink-500 ">
              <div className=" bg-white rounded-lg p-3">
                <Link to="/Register" className="cursor-pointer">
                
                  Shop Baby Girl
                </Link>
              </div>
              <div className=" bg-white rounded-lg p-3">
                <Link to="/Register" className="cursor-pointer">
                  Shop Baby Boy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Container>
          <div className="max-w-4xl mx-auto text-center mt-18">
            <h1 className="text-lg mb-3 text-pink-500 font-bold ">
              Welcome to BabyBloom!
            </h1>
            <p className="mt-2 text-md">
              At BabyBloom, we understand that your little one deserves the very
              best. Our carefully curated collection of baby clothes combines
              comfort, quality, and style. From organic cotton onesies to
              adorable special occasion outfits, we've got everything your baby
              needs to stay cozy and cute.
            </p>
          </div>
        </Container>
        <div className="bg-pink-300 mt-20">
          <div className="bg-pink-300 mt-20">
            <Container className="text-center">
              <div>
                <h1 className="text-white text-xl font-bold pt-12">
                  Become a  BabyBloom VIP
                </h1>
                <p className="text-white text-lg pt-4">
                  Get 15% off your first order + exclusive access to
                  members-only sales
                </p>
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                  <input
                    placeholder="Enter your Email"
                    className="bg-white rounded-lg placeholder:text-gray-600 text-lg px-3 py-2 mt-12 mb-12 w-full max-w-md"
                  />
                  <button className="bg-white rounded-lg px-6 py-2 text-lg font-bold mt-12 mb-12 hover:bg-gray-100 transition-colors">
                    Unlock Offer
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div>
        <MainSection/>
        
        </div>
        {/* <Login />
        <Register/> */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
