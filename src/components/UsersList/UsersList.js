import * as React from "react";
import "./UserList.css";

import { HOC } from "../../hoc";

const UsersList = ({ data }) => {
  const renderUsers = data.map((user) => {
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
      <div>
        {data && (
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
              <tbody>{renderUsers}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

const SearchUsers = HOC(UsersList, "users");

export default SearchUsers;
