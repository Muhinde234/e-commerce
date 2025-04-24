import { Link } from "react-router-dom";
import crib2 from '../../assets/crib2.jpg'

const CribNotesSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      
        <div className="text-center mb-10">
           <h1>Be minded enough to know your spot</h1>
        </div>

        <div className=" relative flex flex-col lg:flex-row gap-8">
         
          <div className="lg:w-1/2 bg-gray-100  flex justify-center items-center">
           
            <div className="text-gray-400">
            <img src={crib2} alt=''/>
            </div>
          </div>

        
          <div className=" absolute top-2 left-5 lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Parent life & mini style
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Time-saving tips, style inspo and more this way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/blog"
                className="px-8 py-3 border border-black text-black text-sm font-medium hover:bg-gray-100 transition-colors text-center"
              >
                Read Now
              </Link>
              <Link
                to="/shop"
                className="px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors text-center"
              >
                Shop More Styles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CribNotesSection;