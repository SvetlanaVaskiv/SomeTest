import "../src/styles/App.css";
import { Converter } from "./FirstTask/Converter";
import { SympleApp } from "./SecondTask/SimpleApp";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Quiz } from "./ThirdTask/Quiz";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/first" component={Converter} />
          <Route path="/second" component={SympleApp} />
          <Route path="/third" component={Quiz} />
          <Redirect to="/first" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
