import Container from "../layout/Container"
import baby2 from "../../assets/baby2.webp"
import { Link } from "react-router-dom";

const MainSection = () => (
     
      <div>

    <Container className="py-8 px-0 lg:px-0 mt-12">
        <div className="flex flex-col lg:flex-row items-stretch">
          
            <div className="w-full lg:w-1/2 flex justify-center items-stretch">
                <div className="w-full">
                    <img 
                        src={baby2} 
                        alt="Baby wearing cute outfit" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            
        
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center  p-8">
                <div className="max-w-md w-full text-center">
                    <h2 className="font-bold text-pink-400 mb-2 uppercase tracking-wider text-sm">
                        SHOP BY AGE
                    </h2>
                    <p className="text-4xl text-pink-500 mb-6 font-light">
                        0-3 Months
                    </p>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        For your littlest ones! Unveil our beautifully crafted baby clothes, thoughtfully designed for newborns in sizes 0-3 months.
                    </p>
                    
                    <Link 
                        to="/Register" 
                        className="inline-block  border border-pink-500 text-black font-medium py-3 px-8 rounded-none hover:bg-pink-600 transition-colors uppercase tracking-wider text-sm"
                    >
                        Shop (0-3M)
                    </Link>
                </div>
            </div>
        </div>
    </Container>
    </div>
)

export default MainSection