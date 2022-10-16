import { Col, Container, Row } from "react-bootstrap";
import MenuCard from "../components/MenuCard";
import kopiImg from "../assets/kopi_o.jpg";
import rotiKosongImg from "../assets/roti_kosong.jpg";
import tehTarikImg from "../assets/teh_tarik.jpg";

const items = [
  { id: "B001", name: "Kopi", price: 2.5, img: kopiImg },
  { id: "F001", name: "Roti Kosong", price: 1.5, img: rotiKosongImg },
  { id: "B002", name: "Teh Tarik", price: 2, img: tehTarikImg },
];

function Menu({ addtoCart }) {
  return (
    <Container>
      <Row>
        {items.map((item) => {
          return (
            <Col key={item.id}>
              <MenuCard item={item} action={addtoCart} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Menu;
