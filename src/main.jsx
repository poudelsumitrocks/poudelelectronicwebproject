import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Toggle from "./Component/useContext/Toggle.jsx";

import { Provider } from "react-redux";
// import { createSlice } from "@reduxjs/toolkit";
import { store } from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <Toggle>
    
    <Provider store={store}>
      <App />
    </Provider>
  </Toggle>
  </StrictMode>
);
