import Navbar from "../component/layout/Navbar";
import baby1 from "../assets/baby1.webp";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div
          className="w-full h-[500px]  lg:min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${baby1})` }}
        >
          <div className="h-full w-full flex flex-col items-center justify-center pb-48 ">
            <h1 className="text-white text-xl font-bold pb-5  ">
              
              Welcome to the world
            </h1>
            <h1 className="text-5xl  text-white font-extrabold ">Newborn Essentials</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
