import React from "react";
import DefaultLayout from "./Layouts/DefaultLayout.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
