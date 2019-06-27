import React from "react";
import { addCart } from "../../actions";
import { connect } from "react-redux";
import { Grid, Segment, Image, Button } from "semantic-ui-react";

const List = props => {
  if (props.store.length <= 0) {
    return <div>There are no items avaiable in the store.</div>;
  } else {
    let modList = props.store.map(item => {
      return (
        <Grid.Column key={item.id}>
          <Segment>
            <Image src={item.url} fluid alt={item.alt} />
            <div className="contain center">
              <h3>{item.title}</h3>
              <div className="divide" />
              <p>{`$${item.price.toFixed(2)}`}</p>
              <Button color={"red"} onClick={() => props.addCart(item)}>
                Add To Cart
              </Button>
            </div>
          </Segment>
        </Grid.Column>
      );
    });
    return (
      <Grid stackable columns={5}>
        {modList}
      </Grid>
    );
  }
};

const mapStateToProps = state => {
  return { store: state.store };
};

export default connect(
  mapStateToProps,
  {
    addCart
  }
)(List);
