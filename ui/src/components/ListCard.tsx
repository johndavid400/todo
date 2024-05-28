import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import instance from "@/utils/axios";
import '../App.css';

import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ListCard = (props: any) => {
  const [listItems, setListItems] = useState();
  const [category, setCategory] = useState();
  const [progress, setProgress] = useState();

  const getListItems = async () => {
    return await instance
      .get(`/list_items?list_id=${props.list.id}`)
      .then((response) => {
        setListItems(response.data);
        calculateProgress(response.data)
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

  const getCategory = async () => {
    return await instance
      .get("/categories/" + props.list.category_id)
      .then((response) => {
        setCategory(response.data);
      });
  };


  useEffect(() => {
    getListItems();
    getCategory();
  }, []);

  return (
    <>
      <Card className="list-card" >
        <CardHeader>
          <CardTitle><Link to={'/lists/' + props.list.id} className="list-title" >{props.list.title}</Link></CardTitle>
          <CardDescription>
            <CardDescription>{ category && category.title }</CardDescription>
          </CardDescription>
        </CardHeader>
        <hr />
        <CardContent>
          <Progress value={progress} color={category && category.color_code} className="mt-3" />
          {listItems && listItems.sort((a, b) => (a.id > b.id) ? 1 : -1).map(function(i){
            return (
              <div key={i.id} className="items-top flex items-center justify-between space-x-2 mt-3">
                <div className="flex items-center gap-1.5 leading-none">
                  <input type="checkbox" id={`list-item-${i.id}`} disabled={!props.editable} defaultChecked={i.completed_at} onChange={(e) => handleListItem(i, e)} />
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
                  <input type="button" value="X" disabled={!props.editable} onClick={() => removeListItem(i.id)} />
                </div>
              </div>
            )
          })}
        </CardContent>
        <CardFooter>
          { props.editable &&
            <div id="new">
              <Input id="new-input" onChange={(e) => setItem(e.target.value)} />
              <input type="button" id="new-btn" value="Add" onClick={() => addListItem()} />
            </div>
          }
        </CardFooter>
      </Card>
    </>
  )
};

export default ListCard;
