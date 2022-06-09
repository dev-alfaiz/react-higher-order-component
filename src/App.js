import * as React from "react";
import { UsersList, TodoList } from "./components";

const App = () => {
  return (
    <div className="app">
      <h1>
        <u>React Higher Order Component</u>
      </h1>
      <div>
        <UsersList />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
