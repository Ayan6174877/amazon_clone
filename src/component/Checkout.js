import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Checkoutproduct from "./Checkoutproduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout_page">
      <h3>{user.email}</h3>
      <p style={{ fontWeight: "500", marginBottom: "5px" }}>
        Pay faster for all your shopping needs{" "}
        <span style={{ color: "red" }}> with Amazon Pay balance Get</span>
      </p>
      <p>Instant refund on cancellations | Zero payment failures</p>
      <div className="checkout">
        <div className="checkout__left">
          <div className="checkout__cartItemContainer">
            <h2>Shopping Cart</h2>
            <p>No items selected. Make sure to Select all items</p>
          </div>
          <br></br>
          {basket.map((item) => 
            <Checkoutproduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
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
