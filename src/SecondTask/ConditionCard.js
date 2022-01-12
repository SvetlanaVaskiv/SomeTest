import { Card, CloseButton } from "react-bootstrap";
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
