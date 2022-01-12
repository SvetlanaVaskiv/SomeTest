import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

export function KeyValueArrayForm({ rule, onAddClick }) {
  const [value, setValue] = useState("");
  const [key, setKey] = useState("");

  return (
    <Card className="rules">
      <Form>
        <h3>{rule.name}</h3>
        <Form.Group className="mb-3">
          <Form.Label>FIELD NAME</Form.Label>
          <Form.Control
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <Form.Label>FIELD VALUE</Form.Label>
          <Form.Control
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button onClick={() => onAddClick({ [key]: value })}>Add</Button>
    </Card>
  );
}
