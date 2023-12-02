import React from 'react'
import './Arrival.css'
import moment from 'moment'
export default function ArrivalB() {
    const date = 'Tue Oct 17 2023 12:33:09 GMT+0530 (India Standard Time)'
    const Adate = moment(date).format('YYYY-MM-DD')
    const time = moment(date).format('HH:mm:ss')
    console.log(time);
    console.log(Adate);
    
    return (
        <div>
            <section className='arrival'>
                <h1 className='arrival_h1'>New Arrivals</h1>
                <div className='Arrival_slider swipper'>
                    <div className='wrapper arrival_wrapper'>
                        <a href='#' className='arrival_box'>
                            <div className='arrival_image'>
                                <img src='./images/background1.jpg' className='arrival_img' />
                            </div>
                            
                            <div className='Arrival_content'>
                                <h3 className='arrival_h3'>New Arrival</h3>
                                <div className='Arrival_content_price'>$15.99<span>$20.99</span></div>
                                <div className='Arrival_content_stars'>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star-half-alt Arrival_content_i'></i>
                                </div>
                            </div>
                        </a>
                       
                        <a href='#' className='arrival_box'>
                            <div className='arrival_image'>
                                <img src='./images/background1.jpg' className='arrival_img' />
                            </div>
                            <div className='Arrival_content'>
                                <h3 className='arrival_h3'>New Arrival</h3>
                                <div className='Arrival_content_price'>$15.99<span>$20.99</span></div>
                                <div className='Arrival_content_stars'>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star-half-alt Arrival_content_i'></i>
                                </div>
                            </div>
                        </a>
                       
                        <a href='#' className='arrival_box'>
                            <div className='arrival_image'>
                                <img src='./images/background1.jpg' className='arrival_img' />
                            </div>
                            <div className='Arrival_content'>
                                <h3 className='arrival_h3'>New Arrival</h3>
                                <div className='Arrival_content_price'>$15.99<span>$20.99</span></div>
                                <div className='Arrival_content_stars'>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star-half-alt Arrival_content_i'></i>
                                </div>
                            </div>
                        </a>
                       
                        <a href='#' className='arrival_box'>
                            <div className='arrival_image'>
                                <img src='./images/background1.jpg' className='arrival_img' />
                            </div>
                            <div className='Arrival_content'>
                                <h3 className='arrival_h3'>New Arrival</h3>
                                <div className='Arrival_content_price'>$15.99<span>$20.99</span></div>
                                <div className='Arrival_content_stars'>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star Arrival_content_i'></i>
                                    <i className='fas fa-star-half-alt Arrival_content_i'></i>
                                </div>
                            </div>
                        </a>
                       
                        
                  
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
