import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function CartToast({ show, setShow }) {
  return (
    <Row>
      <Col xs={6}>
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          style={{ position: "fixed", top: 10, right: 10 }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Cart Successfully Checked Out</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default CartToast;
