import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouteMatch } from "react-router-dom";
function Layout(props) {
  const match = useRouteMatch();

  return (
    <>
      <Header url={match.url} />
      <main id='main'>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
