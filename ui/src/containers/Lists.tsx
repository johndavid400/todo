import { useNavigate, useParams } from 'react-router-dom';

const Lists = () => {
  const navigate = useNavigate();

  return (
    <>

      <div>
        <button onClick={() => navigate("/lists/1")}>List 1</button>
      </div>

    </>
  )
};

export default Lists;
