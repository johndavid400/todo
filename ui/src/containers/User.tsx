import { useNavigate, useParams } from 'react-router-dom';
import GetUser from '../components/GetUser';

const User = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  return (
    <>
      <div>
        <GetUser />
        <button onClick={() => navigate("/users")}>Back to Users</button>
      </div>
    </>
  )
};

export default User;
