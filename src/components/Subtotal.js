import React from "react";
import "../assets/Subtotal.css";
import CurrencyFormat from "react-currency-format";
//import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {`Subtotal of : ${basket?.length} items is:`}
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={(e) => history.push("/")}>Proceed to Checkout</button>

      {/*this below code corresponds to backend*/}
      {/* <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>*/}
    </div>
  );
};

export default Subtotal;
