import axios, { AxiosError, CanceledError } from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
const Users = () => {
  const SERVER_URL = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>(SERVER_URL, { signal: controller.signal })
      .then((res) => {
        setUsers(res.data);
        // console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        if (err instanceof CanceledError) return; // caoused of second rendering :(
        setError(err.message);
        setLoading(false);
      })
      .finally(() => {});

    return () => {
      console.log("CleanUp......", controller.signal);
      controller.abort();
    };
  }, []);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const respose = await axios.get<User[]>(SERVER_URL);
  //       setUsers(respose.data);
  //     } catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   };

  //   fetchUser();
  // });

  const deleteUser = (user: User) => {
    // Using Optimistic Update
    const originalUsers = [...users];
    setUsers(users.filter((usr) => usr.id !== user.id));
    axios.delete(SERVER_URL + "/" + user.id).catch((err) => {
      setUsers(originalUsers);
    });
  };

  const updateUser = (user: User) => {
    console.log(user);
    const updatedUser = { ...user, name: user.name + "." };
    const originalUsers = [...users];
    setUsers(users.map((usr) => (usr.id === user.id ? updatedUser : usr)));
    axios.put(SERVER_URL + "/" + user.id, updateUser).catch((err) => {
      setUsers(originalUsers);
    });
  };
  return (
    <>
      {isLoading && <span className="spinner-border text-primary"></span>}
      {error && <p className="text-danger">{error}</p>}
      <div>
        <ul className="list-group ">
          {users.map((user, index) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div>
                <button
                  className="btn btn-outline-secondary mx-2"
                  onClick={() => updateUser(user)}
                >
                  update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Users;
