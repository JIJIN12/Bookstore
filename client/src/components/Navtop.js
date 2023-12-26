import React, { useEffect } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'
export default function Navtop() {
  const token = localStorage.getItem('token')
const navigate = useNavigate()
  useEffect(()=>{
    if(token==null){
      navigate('/login')
    }
  },[])
  return (
    <div>
      <div className=''>
        <header className='header'>
          <div className='header_1'>
            <a href='#' className='logo'><i className='book_title fas fa-book'></i>Bookly</a>

            <form action='' className='search_form'>
              <input type='search' className='search_input' name='' placeholder='search here' />
              <label className='search_title fas fa-search'></label>
            </form>


            <div className='icons'>
              <div className='search_title fas fa search'></div>
              <a href='/book/favourite' className='shpping_cart fas fa-heart'></a>
              <a href='/cartcompo' className='fas fa-shopping-cart'></a>
              <a href='/profile' className='user fas fa-user'></a>


              {/* <div className='dropdown'>
                <a className='user fas fa-user' id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">jhkjhk</a>

                <div className="dropdown-menu" aria-labelledby="">
                  <button className="dropdown-item" >Logout</button>
                  <button className="dropdown-item"  ><a href='/profile' style={{ textDecoration: "none", color: "black" }}>Profile</a></button>
                </div>
              </div> */}



            </div>
          </div>

          



          <div className='header_2'>
            <nav className='navbar'>
              <a href='/' className='header_2_a'>HOME</a>
              <a href='/featured' className='header_2_a'>FEATURED</a>
              {/* <a href='/arrival ' className='header_2_a'>ARRIVALS</a> */}
              <a href='/author' className='header_2_a'>AUTHOR</a>
              <a href='/book' className='header_2_a'>BOOKS</a>
              <a href='/register' className='header_2_a'>REGISTRATION</a>
            </nav>
          </div>
        </header>
      </div>
    </div>
  )
}
