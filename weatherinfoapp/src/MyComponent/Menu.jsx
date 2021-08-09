import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./Index";
import Header from "./Header";
import About from "./About";
import Weather from "./Weather";

const Menu = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/weather" component={Weather}></Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
};

export default Menu;
