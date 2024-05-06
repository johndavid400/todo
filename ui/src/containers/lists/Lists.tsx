import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import instance from "@/utils/axios";
import ListCard from '@/components/ListCard';
import { Input } from "@/components/ui/input"

const Lists = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState();
  const [list, setList] = useState();
  //const [categories, setCategories] = useState();

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

  const getAll = async () => {
    await getLists(); 
  };

  const editable = false;

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <h1>Lists</h1>
      <div className="lists flex flex-row items-start">
        {lists && lists.sort((a, b) => (a.id > b.id) ? 1 : -1).map(function(i){
          return (
            <div key={i.id} className="list-container flex items-center justify-between space-x-2 mt-3 me-3">
              <ListCard list={i} editable={editable} />
            </div>
          )
        })}
      </div>
      <div className="flex flex-col mt-5">
        <div id="new" className="flex ">
          <Input id="new-input" onChange={(e) => setList(e.target.value)} />
          <input type="button" id="new-btn" value="Add" onClick={() => addList()} />
        </div>
      </div>
    </>
  )
};

export default Lists;

