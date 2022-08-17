import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainComponent, Card, CardDetail } from "./components";
import "./constants/constants.css";
import "./constants/responsive.css";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route
          exact
          path="/card/:id"
          render={(routerProps) => (
            <CardDetail id={routerProps.match.params.id} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
