import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import instance from "@/utils/axios";

const Lists = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState();

  useEffect(() => {
    const getLists = async () => {
      return await instance
        .get("/lists")
        .then((response) => {
          setLists(response.data);
        });
    };
    getLists();
  }, []);

  return (
    <>
      <h2>Lists:</h2>
      {lists && lists.map(function(i){
          return (
            <div key={i.id}>
              <a key={i.id} href={'/lists/' + i.id}>{i.title}</a>
              <button onClick={() => navigate("/lists/" + i.id)}>{i.title}</button>
            </div>
          )
      })}
    </>
  )
};

export default Lists;

