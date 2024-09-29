
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <div style={{width:"100%",height:"250px",}} className='d-flex justify-content-center  align-items-center 
    flex-column mt-5 bg-secondary' >
      <div className='d-flex align-items-center justify-content-evenly'>
       <Link to={'/'}> <img src="https://brandlogos.net/wp-content/uploads/2022/10/bookmyshow-logo_brandlogos.net_rzqea-300x300.png"
        width='150px' alt="" /></Link>
      </div>
      <div>
      <div className='d-flex justify-content-evenly mt-3'>
            <Link ><i class="fa-brands fa-facebook fa-2xl me-3 " style={{color:'lightgrey'}} ></i></Link>
            <Link><i class="fa-brands fa-x-twitter fa-2xl me-3" style={{color:'lightgrey'}}></i></Link>
            <Link><i class="fa-brands fa-instagram fa-2xl me-3" style={{color:'lightgrey'}}></i></Link>
            <Link><i class="fa-brands fa-youtube fa-2xl me-3" style={{color:'lightgrey'}}></i></Link>
            <Link><i class="fa-brands fa-pinterest fa-2xl me-3" style={{color:'lightgrey'}}></i></Link>
            <Link><i class="fa-brands fa-linkedin fa-2xl me-3" style={{color:'lightgrey'}}></i></Link>
          </div>
          </div>
          <div className='d-flex justify-content-evenly mt-3'>
          <p style={{color:'white'}}>Copyright © 2024 BookMyShow clone </p>
          </div>
          
    </div>
  )
}

export default Footer