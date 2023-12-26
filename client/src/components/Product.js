import React from "react";
import './Product.css'
export default function Product() {
  return (
    <div className="product_body">
      <>
        <div className="pagination product_pagination">
          {/* <p>Home &gt; Shop &gt; Women &gt; Jacket </p> */}
        </div>
        {/* product section */}
        <section className="product-container">
          {/* left side */}
          <div className="img-card">
            <img
              src=""
              alt=""
              id="featured1-image product_img"
            />
            {/* small img */}
            <div className="small-Card">
              <img
                src=""
                alt=""
                className="small-Img product_img"
              />
              <img
                src=""
                alt=""
                className="small-Img product_img"
              />
              <img
                src=""
                alt=""
                className="small-Img product_img"
              />
              <img
                src=""
                alt=""
                className="small-Img product_img"
              />
            </div>
          </div>
          {/* Right side */}
          <div className="product-info">
            <h3>LEVI'S® WOMEN'S XL TRUCKER JACKET</h3>
            <h5>
              Price: $140 <del className="product_del">$170</del>
            </h5>
            <p className="product_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              accusantium, aspernatur provident beatae corporis veniam atque
              facilis, consequuntur assumenda, vitae dignissimos iste
              exercitationem dolor eveniet alias eos ullam nesciunt voluptatum.
            </p>
            <p className="product_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              accusamus natus dolorum. Quaerat nulla quod doloremque, officia
              quis provident amet adipisci unde esse iure delectus, maxime
              inventore optio fuga nisi?
            </p>
            <div className="sizes">
              <p className="product_p">Size:</p>
              <select name="Size" id="size" className="size-option">
                <option value="xxl">XXL</option>
                <option value="xl">XL</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
              </select>
            </div>
            <div className="quantity">
              <input className="product_input" type="number" defaultValue={1} min={1} />
              <button className="product_button">Add to Cart</button>
            </div>
            <div>
              <p className="product_p">Delivery:</p>
              <p className="product_p">
                Free standard shipping on orders over $35 before tax, plus free
                returns.
              </p>
              <div className="delivery">
                <p className="product_p">TYPE</p> <p>HOW LONG</p>{" "}
                <p>HOW MUCH</p>
              </div>
              <hr className="product_hr" />
              <div className="delivery">
                <p className="product_p">Standard delivery</p>
                <p className="product_p">1-4 business days</p>
                <p className="product_p">$4.50</p>
              </div>
              <hr className="product_hr" />
              <div className="delivery">
                <p className="product_p">Express delivery</p>
                <p className="product_p">1 business day</p>
                <p className="product_p">$10.00</p>
              </div>
              <hr className="product_hr" />
              <div className="delivery">
                <p className="product_p">Pick up in store</p>
                <p className="product_p">1-3 business days</p>
                <p className="product_p">Free</p>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
