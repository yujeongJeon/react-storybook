import "./ListGroup.style.css";

import React from "react";
import { CircleButton } from "../../atoms";
import { Row, Col } from "reactstrap";

const ListGroup = ({ contents }) => {
  return (
    <Row>
      {contents.map(({ title, description }, index) => (
        <Col sm="12" key={index} className="d-flex-start">
          <CircleButton className="mr-1" />
          <span className="font-xl mr-1">{title}</span>
          {description}
        </Col>
      ))}
    </Row>
  );
};

export default ListGroup;
