import React, { useState } from 'react'
import './FeaturedB.css'
import { Link } from 'react-router-dom'

export default function FeaturedB() {
    const [featured_data,setfeatured_data] = useState([])
    console.log(featured_data);
   

    const featured_input = (e)=>{
        const {name,value} = e.target
        setfeatured_data({...featured_data,[name]:value})
    }
    return (
        <div>
            <div className='featured_container'>
                <div className='featured_header'>
                    <h1 className='featured_h1'>Bestsellers</h1>
                </div>
                <h4 className='featured_h4'>Our most popular products based on sales.Updated frequently.</h4>

                <div className='featuredgrid'>
                    <div className=' book_option'>
                        <h3>Books</h3>


                        <ul className='featured_ul'>
                            <li className='featured_li'><Link className='featured_li_link'name='Action & Adventure' value={'Action & Adventure'} onClick={featured_input} >Action & Adventure</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Arts ,Film & Photography' value={'Arts ,Film & Photography'} onClick={featured_input}>Arts ,Film & Photography</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Biographies, Diaries & True Accounts' value={'Biographies, Diaries & True Accounts'} onClick={featured_input}>Biographies, Diaries & True Accounts</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Business & Economics' value={'Business & Economics'} onClick={featured_input}>Business & Economics</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Childrens Books' value={'Childrens Books'} onClick={featured_input}>Children's Books</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Computing, Internet & Digital Media' value={'Computing, Internet & Digital Media'} onClick={featured_input}>Computing, Internet & Digital Media</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Comics & Mangas' value={'Comics & Mangas'} onClick={featured_input}>Comics & Mangas</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Crime, Thriller & Mystery' value={'Crime, Thriller & Mystery'} onClick={featured_input}>Crime, Thriller & Mystery</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Fantasy, Horror & Science Fiction' value={'Fantasy, Horror & Science Fiction'} onClick={featured_input}>Fantasy, Horror & Science Fiction</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Health, Family & Personal Development' value={'Health, Family & Personal Development'} onClick={featured_input}>Health, Family & Personal Development</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Historical Fiction' value={'Historical Fiction'} onClick={featured_input}>Historical Fiction</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='History' value={'History'} onClick={featured_input}>History</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Literature & Fiction' value={'Literature & Fiction'} onClick={featured_input}>Literature & Fiction</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Medicine & Health Sciences' value={'Medicine & Health Sciences'} onClick={featured_input}>Medicine & Health Sciences</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Romance' value={'Romance'} onClick={featured_input}>Romance</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='School Books' value={'School Books'} onClick={featured_input}>School Books</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Science & Mathematics' value={'Science & Mathematics'} onClick={featured_input}>Science & Mathematics</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Society & Social Sciences' value={'Society & Social Sciences'} onClick={featured_input}>Society & Social Sciences</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Sports' value={'Sports'} onClick={featured_input}>Sports</Link></li>
                            <li className='featured_li'><Link className='featured_li_link' name='Travel' value={'Travel'} onClick={featured_input}>Travel</Link></li>
                        </ul>
                    </div>

                    <div className=' featured_grid_wrap'>
                        <div className=' featured_col'>
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
                                        <button className='featured_card_button btn btn-primary'>Add to cart</button>
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
