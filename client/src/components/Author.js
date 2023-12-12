import React, { useEffect, useState } from 'react'
import './Author.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function Author() {
    const [showFullDescriptions1, setshowFullDescriptions1] = useState({});

    const [checked1, set_checked] = useState({})
    const [authordata, set_authordata] = useState([])
    console.log(authordata);


    const authorgenre_input = async (event) => {
        const { name, value } = event.target
        if (event.target.checked) {
            set_checked({ ...checked1, [name]: value })
        }

        else {
            delete checked1[event.target.name]
            set_checked(checked1)
            // dispatch(postchecked(checked1))
        }
    }

    useEffect(() => {
        axios.get('http://localhost:2000/author').then((Response) => {
            set_authordata(Response.data.Details)
        })
    }, [])

    const toggleColor = (id) => {
        console.log(id);
        // dispatch(post_favourite(id))
    }
    return (
        <div>
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
                <div className='author-maincontainer'>
                    <div className='author-container'>


                        <h1 className='author_h1'>Authors</h1>
                        <Link to={'/author/addauthor'}> <button class="addauthor_button" role="button">Addauthor</button></Link>


                        <div className='row row-cols-1 row-cols-md-3 g-4 py-5'>

                            <div className='col-lg-3 filter_author'>

                                <h1 className='filter_h1'>Filter</h1>
                                <h3>Genre</h3>
                                <input type='checkbox' value={'action'} name='action' onChange={authorgenre_input} />
                                <label className='author_label'>Action</label><br />
                                <input type='checkbox' value={'fantasy'} name='fantasy' onChange={authorgenre_input} />
                                <label className='author_label'>Fantasy</label><br />
                                <input type='checkbox' value={'fiction'} name='fiction' onChange={authorgenre_input} />
                                <label className='author_label'>Fiction</label><br />

                                <input type='checkbox' value={'romance'} name='romance' onChange={authorgenre_input} />
                                <label className='author_label'>Romance</label><br />

                                <input type='checkbox' value={'scifi'} name='scifi' onChange={authorgenre_input} />
                                <label className='author_label'>Sci-fi</label><br />
                                <input type='checkbox' value={'thriller'} name='thriller' onChange={authorgenre_input} />
                                <label className='author_label'>Thriller</label><br />




                            </div>
                            <div className='col author_col'>
                                <div className='row author_col'>
                                    {authordata[0] ?

                                        authordata?.map((data, key) => (

                                            <div className='col author_col'>
                                                <div className="card author_card" style={{ width: "18rem" }}>
                                                    <img src={data.image} className="card-img-top card_img" alt="..." />

                                                    <div className="card-body author_card_body">
                                                        <h5 className="card-title author_h5">{data.authorname}</h5>
                                                        <p>Genre : {data.genre} </p>
                                                        {/* <p className="card-text author_card_P">
                                                            Description:{data.authordescription}
                                                        </p>
                                                        <p className="card-text author_card_P">
                                                            Description: {showFullDescriptions1[data._id] ? data.bookdescription : `${data.bookdescription.slice(0, 200)}... `}
                                                            {data.bookdescription.length > 200 && (
                                                                <a href="#toggle-description" onClick={() => setshowFullDescriptions1(prevState => ({ ...prevState, [data._id]: !prevState[data._id] }))}>
                                                                    {showFullDescriptions1[data._id] ? "Show Less" : "Show More"}
                                                                </a>
                                                            )}
                                                        </p> */}

                                                        <div className='d-flex justify-content-around mb-5 '>
                                                            <h3 className='sub-author_h1'>
                                                                <a className='favourite fas fa-heart' onClick={() => { toggleColor() }}>
                                                                </a>
                                                            </h3>

                                                            <button className='author_button btn btn-primary'>Buy</button>
                                                        </div>
                                                    </div>


                                                </div>



                                            </div>

                                        ))
                                        :
                                        null
                                        // ?.map((data, key) => (
                                        //     <div className='col author_col'>
                                        //         <div className="card author_card" style={{ width: "18rem" }}>
                                        //             <img src=`/images/uploads/${data.image}` className="card-img-top card_img" alt="..." />
                                        //             <div className="card-body author_card_body">
                                        //                 <h5 className="card-title author_h5">{data.authorname}</h5>
                                        //                 <p>Genre : {data.authorgenre}</p>
                                        //                 <p>Author : {data.author}</p>
                                        //                 <p className="card-text author_card_P">
                                        //                     Description:{data.authordescription}
                                        //                 </p>
                                        //                 <p className="card-text author_card_P">
                                        //                     Description: {showFullDescriptions11 ? data.authordescription : `${data.authordescription.slice(0, 200)}...`}
                                        //                 </p>
                                        //                 {data.authordescription.length > 200 && (
                                        //                     <button className="btn btn-link" onClick={() => setshowFullDescriptions11(!showFullDescriptions11)}>
                                        //                         {showFullDescriptions11 ? "Show Less" : "Show More"}
                                        //                     </button>
                                        //                 )}

                                        //                 <div className='d-flex justify-content-around mb-5 '>
                                        //                     <h3 className='sub-author_h1'>
                                        //                         <a href='#' className='favourite fas fa-heart' onClick={() => { toggleColor(data._id) }}></a>
                                        //                     </h3>
                                        //                     <button className='author_button btn btn-primary'>Buy</button>
                                        //                 </div>
                                        //             </div>


                                        //         </div>



                                        //     </div>

                                        // ))


                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}
