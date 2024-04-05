import { useNavigate, useParams } from 'react-router-dom';

const List = () => {
  const { listId } = useParams();

  const navigate = useNavigate();

  return (
    <>

      <div>List {listId}:</div>

      <div>
        <button onClick={() => navigate("/lists")}>Back to Lists</button>
      </div>

    </>
  )
  
};

export default List;
