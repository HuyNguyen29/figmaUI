import React, { useState, useContext, createContext } from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";
import MainScreen from "./screen/MainScreen";
import CreateMicroExp from "./screen/createMircoExp/CreateMicroExp";
import DefineSupervised from "./screen/defineSupervised/DefineSupervised";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainScreen} />
      <Route exact path="/mircoExp" component={CreateMicroExp} />
      <Route exact path="/defineSupervised" component={DefineSupervised} />
    </Switch>
  );
}

export default App;
