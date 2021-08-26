import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => <h1>HATS PAGE</h1>;

const JacketsPage = () => <h1>JACKETS PAGE</h1>

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/jackets" component={JacketsPage} />
      </Switch>
    </div>
  );
}

export default App;
