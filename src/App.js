import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import MeetingsAndEvents from "./pages/MeetingsAndEvents";
import Loyalty from "./pages/Loyalty";
import Experiences from "./pages/Experiences";
import HealthAndSafety from "./pages/HealthAndSafety";
import Offers from "./pages/Offers";
import Blog from "./pages/Blog";
import Hotels from "./pages/Hotels";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route path="/guest-gallery" component={Gallery} />|
            <Route path="/about-us" component={About} />|
            <Route path="/meetings-and-events" component={MeetingsAndEvents} />|
            <Route path="/loyalty-programme" component={Layout} />|
            <Route path="/experiences-by-kempinski" component={Experiences} />|
            <Route path="/white-glove-service" component={HealthAndSafety} />|
            <Route path="/special-offers" component={Offers} />|
            <Route path="/blog" component={Blog} />|
            <Route path="/hotels" component={Hotels} />|
            <Route exact path="/" component={Home} />|
            <Route component={NoMatch} />|
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
