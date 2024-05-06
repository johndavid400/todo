import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import instance from "@/utils/axios";

import { HexColorPicker } from "react-colorful";
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  const [color, setColor] = useState("#4f4ff1");

  const addCategory = async () => {
    const title = category;
    const color_code = color;
    const input = document.getElementById("new-input");
    input.value = '';
    return await instance
      .post("/categories", { title, color_code })
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
    console.log(color);
  }, []);

  return (
    <>
      <Card className="list">
        <CardHeader>
          <CardTitle>Categories</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          {categories && categories.sort((a, b) => (a.id > b.id) ? 1 : -1).map(function(i){
            return (
              <div key={i.id} className="items-top flex items-center justify-between space-x-2 mt-3">
                <div className="flex items-center gap-1.5 leading-none">
                  <Link to={'/categories/' + i.id}>{i.title}</Link>
                </div>
              </div>
            )
          })}
        </CardContent>
        <CardFooter>
          <div className="flex flex-col">
            <div id="new" className="flex ">
              <Input id="new-input" onChange={(e) => setCategory(e.target.value)} />
              <input type="button" id="new-btn" value="Add" onClick={() => addCategory()} />
            </div>
            <HexColorPicker color={color} onChange={setColor} className="mt-5" />
          </div>
        </CardFooter>
      </Card>
    </>
  )
};

export default Categories;

