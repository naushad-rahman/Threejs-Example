import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import ThreejsExample from "./threeExample.js";

export default function App() {
  useEffect(() => {
    initCesium();
  }, []);
  let threeviewer = useRef();
  async function initCesium() {
    var renderer = ThreejsExample.initThreeJS();
    threeviewer.appendChild(renderer.domElement);
  }

  return (
    <div className="App">
      <div ref={(ref) => (threeviewer = ref)} />

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
