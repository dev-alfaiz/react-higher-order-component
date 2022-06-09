import * as React from "react";

const UsersList = () => {
  const [users, setUsers] = React.useState([]);
  const [term, setTerm] = React.useState("");

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const responseJSON = await response.json();
      setUsers(responseJSON);
    };
    fetchUsers();
  }, []);

  const renderUsers = React.useMemo(() => {
    return users.map((user) => {
      return (
        <div key={user.id}>
          <p>
            <strong>{user.name}</strong>
          </p>
        </div>
      );
    });
  }, [users]);

  const filteredUser = users
    .filter((user) => {
      return user.name.toLowerCase().indexOf(term.toLowerCase()) === 0;
    })
    .map((user) => {
      return (
        <div key={user.id}>
          <p>
            <strong>{user.name}</strong>
          </p>
        </div>
      );
    });

  return (
    <div className="users-list">
      <input
        type={"text"}
        placeholder={"Search"}
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
      {/* <div>{renderUsers}</div> */}
      <div>{filteredUser}</div>
    </div>
  );
};

export default UsersList;
