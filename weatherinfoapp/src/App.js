import React from "react";

import { BrowserRouter } from "react-router-dom";

import Menu from "./MyComponent/Menu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </>
  );
};

export default App;
