import React from "react";
import "../assets/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import "../assets/CheckoutProduct.css";
const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={image} alt="amazonProduct" />
      <div className="checkout_product_info">
        <p className="checkout_product_title">{title}</p>
        <p className="checkout_product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout_product_ratings">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
