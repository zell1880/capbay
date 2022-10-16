import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./pages/Menu";
import { useState } from "react";
import CartModal from "./components/CartModal";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cart, setCart] = useState({});
  const addtoCart = (item) => {
    if (cart[item.id]) {
      return setCart({
        ...cart,
        [item.id]: { ...item, quantity: cart[item.id].quantity + 1 },
      });
    }
    setCart({ ...cart, [item.id]: { ...item, quantity: 1 } });
  };

  return (
    <div>
      <NavBar
        onClickCart={handleShow}
        cartQuantity={Object.values(cart).reduce(
          (acc, item) => acc + item.quantity,
          0
        )}
      />
      <Menu addtoCart={addtoCart} />
      <CartModal
        cart={cart}
        show={show}
        setCart={setCart}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
