import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Work, Article, Message, Footer, Navbar } from "./components";

import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/projects" component={Work} />
          <Route exact path="/article/title" component={Article} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
