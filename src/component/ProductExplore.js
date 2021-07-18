import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function ProductExplore(props) {
  const [{ basket }, dispatch] = useStateValue();
  const addtoBasket = () => {
    // dispatch the items into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  return (
    <div className="product__info">
      <img src={props.image} alt="none" />
      <p className="title">{props.title}</p>
      <div className="product__rating">
        {Array(props.rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <p className="product_price">
        <h3>
          <small>
            <sup>$</sup>
          </small>

          {(props.price + "").split(".")[0]}
          <sup> {(props.price + "").split(".")[1]}</sup>
        </h3>
      </p>
      <button onClick={addtoBasket}>Add to cart</button>
    </div>
  );
}

export default ProductExplore;
