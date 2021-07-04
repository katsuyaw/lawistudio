import "./App.css";
import Background from "./img/bgb.jpg";
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
import Shop from "./pages/shop";
import More from "./pages/more";
import Studios from "./pages/studios";
import Team from "./pages/team";
import Support from "./pages/support";
import Contact from "./pages/contact";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Footer from "./components/Footer";

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
          <Route path="/shop" component={Shop} />
          <Route path="/more" component={More} />
          <Route path="/studios" component={Studios} />
          <Route path="/team" component={Team} />
          <Route path="/support" component={Support} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
