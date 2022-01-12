import { Card } from "react-bootstrap";

export function ItemCard({ item }) {
  return (
    <Card style={{ width: "18rem", padding: "20px" }}>
      <Card.Body>
        <Card.Text>
          {" "}
          Name:{item.name}
          <br />
          Email:{item.email}
          <br />
          Disabled: {item.disabled.toString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
