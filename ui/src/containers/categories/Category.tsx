import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import instance from "@/utils/axios";
import { Input } from "@/components/ui/input"

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  const [color, setColor] = useState();

  const addCategory = async () => {
    const title = category;
    const input = document.getElementById("new-input");
    input.value = '';
    return await instance
      .post("/categories", { title })
      .then((response) => {
        getCategories();
      });
  };

  const getCategories = async () => {
    return await instance
      .get("/categories")
      .then((response) => {
        setCategories(response.data);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <h2>Categories:</h2>
      {categories && categories.map(function(i){
          return (
            <div key={i.id} className='mt-3'>
              <Link to={'/categories/' + i.id}>{i.title}</Link>
              <button onClick={() => navigate("/categories/" + i.id)}>{i.title}</button>
            </div>
          )
      })}
      <div id="new">
        <Input id="new-input" onChange={(e) => setCategory(e.target.value)} />
        <input type="button" id="new-btn" value="Add" onClick={() => addCategory()} />
      </div>
    </>
  )
};

export default Categories;

