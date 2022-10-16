import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MenuCard({ item, action }) {
  return (
    <Card className="m-2" style={{ width: "18rem", height: "100%" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>RM {item.price}</Card.Text>
        <Button variant="primary" onClick={() => action(item)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;
