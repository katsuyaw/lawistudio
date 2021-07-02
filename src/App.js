import "./App.css";
import Background from "./bgb.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/index.js";
import Love from "./pages/Love";
import Awareness from "./pages/Awareness";
import Wisdom from "./pages/Wisdom";
import Intuition from "./pages/Intuition";

function App() {
  return (
    <main
      className="grid justify-items-center h-screen bg-cover"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/love" component={Love} />
          <Route path="/awareness" component={Awareness} />
          <Route path="/wisdom" component={Wisdom} />
          <Route path="/intuition" component={Intuition} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
