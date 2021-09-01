import React from "react";

import RoutesComponent from "src/view/routes/RoutesComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { configureStore } from "src/modules/store";

import "@fortawesome/fontawesome-free/css/all.min.css";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
