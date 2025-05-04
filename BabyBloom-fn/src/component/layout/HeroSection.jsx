import { Link } from "react-router-dom"
import Container from "./Container"


const HeroSection = () => {
  return (
    <div>
        <div className=" bg-pink-400 text-white underline">
            <Container className="flex justify-center items-center h-10 gap-20">
            <Link >JUST IN:NEW ARRIVALS</Link>
            <Link >FREE SHIPPINGS ON 65$</Link>
            <Link >SWIM SHOP</Link>
            </Container>
            

  
        </div>
    </div>
  )
}

export default HeroSection