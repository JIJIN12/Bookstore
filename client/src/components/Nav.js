import React from 'react'
import './Nav.css'
export default function Nav() {
  return (
    <div>
      <div className='nav_container'>
            <header className='header'>
                <div className='header_1'>
                    <a href='#' className='logo'><i className='book_title fas fa-book'></i>Bookly</a>

                    <form action='' className='search_form'>
                        <input type='search' className='search_input' name='' placeholder='search here' />
                        <label className='search_title search_label fas fa-search'></label>
                    </form>


                    <div className='icons'>
                        <div className='search_title fas fa-search'></div>
                        <a href='#' className='shpping_cart fas fa-heart'></a>
                        <a href='#' className='fas fa-shopping-cart'></a>
                        <div className='user fas fa-user'></div>
                    </div>
                </div>


                <div className='header_2'>
                    <nav className='navbar'>
                        <a href='/'>HOME</a>
                        <a href=''>FEATURED</a>
                        <a href=''>ARRIVALS</a>
                        <a href=''>REVIEWS</a>
                        <a href=''>BLOGS</a>
                    </nav>
                </div>
            </header>


            <nav className='bottom_navbar'>
                <a href='' className='fas fa-home'></a>
                <a href='' className='fas fa-list'></a>
                <a href='' className='fas fa-tags'></a>
                <a href='' className='fas fa-comments'></a>
                <a href='' className='fas fa-blogs'></a>
            </nav>
        </div>
    </div>
  )
}
