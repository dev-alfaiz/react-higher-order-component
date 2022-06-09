import * as React from "react";

const UsersList = () => {
  const [users, setUsers] = React.useState([]);

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

  return <div className="users-list">{renderUsers}</div>;
};

export default UsersList;
