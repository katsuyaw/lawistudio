import "./App.css";
import BackgroundBlack from "./img/bgb.jpg";
import BackgroundWhite from "./img/bgw.png";
import { useState } from "react";
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
import Team from "./pages/team";
import Support from "./pages/support";
import Contact from "./pages/contact";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Footer from "./components/Footer";
import Works from "./pages/works";
import Gallery from "./pages/gallery";
import ComingSoon from "./pages/comingsoon";

function App() {
  const [bgi, setBgi] = useState(BackgroundBlack);
  const handleBgi = (e) => {
    setBgi(e);
  };
  return (
    <main
      className="grid justify-items-center h-screen bg-cover"
      style={{
        backgroundImage: `url(${bgi})`,
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
          <Route
            path="/works"
            component={Works}
            onChange={() => setBgi({ BackgroundBlack })}
          />
          <Route path="/gallery" component={Gallery} />
          <Route path="/team" component={Team} />
          <Route path="/support" component={Support} />
          <Route path="/contact" component={Contact} />
          <Route path="/comingsoon" component={ComingSoon} />
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
