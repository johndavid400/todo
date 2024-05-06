import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import instance from "@/utils/axios";
import { Input } from "@/components/ui/input"

const Lists = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState();
  const [list, setList] = useState();

  const addList = async () => {
    const title = list;
    const input = document.getElementById("new-input");
    input.value = '';
    return await instance
      .post("/lists", { title })
      .then((response) => {
        getLists();
      });
  };

  const getLists = async () => {
    return await instance
      .get("/lists")
      .then((response) => {
        setLists(response.data);
      });
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <>
      <h2>Lists:</h2>
      {lists && lists.map(function(i){
          return (
            <div key={i.id} className='mt-3'>
              <Link to={'/lists/' + i.id}>{i.title}</Link>
              <button onClick={() => navigate("/lists/" + i.id)}>{i.title}</button>
            </div>
          )
      })}
      <div id="new">
        <Input id="new-input" onChange={(e) => setList(e.target.value)} />
        <input type="button" id="new-btn" value="Add" onClick={() => addList()} />
      </div>
    </>
  )
};

export default Lists;

