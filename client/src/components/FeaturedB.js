import React from 'react'
import './FeaturedB.css'
import { Link } from 'react-router-dom'

export default function FeaturedB() {
    return (
        <div>
            <div className='featured_container'>
                <div className='featured_header'>
                    <h1 className='featured_h1'>Bestsellers</h1>
                </div>
                <h4 className='featured_h4'>Our most popular products based on sales.Updated frequently.</h4>

                <div className='row'>
                    <div className='col-lg-2 book_option'>
                        <h3>Books</h3>


                        <ul className='featured_ul'>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Action & Adventure</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Arts ,Film & Photography</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Biographies, Diaries & True Accounts</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Business & Economics</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Children's Books</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Comics & Mangas</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Computing, Internet & Digital Media</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Crime, Thriller & Mystery</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Fantasy, Horror & Science Fiction</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Health, Family & Personal Development</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Historical Fiction</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>History</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Literature & Fiction</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Medicine & Health Sciences</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Romance</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>School Books</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Science & Mathematics</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Society & Social Sciences</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Sports</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' to={'#'}>Travel</Link></li>
                        </ul>
                    </div>

                    <div className='col-lg-10 secondfeatured_col'>
                        <div className='row second_featured_row'>
                            <div className='book-section col-lg-3 col-md-4 col-sm-3' >
                                <div className="card featured_card" style={{ width: "18rem" }}>
                                    <img src="..." className="card-img-top featured_card_img" alt="..." />
                                    <div className="card-body featured_card_body">
                                        <h5 className="card-title featured_h5">Card title</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>

                                        <div className='d-flex justify-content-around mb-5 '>
                                            <h3 className='sub-featuredbook_h1'>$120</h3>
                                            <button className='featured_card_button btn btn-primary'>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='book-section col-lg-3 col-md-4 col-sm-3'>
                                <div className="card featured_card" style={{ width: "18rem" }}>
                                    <img src="..." className="card-img-top featured_card_img" alt="..." />
                                    <div className="card-body featured_card_body">
                                        <h5 className="card-title featured_h5">Card title</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>

                                        <div className='d-flex justify-content-around mb-5 '>
                                            <h3 className='sub-featuredbook_h1'>$120</h3>
                                            <button className='featured_card_button btn btn-primary'>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='book-section col-lg-3  col-md-4 col-sm-3'>
                                <div className="card featured_card" style={{ width: "18rem" }}>
                                    <img src="..." className="card-img-top featured_card_img" alt="..." />
                                    <div className="card-body featured_card_body">
                                        <h5 className="card-title featured_h5">Card title</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>

                                        <div className='d-flex justify-content-around mb-5 '>
                                            <h3 className='sub-featuredbook_h1'>$120</h3>
                                            <button className='featured_card_button btn btn-primary'>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='book-section col-lg-3 col-md-4 col-sm-3'>
                                <div className="card featured_card" style={{ width: "18rem" }}>
                                    <img src="..." className="card-img-top featured_card_img" alt="..." />
                                    <div className="card-body featured_card_body">
                                        <h5 className="card-title featured_h5">Card title</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>

                                        <div className='d-flex justify-content-around mb-5 '>
                                            <h3 className='sub-featuredbook_h1'>$120</h3>
                                            <button className='featured_card_button btn btn-primary'>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='book-section col-lg-3 col-md-4 col-sm-3'>
                                <div className="card featured_card" style={{ width: "18rem" }}>
                                    <img src="..." className="card-img-top featured_card_img" alt="..." />
                                    <div className="card-body featured_card_body">
                                        <h5 className="card-title featured_h5">Card title</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>

                                        <div className='d-flex justify-content-around mb-5 '>
                                            <h3 className='sub-featuredbook_h1'>$120</h3>
                                            <button className='featured_card_button btn btn-primary'>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='book-section col-lg-3 col-md-4 col-sm-3'>
                                <div className="card featured_card" style={{ width: "18rem" }}>
                                    <img src="..." className="card-img-top featured_card_img" alt="..." />
                                    <div className="card-body featured_card_body">
                                        <h5 className="card-title featured_h5">Card title</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>

                                        <div className='d-flex justify-content-around mb-5 '>
                                            <h3 className='sub-featuredbook_h1'>$120</h3>
                                            <button className='featured_card_button btn btn-primary'>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='book-section col-lg-3 col-md-4 col-sm-3'>
                                <div className="card featured_card" style={{ width: "18rem" }}>
                                    <img src="..." className="card-img-top featured_card_img" alt="..." />
                                    <div className="card-body featured_card_body">
                                        <h5 className="card-title featured_h5">Card title</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>

                                        <div className='d-flex justify-content-around mb-5 '>
                                            <h3 className='sub-featuredbook_h1'>$120</h3>
                                            <button className='featured_card_button btn btn-primary'>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
