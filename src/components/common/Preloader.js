import React from "react";
import { Cell, Row } from "../styled-components/Table";
import loading from "./../../assets/Search.gif";

const Preloader = () => {
  return (
    <Row>
      <Cell>
        <img src={loading} alt="" />
      </Cell>
    </Row>
  );
};

export default Preloader;
