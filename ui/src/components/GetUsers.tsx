import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

function GetUsers() {
  const [users, setUsers] = useState(null);
  const apiUrl = 'http://localhost:5000/users';
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      var data = await fetch(apiUrl).then(res => {
        return res.json();
      });

      setUsers(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Users:</h2>
      {users && users.map(function(i){
          return (
            <div key={i.id}>
              <a key={i.id} href={'/users/' + i.id}>{i.email}</a>
              <button onClick={() => navigate("/users/" + i.id)}>{i.email}</button>
            </div>
          )
      })}
    </div>
  );
}

export default GetUsers;
