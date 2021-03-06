import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./app/store";
import "./assets/css/index.css";
import "./assets/css/itemsSlides.css";
import { BrowserRouter } from "react-router-dom";

//custom event localStorageChange
const originalSetItem = localStorage.setItem;

localStorage.setItem = function(key, value) {
  const event = new Event('itemInserted');

  event.value = value; // Optional..
  event.key = key; // Optional..

  document.dispatchEvent(event);

  originalSetItem.apply(this, arguments);
};

const originalDeleteItem = localStorage.removeItem;
localStorage.removeItem = function(key, value) {
  const event = new Event('itemDeleted');

  event.value = value; // Optional..
  event.key = key; // Optional..

  document.dispatchEvent(event);

  originalDeleteItem.apply(this, arguments);
};

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
