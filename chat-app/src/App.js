import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch,Routes, Route, Link } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";

// const ENDPOINT = "http://localhost:4500/";
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Join/>}/>
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
