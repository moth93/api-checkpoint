// UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setListOfUsers(res.data);
        console.log(res.data)
      } catch (err) {
        console.error(err);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.id}</strong> - {user.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
