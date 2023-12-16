import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store from "./reduxACtions/store/ReduxStore";
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'crypto-browserify';
import 'stream-browserify';

import App from "./App";

// stack overflow

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);

