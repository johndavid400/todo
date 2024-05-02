import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';
import instance from "@/utils/axios";
import TokenUtils from "../utils/token";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      return await instance
        .get("/users")
        .then((response) => {
          setUsers(response.data);
        });
    };
    getUsers();
  }, []);

  return (
    <>
      <h2>Users:</h2>
      {users && users.map(function(i){
          return (
            <div key={i.id}>
              <a key={i.id} href={'/users/' + i.id}>{i.email}</a>
              <button onClick={() => navigate("/users/" + i.id)}>{i.email}</button>
            </div>
          )
      })}
    </>
  )
};

export default Users;

