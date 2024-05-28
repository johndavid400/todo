import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import instance from "@/utils/axios";
import ListCard from '@/components/ListCard';

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const List = () => {
  const initialState = { category: { title: 'n/a' } };

  const navigate = useNavigate();
  const { listId } = useParams();
  const [list, setList] = useState();
  const [listItems, setListItems] = useState();
  const [category, setCategory] = useState(initialState);
  const [item, setItem] = useState();
  const [progress, setProgress] = useState();

  const getList = async () => {
    return await instance
      .get(`/lists/${listId}`)
      .then((response) => {
        const resp = response.data;
        setList(resp);
        getListItems();
        getCategory(resp.category_id);
      });
  };

  const calculateProgress = (items: any) => {
    const totalItems = items.length;
    const completedItems = items.filter(checkCompleted).length;
    const value = (completedItems / totalItems) * 100;
    setProgress(value);
  };

  function checkCompleted(item) {
    return item.completed_at ? true : false;
  };

  const getListItems = async () => {
    return await instance
      .get(`/list_items?list_id=${listId}`)
      .then((response) => {
        setListItems(response.data);
        calculateProgress(response.data)
      });
  };

  const getCategory = async (id: any) => {
    return await instance
      .get(`/categories/${id}`)
      .then((response) => {
        setCategory(response.data);
      });
  };

  const addListItem = async () => {
    const list_id = listId;
    const title = item;
    const position = listItems.length + 1;
    const input = document.getElementById("new-input");
    input.value = '';
    return await instance
      .post("/list_items", { title, list_id, position })
      .then((response) => {
        getListItems();
      });
  };

  const removeList = async (id: any) => {
    return await instance
      .delete(`/lists/${id}`)
      .then((response) => {
        navigate('/');
      });
  };

  const removeListItem = async (id: any) => {
    return await instance
      .delete(`/list_items/${id}`)
      .then((response) => {
        getListItems();
      });
  };

  const handleListItem = (item: any, event: any) => {
    updateListItem(item.id, event.target.checked);
  };

  const updateListItem = async (id: any, completed: any) => {
    return await instance
      .patch(`/list_items/${id}`, { completed })
      .then((response) => {
        getListItems();
      });
  };

  const editable = true;

  useEffect(() => {
    getList();

    return () => console.log('unmounting...'); }, []);

  if (list) {
    return (
      <>
        <Card className="list">
          <CardHeader>
            <CardTitle className="flex justify-between">
              {list.title}
              <input type="button" value="X" onClick={() => removeList(list.id)} />
            </CardTitle>
            <CardDescription>{ category && category.title }</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={progress} color={category.color_code} />
            {listItems && listItems.sort((a, b) => (a.id > b.id) ? 1 : -1).map(function(i){
              return (
                <div key={i.id} className="items-top flex items-center justify-between space-x-2 mt-3">
                  <div className="flex items-center gap-1.5 leading-none">
                    <input type="checkbox" id={`list-item-${i.id}`} defaultChecked={i.completed_at} onChange={(e) => handleListItem(i, e)} />
                    <label
                      htmlFor={`list-item-${i.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {i.completed_at ? (
                        <s>{i.title}</s>
                      ) : (
                        <>{i.title}</>
                      )}
                    </label>
                  </div>
                  <div>
                    <input type="button" value="X" onClick={() => removeListItem(i.id)} />
                  </div>
                </div>
              )
            })}
          </CardContent>
          <CardFooter>
            <div id="new">
              <Input id="new-input" onChange={(e) => setItem(e.target.value)} data-testid="list-item-input" />
              <input type="button" id="new-btn" value="Add" onClick={() => addListItem()} data-testid="list-item-submit" />
            </div>
          </CardFooter>
        </Card>
        <button className="mt-3" onClick={() => navigate("/lists")}>Back to Lists</button>
      </>
    );
  }
  else {
    return <div>List not found</div>;
  }
};

export default List;
