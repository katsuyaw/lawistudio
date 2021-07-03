import "./App.css";
import Background from "./bgb.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./pages/index";
import Awareness from "./pages/awareness";
import Love from "./pages/love";
import Wisdom from "./pages/wisdom";
import Intuition from "./pages/intuition";

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
          <Route exact path="/" component={Home} />
          <Route path="/love" component={Love} />
          <Route path="/awareness" component={Awareness} />
          <Route path="/wisdom" component={Wisdom} />
          <Route path="/intuition" component={Intuition} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
