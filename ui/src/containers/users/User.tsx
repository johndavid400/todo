import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import instance from "@/utils/axios";

const User = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async (id: any) => {
      return await instance
        .get(`/users/${id}`)
        .then((response) => {
          setUser(response.data);
        });
    };
    getUser(userId);
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
        <button onClick={() => navigate("/users")}>Back to Users</button>
      </>
    );
  }
  else {
    return <div>User not found</div>;
  }
};

export default User;
