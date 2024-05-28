import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import instance from "@/utils/axios";
import ListCard from '@/components/ListCard';
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Lists = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState();
  const [list, setList] = useState();
  const [category, setCategory] = useState(1);
  const [categories, setCategories] = useState();

  const addList = async () => {
    const title = list;
    const input = document.getElementById("new-list-input");
    const category_id = category;
    input.value = '';
    return await instance
      .post("/lists", { title, category_id })
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

  const getCategories = async () => {
    return await instance
      .get("/categories/")
      .then((response) => {
        setCategories(response.data);
      });
  };

  const getAll = async () => {
    await getLists(); 
  };

  const handleCategory = (value: any) => {
    console.log(value);
    setCategory(value);
  };

  const editable = false;

  useEffect(() => {
    getAll();
    getCategories();
  }, []);

  return (
    <>
      <h1>Lists</h1>
      <div className="lists">
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
          <Select id="new-list-category" defaultValue={3} onValueChange={(value) => handleCategory(value)} data-testid="list-category-input" >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={'Category'} />
            </SelectTrigger>
            <SelectContent>
              {categories && categories.sort((a, b) => (a.id > b.id) ? 1 : -1).map(function(i){
                return (
                  <SelectItem value={i.id}>{i.title}</SelectItem>
                )
              })}
            </SelectContent>
          </Select>
          <Input id="new-list-input" onChange={(e) => setList(e.target.value)} data-testid="list-name-input" />
          <input type="button" id="new-btn" value="Add" onClick={() => addList()} data-testid="list-submit" />
        </div>
      </div>
    </>
  )
};

export default Lists;

