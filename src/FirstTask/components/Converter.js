import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Card } from "react-bootstrap";
import { Rules } from "../rules";
export const Converter = () => {
  const [cm, setCm] = useState(0);
  const [rules, setRules] = useState(Rules);
  const [unit, setUnit] = useState("");
  const [SI_mm, setSiMm] = useState("");
  const [abbr, setAbbr] = useState("");

  const addNewUnit = () => {
    setRules([...rules, { unit, SI_mm, abbr }]);
    setUnit("");
    setSiMm(0);
    setAbbr("");
  };
  return (
    <>
      <div className="layout">
        <div className="container">
          <div className="flex-column">
            <h1 className="display-3 text-center">Converter</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>SANTIMETRES</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="enter the number of centimeters"
                  value={cm}
                  onChange={(e) => setCm(e.target.value)}
                />
              </Form.Group>
            </Form>
            <Card style={{ width: "18rem", padding: "20px" }}>
              {rules.map((rule) => (
                <Card.Body key={rule.unit}>
                  <Card.Text>
                    {rule.unit}: {(cm * rule.SI_mm) / 10}
                    {rule.abbr}
                  </Card.Text>
                </Card.Body>
              ))}
            </Card>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Unit</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="enter unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                />
                <Form.Label>MM in SI</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="value in SI"
                  value={SI_mm}
                  onChange={(e) => setSiMm(e.target.value)}
                />
                <Form.Label>ABBR</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Abbreviation"
                  value={abbr}
                  onChange={(e) => setAbbr(e.target.value)}
                />
              </Form.Group>
              <Button onClick={(e) => addNewUnit(e)}>ADD UNIT</Button>
            </Form>
            <Link to="/second">Go to second task</Link>
          </div>
        </div>
      </div>
    </>
  );
};
