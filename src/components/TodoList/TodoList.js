import * as React from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = React.useState([]);
  const [term, setTerm] = React.useState("");

  React.useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const responseJSON = await response.json();
      setTodos(responseJSON);
    };
    fetchTodos();
  }, []);

  // const renderTodos = React.useMemo(() => {
  //   return todos.map((todo) => {
  //     return (
  //       <div key={todo.id}>
  //         <p>
  //           <strong>{todo.title}</strong>
  //         </p>
  //       </div>
  //     );
  //   });
  // }, [todos]);

  const filteredTodo = todos
    .filter((todo) => {
      return todo.title.toLowerCase().indexOf(term.toLowerCase()) === 0;
    })
    .slice(0, 10)
    .map((todo) => {
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
      <h2>Todos:</h2>
      <input
        type={"text"}
        placeholder={"Search (Todo Title)"}
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
      {/* <div>{renderTodos}</div> */}
      {/* <div>{filteredTodo}</div> */}
      <div>
        {todos && (
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
              <tbody>{filteredTodo}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
