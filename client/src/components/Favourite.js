import React, { useEffect, useState } from "react";
import "./Favourite.css";
import { useDispatch, useSelector } from "react-redux";
import { delete_fav, get_favourite } from "./redux/slice/favSlice";
import { useNavigate } from "react-router-dom";

export default function Favourite() {

    const navigate = useNavigate()
  const user_id = localStorage.getItem("userid");
  const [showFullDescriptions, setShowFullDescriptions] = useState({});
  const dispatch = useDispatch();
  const { selected_data } = useSelector((state) => state.Favourite);
  console.log(selected_data);

  useEffect(() => {
    dispatch(get_favourite(user_id));
  }, []);

  const toggle_remove = (id) => {
    dispatch(delete_fav(id));
    navigate('/book')
  };
  return (
    <div>
      <div className="row">
        {selected_data ? (
          selected_data.details?.map((data, key) => (
            <div className="col-lg-3">
              <div className="card fav_card" style={{ width: "18rem" }}>
                <img
                  src={data.image}
                  className="card-img-top card_img"
                  alt="..."
                />
                <div className="card-body fav_card_body">
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
                        onClick={() => {
                          toggle_remove(data._id);
                        }}
                      ></a>
                    </h3>

                    <button className="fav_button btn btn-primary">Buy</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="fav_card" style={{ width: "18rem" }}>
            <h1 style={{ border: "1px solid white " }}>ERROR</h1>
          </div>
        )}
      </div>
    </div>
  );
}
