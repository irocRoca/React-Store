import React from "react";
import CartItem from "./CartItem";
import { Sidebar, Button } from "semantic-ui-react";

const CartBar = props => {
  let price = 0;
  props.cart.map(item => {
    return (price += item.total);
  });

  return (
    <Sidebar
      animation={"overlay"}
      direction={"right"}
      visible={props.toggle}
      className="bar"
    >
      <div className="cart_title">
        <h2>
          <i className="fas fa-shopping-cart cart" /> Cart
        </h2>
        <i className="fas fa-times exit_btn" onClick={props.toggleBar} />
      </div>
      <div className="item_list">
        <CartItem
          cart={props.cart}
          toggleBar={props.toggleBar}
          removeFromCart={props.removeFromCart}
          inputChange={props.inputChange}
        />
      </div>
      <div
        className="center"
        style={{ position: "absolute", bottom: "5%", width: "100%" }}
      >
        <div style={{ color: "white", margin: "1rem 0" }}>
          Total: ${price.toFixed(2)}
        </div>
        <Button
          color={"red"}
          content={"Checkout"}
          style={{
            width: "100%",
            fontSize: "1.3rem",
            textTransform: "uppercase",
            padding: "1.2rem"
          }}
        />
      </div>
    </Sidebar>
  );
};

export default CartBar;
