import "./App.css";
import React from "react";
import store from "./Redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { MainTopic } from "./components/styled-components/common";

const Mainpage = React.lazy(() => import("./components/Main/Mainpage"));
const Details = React.lazy(() => import("./components/Details"));

const AppSuspense = ({ Component }) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component />
    </React.Suspense>
  );
};

function App() {
  return (
    <div className="AppWrapper">
      <MainTopic>iTunes Music Searcher</MainTopic>
      <Routes>
        <Route path="/">
          <Route path=":userId" element={<AppSuspense Component={Details} />} />
          <Route path="" element={<AppSuspense Component={Mainpage} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};
