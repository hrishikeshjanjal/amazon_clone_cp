import React from "react";
import "../assets/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout Ad"
        ></img>

        <div className="checkout_title">
          <h3>Hello, {user?.email}</h3>
          <h2>Your Shopping Basket!</h2>

          {/*CHeckout Product */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
