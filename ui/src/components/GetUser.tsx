import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

function GetUser() {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const apiUrl = 'http://localhost:5000/users/' + userId;
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      var data = await fetch(apiUrl).then(res => {
        return res.json();
      });

      setUser(data);
      console.log(data);
    }
    fetchData();
  }, []);

  if (user) {
    return (
      <>
        <table>
          <tr>
            <th>ID</th>
            <td>{user.id}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Role ID</th>
            <td>{user.role_id}</td>
          </tr>
        </table>
      </>
    );
  }
  else {
    return <div>User not found</div>;
  }
}

export default GetUser;
