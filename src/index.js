import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <p className="link">
      {" "}
      Check out my repository on {" "}
      <a
        href="https://github.com/ivanniesala/weather-react-wk4"
        target="_blank"
        rel="noreferrer"
      >
          GitHub
      </a>
      hosted on 
      <a href=""
      target="_blank"
      rel="noreferrer">Netlify</a>
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
