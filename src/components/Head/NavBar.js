import React from "react";
import { Button } from "semantic-ui-react";

const NavBar = props => {
  return (
    <nav>
      <div className="center">
        <h4 className="title">
          Rose<span style={{ color: "red" }}>&</span>Line
        </h4>
      </div>
      <Button primary className="cart_btn" onClick={props.toggleBar}>
        <i className="fas fa-shopping-cart cart" />
      </Button>
    </nav>
  );
};

export default NavBar;
