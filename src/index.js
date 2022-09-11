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
    <p className="resouces">
      Created by {""}
      <a
        href="https://www.linkedin.com/in/ivannie-saladin-736b50132/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Ivannie Saladin {""}
      </a>
      student at {""}
      <a
        href="https://www.shecodes.io/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Shecodes
      </a>
      <br />
      Check out my repository on{" "}
      <a
        href="https://github.com/ivanniesala/weather-react-wk4"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        GitHub {""}
      </a>
      hosted on{" "}
      <a
        href="https://app.netlify.com/teams/ivanniesala/overview"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Netlify
      </a>
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
