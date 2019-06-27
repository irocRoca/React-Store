import React from "react";
import { connect } from "react-redux";
import {
  addCart,
  removeCart,
  fetchList,
  sortLow,
  sortHigh,
  changeQty
} from "../actions";
import "../main.css";
import CartBar from "./Cart/CartBar";
import NavBar from "./Head/NavBar";
import Heading from "./Head/Heading";
import Sort from "./ItemList/Sort";
import Footer from "./Footer/Footer";

class App extends React.Component {
  state = {
    toggle: false
  };

  handleToggleBar = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  handleCloseBar = () => {
    if (this.state.toggle) {
      this.setState({ toggle: false });
    }
  };

  handleInputChange = data => {
    this.props.changeQty(data);
  };

  handleSortChange = (e, data) => {
    if (data.value === "low") {
      return this.props.sortLow();
    }
    if (data.value === "high") {
      return this.props.sortHigh();
    } else {
      return this.props.fetchList();
    }
  };

  handleRemoveFromCart = id => {
    this.props.removeCart(id);
  };

  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    return (
      <div>
        <div>
          <CartBar
            toggleBar={this.handleToggleBar}
            toggle={this.state.toggle}
            cart={this.props.cart}
            removeFromCart={this.handleRemoveFromCart}
            inputChange={this.handleInputChange}
          />
        </div>
        <div onClick={this.handleCloseBar}>
          <NavBar toggleBar={this.handleToggleBar} />
          <Heading />
          <Sort sort={this.handleSortChange} />
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cart: state.cart, store: state.store };
};

export default connect(
  mapStateToProps,
  {
    addCart,
    removeCart,
    fetchList,
    sortLow,
    sortHigh,
    changeQty
  }
)(App);
