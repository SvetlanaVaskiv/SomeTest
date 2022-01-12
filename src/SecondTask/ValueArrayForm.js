import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

export function ValueArrayForm({ rule, onAddClick }) {
  const [value, setValue] = useState("");

  return (
    <Card className="rules">
      <Form>
        <h3>{rule.name}</h3>
        <Form.Group className="mb-3">
          <Form.Label>VALUE</Form.Label>
          <Form.Control
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button onClick={() => onAddClick(value)}>Add</Button>
    </Card>
  );
}
