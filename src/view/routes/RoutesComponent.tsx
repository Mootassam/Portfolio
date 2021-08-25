import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "src/view/routes";
import PublicRoute from "src/view/routes/PublicRoute";
import CustomLoadable from "src/view/shared/CustomLoadable";
function RoutesComponent(props) {
  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoute
          key={route.path}
          exact
          path={route.path}
          component={CustomLoadable({ loader: route.loader })}
        />
      ))}
      {routes.simpleRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={CustomLoadable({ loader: route.loader })}
        />
      ))}
    </Switch>
  );
}

export default RoutesComponent;
