import React from "react";
import "./Product.css";

function ProductHorizontal(props) {
  const items = Array.from(props.image);
  return (
    <div>
      <div className="product__horizontal">
        <p class="product__category">
          {props.category} <small>Buy now</small>
        </p>
        <div className="product__horizontal_flex">
          <div className={props.itemCname}>
            {items.map((images) => (
              <img className="product__image" src={images} alt="product"></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductHorizontal;
