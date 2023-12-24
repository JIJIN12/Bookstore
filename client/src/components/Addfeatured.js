import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Addfeatured.css";
export default function Addfeatured() {
  const [addfeatured_state, set_addfeaturedstate] = useState({});
  const [file, set_file] = useState({});
  console.log(addfeatured_state);

  const userid = localStorage.getItem("userid");

  const featured_input = (e) => {
    const { name, value } = e.target;
    set_addfeaturedstate({ ...addfeatured_state, [name]: value });
  };
  const file_input = (e) => {
    set_addfeaturedstate({
      ...addfeatured_state,
      featured_image: e.target.files[0],
      //   filename: e.target.files[0].name,
    });

    console.log(e.target.files[0].name);
  };

  const pdffile_input = (e) => {
    set_addfeaturedstate({
      ...addfeatured_state,
      featured_pdf: e.target.files[0],
    });
  };

  const featured_submit = (e) => {
    if (file) {
      // to add file -
      const data = new FormData();
      const filename = file.name;
      data.append("user_id", userid);
      data.append("featuredname", addfeatured_state.featuredname);
      data.append("featured_image", addfeatured_state.featured_image);
      data.append("featured_pdf", addfeatured_state.featured_pdf);
      data.append("featuredgenre", addfeatured_state.featuredgenre);
      data.append("author", addfeatured_state.author);
      data.append("featureddescription", addfeatured_state.featureddescription);
      data.append("name", filename);
      data.append("file", file);
      console.log(data);
      for (var pair of data.entries()) {
        console.log(pair[0] + ", " + pair[1]); //to console formdata
      }
      axios
        .post("https://bookstore-7000.onrender.com/featured/addfeatured", data)
        .then((Response) => {
          console.log(Response);
        })
        .catch((error) => {
          console.log(error); //-to add file
        });
    }

    e.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <div className="featured-form-container">
          <form
            action=" "
            className="featured_form"
            encType="multipart/form-data"
          >
            <h3 className="featured_title"> FEATURED BOOKS FORM</h3>
            <span>userid</span>
            <input
              type="text"
              name="user_id"
              className="box"
              value={userid}
              placeholder="Enter your Username"
              onChange={featured_input}
              disabled
            />
            <span>Book Name</span>
            <input
              type="text"
              name="bookname"
              className="box"
              placeholder="Enter  bookname"
              onChange={featured_input}
            />
            <span>image</span>
            <input
              type="file"
              name="featured_image"
              className="box"
              placeholder="image"
              accept="image/*"
              onChange={file_input}
            />
            <span>featured pdf</span>
            <input
              type="file"
              name="featured_pdf"
              className="box"
              placeholder="pdf"
              accept=".pdf"
              onChange={pdffile_input}
            />
            <span>Genre</span>
            <input
              type="text"
              name="featuredgenre"
              className="box"
              placeholder="Enter Genre"
              onChange={featured_input}
            />
            <span>Author</span>
            <input
              type="text"
              name="author"
              className="box"
              placeholder="Enter featured"
              onChange={featured_input}
            />
            <span>featured Description</span>
            <input
              type="text"
              name="featureddescription"
              className="box"
              placeholder="Enter featureddescription"
              onChange={featured_input}
            />

            <div className="checkbox">
              <input type="checkbox" name="" />
              <label className="featured_label">remember me</label>
            </div>

            <input
              type="submit"
              value={"signin"}
              className="featured_btn"
              onClick={featured_submit}
            />
            
          </form>
        </div>
      </div>
    </div>
  );
}
