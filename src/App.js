import * as React from "react";
import { SearchUsers, SearchTodos } from "./components";

const App = () => {
  return (
    <div className="app">
      <h1>
        <u>React Higher Order Component</u>
      </h1>
      <div>
        <SearchUsers />
      </div>
      <div>
        <SearchTodos />
      </div>
    </div>
  );
};

export default App;
