import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Form, Button, Alert } from "react-bootstrap";
const header = () => {
  return (
    <Row>
      <Col>
        <Alert variant="success" className="text-center  rounded-0">
          <div className="hstack gap-3">
            <h2> user Info Repository</h2>
            <Link to="/users"> Get User Info |</Link>
            <Link to="/popular-most">Get User Info popular-most </Link>
          </div>
        </Alert>
      </Col>
    </Row>
  );
};
export default header;
