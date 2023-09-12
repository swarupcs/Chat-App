import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Join from "./component/Join/Join";

const ENDPOINT = "http://localhost:4500/";
const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/"></Route>
          <Route path="/chat"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
