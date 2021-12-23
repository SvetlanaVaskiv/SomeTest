import React, { useState } from "react";
import { Button, Card, CloseButton, Form } from "react-bootstrap";
import { Rules } from "../Rules";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export const SympleApp = () => {
  let initialConditions = {
    include: [{ name: "John" }],
    sort_by: ["email", "name"],
    //  exclude: [{ name: "John" }],
  };
  const [condition, setCondition] = useState(initialConditions);
  const list = [
    { name: "John", email: "john2@mail.com", id: uuidv4(), disabled: "true" },
    { name: "John", email: "john1@mail.com", id: uuidv4(), disabled: "false" },
    { name: "Jane", email: "jane@mail.com", id: uuidv4(), disabled: "true" },
    { name: "John", email: "john4@mail.com", id: uuidv4(), disabled: "false" },
    { name: "John", email: "john3@mail.com", id: uuidv4(), disabled: "true" },
    { name: "Hanna", email: "hanna@mail.com", id: uuidv4(), disabled: "false" },
    { name: "Klark", email: "klark@mail.com", id: uuidv4(), disabled: "true" },
    { name: "Serj", email: "john5@mail.com", id: uuidv4(), disabled: "false" },
  ];

  const newItemsSort = Object.entries(condition).reduce(
    (items, [ruleName, ruleArguments]) => {
      return Rules.find((rule) => rule.name === ruleName).fn(
        items,
        ruleArguments
      );
    },
    list
  );

  return (
    <>
      <div className="layout">
        <h1 className="display-3 text-center">SIMPLE APP</h1>
        <Link to="/third">Go to third task</Link>

        <div className="container">
          <div className="flex-row">
            <div className="flex-column">
              {list.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>{" "}
            <div className="flex-column rules ">
              {Rules.map((rule) => (
                <rule.form
                  rule={rule}
                  key={rule.name}
                  onAddClick={(option) => {
                    setCondition({
                      ...condition,
                      [rule.name]: [...(condition[rule.name] ?? []), option],
                    });
                  }}
                />
              ))}
            </div>
            <div className="flex-column">
              <Card>
                {Object.entries(condition).map(([ruleName, ruleOptions]) => (
                  <ConditionCard
                    key={ruleName}
                    ruleName={ruleName}
                    ruleOptions={ruleOptions}
                    onDeleteClick={() => {
                      setCondition({ [ruleName]: [] });
                    }}
                  />
                ))}
              </Card>
            </div>
            <div className="flex-column">
              {newItemsSort.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export function ConditionCard({ ruleName, ruleOptions, onDeleteClick }) {
  return (
    <Card.Body key={ruleName}>
      <Card.Text>
        Name:{ruleName}
        <br />
        Options:{JSON.stringify(ruleOptions)}
        <CloseButton onClick={() => onDeleteClick({ ruleOptions })} />
      </Card.Text>
    </Card.Body>
  );
}

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
