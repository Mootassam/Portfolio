import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouteMatch } from "react-router-dom";
import ContentWrapper from "./styles/ContentWrapper";
function Layout(props) {
  const match = useRouteMatch();

  return (
    <ContentWrapper>
      <Header url={match.url} />
      <main id='main'>{props.children}</main>
      {/* <Footer /> */}
    </ContentWrapper>
  );
}

export default Layout;
