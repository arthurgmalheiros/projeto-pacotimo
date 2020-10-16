import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import history from "./history";

import TravelPackages from "../pages/TravelPackages";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={TravelPackages} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
