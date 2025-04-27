import Navbar from "../component/layout/Navbar";
import baby1 from "../assets/baby1.webp";
import Container from "../component/layout/Container";
import { Link } from "react-router-dom";
import Footer from "../component/layout/Footer";
import MainSection from "../component/common/MainSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
      
        <div
          className="w-full h-[500px] lg:min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${baby1})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="h-full w-full flex flex-col items-center justify-center pb-48 pt-42 relative z-10">
            <h1 className="text-white text-xl font-bold pb-5 animate-fade-in">
              Welcome to the world
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-extrabold text-center px-4 animate-fade-in-up">
              Newborn Essentials
            </h1>
            <div className="flex flex-col lg:flex-row gap-10 mt-10 text-pink-500 animate-fade-in-up delay-100">
              <div className="bg-white rounded-lg p-3 hover:scale-105 transition-transform shadow-lg">
                <Link to="/product?category=girl" className="cursor-pointer font-semibold">
                  Shop Baby Girl
                </Link>
              </div>
              <div className="bg-white rounded-lg p-3 hover:scale-105 transition-transform shadow-lg">
                <Link to="/product?category=boy" className="cursor-pointer font-semibold">
                  Shop Baby Boy
                </Link>
              </div>
            </div>
          </div>
        </div>

     
        <Container>
          <div className="max-w-4xl mx-auto text-center mt-18 px-4">
            <h1 className="text-lg mb-3 text-pink-500 font-bold">
              Welcome to BabyBloom!
            </h1>
            <p className="mt-2 text-md text-gray-700">
              At BabyBloom, we understand that your little one deserves the very
              best. Our carefully curated collection of baby clothes combines
              comfort, quality, and style. From organic cotton onesies to
              adorable special occasion outfits, we've got everything your baby
              needs to stay cozy and cute.
            </p>
          </div>
        </Container>

    
        <Container className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600">Soft, organic fabrics that are gentle on baby's skin</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-bold text-lg mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Get your order in 2-3 business days</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="font-bold text-lg mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">30-day hassle-free returns</p>
            </div>
          </div>
        </Container>

       
        <div className="bg-pink-300 mt-20">
          <div className="bg-pink-300 mt-20">
            <Container className="text-center">
              <div>
                <h1 className="text-white text-xl font-bold pt-12">
                  Become a BabyBloom VIP
                </h1>
                <p className="text-white text-lg pt-4">
                  Get 15% off your first order + exclusive access to
                  members-only sales
                </p>
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center px-4">
                  <input
                    placeholder="Enter your Email"
                    className="bg-white rounded-lg placeholder:text-gray-600 text-lg px-3 py-2 mt-12 mb-12 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <button className="bg-white rounded-lg px-6 py-2 text-lg font-bold mt-12 mb-12 hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg text-pink-600">
                    Unlock Offer
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </div>

        <div>
          <MainSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;