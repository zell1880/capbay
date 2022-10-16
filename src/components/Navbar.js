import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ onClickCart, cartQuantity }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="menu">Capbay Mamak</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav></Nav>
        <Nav>
          <Nav.Link onClick={() => onClickCart()}>
            Cart({cartQuantity})
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
