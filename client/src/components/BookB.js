import React, { useEffect, useState } from "react";
import "./BookB.css";
import { ToastContainer, toast } from "react-toastify";
import { postbook, postchecked } from "./redux/slice/bookslice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { post_favourite } from "./redux/slice/favSlice";
import { post_cart } from "./redux/slice/cartSlice";
export default function BookB() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { book_data, checked_data } = useSelector((state) => state.book);
  const { Favourite_data } = useSelector((state) => state.Favourite);
  const { cart_data } = useSelector((state) => state.cart);

  const [showFullDescriptions, setShowFullDescriptions] = useState({});

  // const [bookstate , set_bookstate]= useState()

  // const [favourite, set_favourite] = useState({})

  const [checked1, set_checked] = useState({});
  console.log(checked1);
  console.log(checked_data);
  console.log(Favourite_data);

  // const notify = () => toast("Added to favourite");

  useEffect(() => {
    dispatch(postbook());
  }, []);

  const bookgenre_input = async (event) => {
    const { name, value } = event.target;
    if (event.target.checked) {
      set_checked({ ...checked1, [name]: value });
    } else {
      delete checked1[event.target.name];
      set_checked(checked1);
      dispatch(postchecked(checked1));
    }
  };

  useEffect(() => {
    dispatch(postchecked(checked1));
  }, [checked1]);

  const toggleColor = (id) => {
    console.log(id);
    dispatch(post_favourite(id));
  };

  const add_Cart = (id) => {
    console.log(id);
    dispatch(post_cart(id));
  };

  return (
    <div>
      <h1 className="book_h1">Books</h1>
      <Link to={"/book/addbook"}>
        {" "}
        <button class="addbook_button" role="button">
          Addbook
        </button>
      </Link>
      <div className="bookbgrid">
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

        <div className="col-lg-3 filter_book">
          <h1 className="filter_h1">Filter</h1>
          <h3>Genre</h3>
          <input
            type="checkbox"
            value={"action"}
            name="action"
            onChange={bookgenre_input}
          />
          <label className="book_label">Action</label>
          <br />
          <input
            type="checkbox"
            value={"fantasy"}
            name="fantasy"
            onChange={bookgenre_input}
          />
          <label className="book_label">Fantasy</label>
          <br />
          <input
            type="checkbox"
            value={"fiction"}
            name="fiction"
            onChange={bookgenre_input}
          />
          <label className="book_label">Fiction</label>
          <br />

          <input
            type="checkbox"
            value={"romance"}
            name="romance"
            onChange={bookgenre_input}
          />
          <label className="book_label">Romance</label>
          <br />

          <input
            type="checkbox"
            value={"scifi"}
            name="scifi"
            onChange={bookgenre_input}
          />
          <label className="book_label">Sci-fi</label>
          <br />
          <input
            type="checkbox"
            value={"thriller"}
            name="thriller"
            onChange={bookgenre_input}
          />
          <label className="book_label">Thriller</label>
          <br />

          <h5>Availability</h5>
          <input type="checkbox" />
          <label className="book_label">Stock available</label>
          <br />

          <input type="checkbox" />
          <label className="book_label">Out of stock</label>
          <br />
          <br />
        </div>
        <div className="grid_wrap">
          <div className="grid_wrap_row">
            {checked_data[0]
              ? checked_data?.map((data, key) => (
                  <div className="col book_col">
                    <div className="card book_card" style={{ width: "18rem" }}>
                      <img
                        src={data.image}
                        className="card-img-top card_img"
                        alt="..."
                      />

                      <div className="card-body book_card_body">
                        <h5 className="card-title book_h5">{data.bookname}</h5>
                        <p>Genre : {data.bookgenre}</p>
                        <p>Author : {data.author}</p>
                        {/* <p className="card-text book_card_P">
                                                        Description:{data.bookdescription}
                                                    </p> */}
                        <p className="card-text book_card_P">
                          Description:{" "}
                          {showFullDescriptions[data._id]
                            ? data.bookdescription
                            : `${data.bookdescription.slice(0, 200)}... `}
                          {data.bookdescription.length > 200 && (
                            <a
                              href="#toggle-description"
                              onClick={() =>
                                setShowFullDescriptions((prevState) => ({
                                  ...prevState,
                                  [data._id]: !prevState[data._id],
                                }))
                              }
                            >
                              {showFullDescriptions[data._id]
                                ? "Show Less"
                                : "Show More"}
                            </a>
                          )}
                        </p>

                        <div className="d-flex justify-content-around mb-5 ">
                          <h3 className="sub-book_h1">
                            <a
                              className="favourite fas fa-heart"
                              onClick={() => {
                                toggleColor(data._id);
                              }}
                            ></a>
                          </h3>

                          <button
                            className="book_button btn btn-primary"
                            onClick={() => {
                              add_Cart(data._id);
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : book_data?.map((data, key) => (
                  <div className="col book_col">
                    <div className="card book_card" style={{ width: "18rem" }}>
                      {/* <img src=`/images/uploads/${data.image}` className="card-img-top card_img" alt="..." /> */}
                      <div className="card-body book_card_body">
                        <h5 className="card-title book_h5">{data.bookname}</h5>
                        <p>Genre : {data.bookgenre}</p>
                        <p>Author : {data.author}</p>
                        {/* <p className="card-text book_card_P">
                                                        Description:{data.bookdescription}
                                                    </p> */}
                        <p className="card-text book_card_P">
                          Description:{" "}
                          {showFullDescriptions
                            ? data.bookdescription
                            : `${data.bookdescription.slice(0, 200)}...`}
                        </p>
                        {data.bookdescription.length > 200 && (
                          <button
                            className="btn btn-link"
                            onClick={() =>
                              setShowFullDescriptions(!showFullDescriptions)
                            }
                          >
                            {showFullDescriptions ? "Show Less" : "Show More"}
                          </button>
                        )}

                        <div className="d-flex justify-content-around mb-5 ">
                          <h3 className="sub-book_h1">
                            <a
                              href="#"
                              className="favourite fas fa-heart"
                              onClick={() => {
                                toggleColor(data._id);
                              }}
                            ></a>
                          </h3>
                          <button className="book_button btn btn-primary">
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
