import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import "./css/app.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
