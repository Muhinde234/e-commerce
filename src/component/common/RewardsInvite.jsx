import { Link } from 'react-router-dom';
import babyR from '../../assets/babyR.webp';
import reward from '../../assets/reward.svg';
import  Container from "../layout/Container"

const RewardsInvite = () => {
  return (
    <Container>
    <div className="  relative bg-white min-h-screen flex items-center justify-center px-6 lg:px-24">
      
      <img
        src={reward}
        alt="Moon and Shoes"
        className="hidden lg:block absolute right-12 top-1/3 transform -translate-y-1/2 w-80 z-0"
      />

     
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl z-10">
      
        <div className="w-full lg:w-1/2 max-w-sm">
          <h4 className="text-sm font-semibold tracking-wide text-gray-700 uppercase mb-10">
            BABYBLOOM REWARDS
          </h4>
          <h1 className="text-2xl font-light mt-3 mb-5 text-gray-900">
            You’re Invited
          </h1>
          <div className='text-start w-2xl'>
          <p className="text-gray-700 text-base mb-8 leading-relaxed ">
            Become a Babybloom rewards member to earn points and<br />
            exclusive perks every time you shop.
          </p>
          </div>
          
          <div className="flex gap-4">
            <Link className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2.5 px-8 rounded-md">
              JOIN NOW
            </Link>
            
            <Link to="/login" className="border border-[#6b8c7f] text-[#6b8c7f] font-bold py-2.5 px-8 rounded-md hover:bg-[#f3f6f4]">
              LOG IN
            </Link>
          </div>
        </div>

       
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative">
          <img
            src={babyR}
            alt="Baby"
            className="w-72 lg:w-96 rounded-lg relative z-10"
          />
        </div>
      </div>
    </div>
    </Container>
  );
};

export default RewardsInvite;
