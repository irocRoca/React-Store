import React from "react";
import { Container, Dropdown } from "semantic-ui-react";
import List from "./List";

const Sort = props => {
  const options = [
    { key: 1, text: "Lowest", value: "low" },
    { key: 2, text: "Highest", value: "high" }
  ];

  return (
    <Container>
      <Dropdown
        clearable
        options={options}
        selection
        placeholder="Sort by"
        className={"sort_btn"}
        onChange={props.sort}
      />
      <List />
    </Container>
  );
};

export default Sort;
