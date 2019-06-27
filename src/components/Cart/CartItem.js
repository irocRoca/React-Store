import React from "react";

const CartItem = props => {
  if (props.cart.length <= 0) {
    return (
      <div>
        <p style={{ color: "white", textAlign: "center" }}>
          There are not items in your cart.
        </p>
      </div>
    );
  } else {
    let list = props.cart.map(item => {
      item.total = item.price * item.qty;
      return (
        <div className="item_hold" key={item.id}>
          <i
            className="fas fa-times item_btn"
            onClick={() => props.removeFromCart(item.id)}
          />
          <div className="picture">
            <img
              src={item.url}
              alt={item.alt}
              style={{ height: "60px", width: "50px" }}
            />
          </div>
          <div className="desc">
            <p className="title">{item.title}</p>
            <p>Size: M</p>
            <div>
              Qty:
              <input
                className="qty_value"
                value={item.qty}
                name={item.id}
                onChange={props.inputChange}
              />
            </div>
          </div>
          <div className="price">{`$${item.total.toFixed(2)}`}</div>
        </div>
      );
    });
    return list;
  }
};

export default CartItem;

//item.total.toFixed(2)
