import logo from "./logo.svg";
import "./App.css";
import Background from "./bgb.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/index.js";
// import LOVE from "./pages/LOVE";
// import AWARENESS from "./pages/AWARENESS";
// import WISDOM from "./pages/WISDOM";
// import INTUITION from "./pages/INTUITION";

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route path="/love" component={LOVE} />
        <Route path="/awareness" component={AWARENESS} /> */}
        </Switch>
      </Router>
    </main>
  );
}

export default App;
