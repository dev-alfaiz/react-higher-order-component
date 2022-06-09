import * as React from "react";
import "./TodoList.css";

import { HOC } from "../../hoc";

const TodoList = ({ data }) => {
  const renderTodos = data.slice(0, 10).map((todo) => {
    return (
      <tr key={todo.id}>
        <td>{todo.userId}</td>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.completed === true ? "completed" : "pending"}</td>
      </tr>
    );
  });
  return (
    <div className="todo-list">
      <div>
        {data && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>Todo Id</th>
                  <th>Todo Title</th>
                  <th>Todo Status</th>
                </tr>
              </thead>
              <tbody>{renderTodos}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;
