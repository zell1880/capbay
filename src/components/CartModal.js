import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CartModal({ show, handleClose, cart, setCart }) {
  const removeFromCart = (item) => {
    const { [item.id]: currentItem, ...rest } = cart;
    setCart(rest);
  };

  const minusItem = (item) => {
    if (item.quantity === 1) {
      return removeFromCart(item);
    }
    setCart({
      ...cart,
      [item.id]: { ...item, quantity: cart[item.id].quantity - 1 },
    });
  };
  const addItem = (item) => {
    setCart({
      ...cart,
      [item.id]: { ...item, quantity: cart[item.id].quantity + 1 },
    });
  };
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let totalDiscount = 0;
    if (cart["B001"]?.quantity >= 2) {
      totalDiscount =
        totalDiscount + (cart["B001"].quantity / 2).toFixed(0) * 2.5;
    }
    if (cart["B002"]?.quantity >= 2) {
      totalDiscount =
        totalDiscount + (cart["B002"].quantity / 2).toFixed(0) * 2;
    }
    if (cart["F001"]?.quantity >= 2) {
      totalDiscount = totalDiscount + cart["F001"].quantity * 0.3;
    }
    setDiscount(totalDiscount);
  }, [cart]);

  return (
    <>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.keys(cart).length !== 0 ? (
            <>
              {Object.values(cart).map((item) => {
                return (
                  <Stack key={item.id} direction="horizontal" gap={3}>
                    <div className="me-auto">{item.name}</div> RM
                    {item.price.toFixed(2)}{" "}
                    <Button onClick={() => addItem(item)}>+</Button>
                    {item.quantity}
                    <Button onClick={() => minusItem(item)}>-</Button>
                  </Stack>
                );
              })}
              <Stack direction="horizontal" gap={3}>
                <div className="me-auto">Subtotal</div> RM
                {Object.values(cart)
                  .reduce((acc, item) => item.price * item.quantity + acc, 0)
                  .toFixed(2)}
              </Stack>
              <Stack direction="horizontal" gap={3}>
                <div className="me-auto">Discount</div> RM
                {discount.toFixed(2)}
              </Stack>
              <Stack direction="horizontal" gap={3}>
                <div className="me-auto">Total</div> RM
                {(
                  Object.values(cart).reduce(
                    (acc, item) => item.price * item.quantity + acc,
                    0
                  ) - discount
                ).toFixed(2)}
              </Stack>
            </>
          ) : (
            <div>The Cart is Empty</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClose()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CartModal;
