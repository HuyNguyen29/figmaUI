import React, { useState, useContext, createContext } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";
import MainScreen from "./screen/MainScreen";
import CreateMicroExp from "./screen/createMircoExp/CreateMicroExp";
import DefineSupervised from "./screen/defineSupervised/DefineSupervised";
import DetailSupervised from "./screen/detailSupervised/DetailSupervised";
import { ReactComponent as AppIcon } from "./AppIcons.svg";

function App() {
  return (
    <>
      <AppIcon />
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/mircoExp" component={CreateMicroExp} />
        <Route exact path="/defineSupervised" component={DefineSupervised} />
        <Route exact path="/detailSupervised" component={DetailSupervised} />
      </Switch>
    </>
  );
}

export default App;
