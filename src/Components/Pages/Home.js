import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const serverURL = "https://6745ed80512ddbd807fa3749.mockapi.io/crud";

  const getData = () => {
    axios
      .get(serverURL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-end">
        <a href="/create">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 py-1 px-2 mb-3 rounded text-white">
            Create
          </button>
        </a>
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Avatar
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="px-4 py-3 text-sm font-medium text-gray-800">
                  {user.id}
                </td>
                <td className="px-4 py-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.name}</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {user.email}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {user.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
