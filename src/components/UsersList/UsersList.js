import * as React from "react";
import "./UserList.css";

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

  //   const renderUsers = React.useMemo(() => {
  //     return users.map((user) => {
  //       return (
  //         <div key={user.id}>
  //           <p>
  //             <strong>{user.name}</strong>
  //           </p>
  //         </div>
  //       );
  //     });
  //   }, [users]);

  const filteredUser = users
    .filter((user) => {
      return user.name.toLowerCase().indexOf(term.toLowerCase()) === 0;
    })
    .map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.address.city}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td>{user.company.name}</td>
        </tr>
      );
    });

  return (
    <div className="users-list">
      <h2>Users:</h2>
      <input
        type={"text"}
        placeholder={"Search (Name)"}
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
      {/* <div>{renderUsers}</div> */}
      <div>
        {users && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>{filteredUser}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersList;
