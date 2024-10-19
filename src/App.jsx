import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="pageContents">
        <h1>Memory Card Game</h1>
        <header>
          <span>Current Score:</span>
          <span>Personal Best:</span>
        </header>
        <div className="gameboard">
          <div className="card">{"Card Name"}</div>
          <div className="card">{"Card Name"}</div>
          <div className="card">{"Card Name"}</div>
          <div className="card">{"Card Name"}</div>
          <div className="card">{"Card Name"}</div>
          <div className="card">{"Card Name"}</div>
          <div className="card">{"Card Name"}</div>
          <div className="card">{"Card Name"}</div>
          <div className="card">{"Card Name"}</div>
          <div className="card">{"Card Name"}</div>
          <div className="card">{"Card Name"}</div>
          <div className="card">{"Card Name"}</div>
        </div>
      </div>
    </>
  );
}

export default App;
