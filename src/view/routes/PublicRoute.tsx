import React from "react";
import { Route, useLocation } from "react-router-dom";
import Layout from "src/view/Layout/Layout";
function PublicRoute({ component: Component, ...rest }) {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}

export default PublicRoute;
