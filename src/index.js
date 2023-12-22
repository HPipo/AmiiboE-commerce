import React from "react";
import ReactDOM from "react-dom/client";
import CartContext from "./context/CartContext";
import App from "./App";

const doc = document.getElementById("root")

const root = ReactDOM.createRoot(doc)

root.render(<CartContext><App/></CartContext>)