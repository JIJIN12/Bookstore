import React, { useEffect, useState } from "react";
import "./Cart.css";
import { delete_cart, get_cart } from "./redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const [showFullDescriptions, setShowFullDescriptions] = useState({});
  const user_id = localStorage.getItem("userid");
  const dispatch = useDispatch();
  const { selected_data1 } = useSelector((state) => state.cart);
  console.log(selected_data1);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(get_cart(user_id));
  }, []);

  const rem_cart = (id) => {
    dispatch(delete_cart(id));
    navigate("/cart");
  };
  return (
    <div>
      <div className="row">
        {selected_data1 ? (
          selected_data1.details?.map((data, key) => (
            <div className="col-lg-3">
              <div className="card cart_card" style={{ width: "18rem" }}>
                <img
                  src={data.image}
                  className="card-img-top card_img"
                  alt="..."
                />
                <div className="card-body cart_card_body">
                  <h5 className="card-title fav_h5">{data.bookname}</h5>
                  <p>Genre :{data.bookgenre} </p>
                  <p>Author :{data.author} </p>
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
                    <h3 className="sub-fav_h1">
                      <a
                        className="favourite_remove fas fa-heart"
                        // onClick={() => {
                        //   toggle_remove(data._id);
                        // }}
                      ></a>
                    </h3>

                    <button
                      className="fav_button btn btn-primary"
                      onClick={() => {
                        rem_cart(data._id);
                      }}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="cart_card" style={{ width: "18rem" }}>
            <h1 style={{ border: "1px solid white " }}>ERROR</h1>
          </div>
        )}
      </div>
    </div>
  );
}
