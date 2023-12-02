import React from 'react'
import './Home.css'
export default function Home() {



    return (

        <div>
            <div className='Home-page bg-dark text-white container-fluid d-flex justify-content-center align-items-start'>
                <div className='row container '>
                    < div
                        className='col-lg-6 Home_col d-flex justify-content-center align-items-start flex-column '
                    >
                        <h2 className='book_h2'>BOOK STORE</h2>
                        <h3 className='book_h3'>FOR YOU</h3>
                        <p className='book_p'>Checkout The Books From Here</p>
                        <button className='book_button my-3'>View Book</button>
                    </div>
                    < div
                        className='col-lg-6 Home_col d-flex justify-content-center align-items-end flex-column'
                    >
                        <img src='./images/background.jpg' className='img-fluid home_img' />
                    </div>
                </div>
            </div>
        </div>
    )
}




// 3364,25:         "pdfjs-dist": "^2.16.105 || ^3.0.279",