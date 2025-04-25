
import Container from '../component/layout/Container'
import Navbar from '../component/layout/Navbar'

const Product = () => {
  return (
    <div>
    
    <Navbar/>
    <div className='bg-pink-100 h-55'>
    <Container className="text-center  pt-20 text-3xl text-pink-500">
      <h1> At Right Place!</h1>
    </Container>
    </div>
    </div>
  )
}

export default Product
