import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Checkoutproduct from "./Checkoutproduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout_page">
      <p style={{ fontWeight: "500", marginBottom: "5px" }}>
        Pay faster for all your shopping needs{" "}
        <span style={{ color: "red" }}> with Amazon Pay balance Get</span>
      </p>
      <p>Instant refund on cancellations | Zero payment failures</p>
      <br></br>
      <div className="checkout">
        <div className="checkout__left">
          {basket.length === 0 ? (
            <div className="empty__bakset">
              <svg viewBox="0 0 24 24">
                <path d="M12,0L8,4H10V8H14V4H16M1,2V4H3L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42C7.29,15 7.17,14.89 7.17,14.75L7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.59 17.3,11.97L21.16,4.96L19.42,4H19.41L18.31,6L15.55,11H8.53L8.4,10.73L6.16,6L5.21,4L4.27,2M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18M17,18A2,2 0 0,0 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20A2,2 0 0,0 17,18Z" />
              </svg>
              <div className="empty__basket_content">
                <h2>Your Amazon Cart is empty</h2>
                <h6>Shop today's deals</h6>
              </div>
            </div>
          ) : (
            <div className="checkout__cartItemContainer">
              <h2>Shopping Cart</h2>
              <p>No items selected. Make sure to Select all items</p>
              <br></br>
              {basket.map((item) => (
                <Checkoutproduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        <div className="checkout__right">
          <div className="checkout__subtotal">
            <Subtotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
