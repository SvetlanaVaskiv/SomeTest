import React, { useState } from "react";
import { Button, Card, CloseButton, Form } from "react-bootstrap";
import { Rules } from "./Rules";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { ConditionCard } from "./ConditionCard";
import { ItemCard } from "./ItemCard";

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
