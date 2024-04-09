import { useNavigate, useParams } from 'react-router-dom';
import GetUsers from '../components/GetUsers';

const Users = () => {
  const navigate = useNavigate();

  return (
    <>
      <GetUsers />
    </>
  )
};

export default Users;
