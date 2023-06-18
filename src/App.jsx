//! 1. Agar Masing2 Component memiliki value yang berbeda
//! 2. Terapkan Sistem Higher Order Component (HOC)

import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <Counter counter={1} />
      <Counter counter={2} />
    </>
  );
};

export default App;
