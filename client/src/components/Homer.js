import React from 'react'
import './Homer.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
export default function Homer() {
  return (
    <div>
      <section className='home'>
        <div className='row home_row'>
          <div className='home_content'>
            <h3 className='home_h3'>Upto 75% off</h3>
            <p className='home_content_p'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying </p>
            <a href='#' className='home_content btn'>Shop now</a>
          </div>

          <div className='book_slider swiper'>
            <div className='wrapper '>
              <Swiper className='Home_swiper'
                // install Swiper modules
                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
               

                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>              <a href='#' className=''><img src='./images/background1.jpg' className='home_img' /></a>
                </SwiperSlide>
                <SwiperSlide>              <a href='#' className='' ><img src='./images/background2.jpg' className='home_img' /></a>
                </SwiperSlide>
                <SwiperSlide>              <a href='#' className='' ><img src='./images/background3.jpg' className='home_img' /></a>
                </SwiperSlide>
                <SwiperSlide>              <a href='#' className='' ><img src='./images/background4.jpg' className='home_img' /></a>
                </SwiperSlide>
                <SwiperSlide>              <a href='#' className='' ><img src='./images/background5.jpg' className='home_img' /></a>
                </SwiperSlide>
                <SwiperSlide>              <a href='#' className='' ><img src='./images/background6.jpg' className='home_img' /></a>
                </SwiperSlide>
                
              </Swiper>
              {/* <a href='#' className=''><img src='./images/background1.jpg' className='home_img' /></a>
              <a href='#' className='' ><img src='./images/background2.jpg' className='home_img' /></a>
              <a href='#' className='' ><img src='./images/background3.jpg' className='home_img' /></a>
              <a href='#' className='' ><img src='./images/background4.jpg' className='home_img' /></a>
              <a href='#' className='' ><img src='./images/background5.jpg' className='home_img' /></a>
              <a href='#' className='' ><img src='./images/background6.jpg' className='home_img' /></a> */}
            </div>
            <img src='./images/backgroundb2.jpg' alt='' className='stand' />
          </div>
        </div>
      </section>




      <section className='icons_container'>

        <div className='icons_container_icons'>
          <i className='fas fa-plane'></i>
          <div className='icons_container_content'>
            <h3 className='icons_container_h3'>Free shipping</h3>
            <p>Order over $100</p>
          </div>
        </div>
        <div className='icons_container_icons'>
          <i className='fas fa-lock'></i>
          <div className='icons_container_content'>
            <h3 className='icons_container_h3'>Secure Payment</h3>
            <p>100 secure payment</p>
          </div>
        </div>
        <div className='icons_container_icons'>
          <i className='fas fa-redo-alt'></i>
          <div className='icons_container_content'>
            <h3 className='icons_container_h3'>Easy returns</h3>
            <p>10 days returns</p>
          </div>
        </div>
        <div className='icons_container_icons'>
          <i className='fas fa-headset'></i>
          <div className='icons_container_content'>
            <h3 className='icons_container_h3'>24/7 support</h3>
            <p>call us any time</p>
          </div>
        </div>



      </section>
    </div>
  )
}
