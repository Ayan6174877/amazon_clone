import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  const items = Array.from(props.image);

  return (
    <div className="product">
      <p class="product__category">{props.category}</p>
      <div className={props.itemCname}>
        {items.map((images) => (
          <img className="product__image" src={images} alt="product"></img>
        ))}
      </div>
      <Link to="/product/amazonbasics">
        <p>See more</p>{" "}
      </Link>
    </div>
  );
}

export default Product;
