import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { allReducer } from "./reducers";
import thunk from "redux-thunk"; //thunk allows return function instead of an action

// import throttle from "lodash/throttle";
// import { loadState, saveState } from "./localStorage";

// const persistedState = loadState();

// store.subscribe(
//   throttle(() => {
//     saveState({
//       feedbacks: store.getState().feedbacks,
//     });
//   }, 1000)
// );

// Combine REDUX DEVTOOLS with compose
const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducer, composeEnhancer(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
