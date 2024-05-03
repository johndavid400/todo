import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import instance from "@/utils/axios";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input"
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

  const getListItems = async () => {
    return await instance
      .get(`/list_items?list_id=${listId}`)
      .then((response) => {
        setListItems(response.data);
      });
  };

  const getCategory = async (id: any) => {
    return await instance
      .get(`/categories/${id}`)
      .then((response) => {
        setCategory(response.data);
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

  useEffect(() => {
    getList();

    return () => console.log('unmounting...');
  }, []);

  if (list) {
    return (
      <>
        <Card>
          <CardHeader>
            <CardTitle>{list.title}</CardTitle>
            <CardDescription>{ category && category.title }</CardDescription>
          </CardHeader>
          <CardContent>
            {listItems && listItems.sort((a, b) => (a.id > b.id) ? 1 : -1).map(function(i){
              return (
                <div key={i.id} className="items-top flex space-x-2 mt-3">
                  <input type="checkbox" id={`list-item-${i.id}`} defaultChecked={i.completed_at} onChange={(e) => handleListItem(i, e)} />
                  <div className="grid gap-1.5 leading-none">
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
                </div>
              )
            })}
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
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
