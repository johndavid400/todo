import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import instance from "@/utils/axios";

const List = () => {
  const navigate = useNavigate();
  const { listId } = useParams();
  const [list, setList] = useState();

  useEffect(() => {
    const getList = async (id: any) => {
      return await instance
        .get(`/lists/${id}`)
        .then((response) => {
          setList(response.data);
        });
    };
    getList(listId);
  }, []);

  if (list) {
    return (
      <>
        <table>
          <tr>
            <th>ID</th>
            <td>{list.id}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{list.title}</td>
          </tr>
          <tr>
            <th>UserID</th>
            <td>{list.user_id}</td>
          </tr>
          <tr>
            <th>Category ID</th>
            <td>{list.category_id}</td>
          </tr>
        </table>
        <button onClick={() => navigate("/lists")}>Back to Lists</button>
      </>
    );
  }
  else {
    return <div>List not found</div>;
  }
};

export default List;
