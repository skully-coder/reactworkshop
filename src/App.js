import React from "react";
import "./styles.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
    </div>
  );
}
