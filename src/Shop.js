import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import useFetch from "./useFetch.js";
import "./index.css";
import { data } from "autoprefixer";

export default function Shop() {
  const [items, setItems] = useState([]);
  const {get, loader} = useFetch();

  useEffect(()=>{
    get ("https://covid-shop-mcs.herokuapp.com/")
    .then(data => {
      if (data) {setItems(data)}
    })
    .catch(error => console.log(error))
  }, [])
 
  return (
    <div >
      {loader && <p>Загрузка</p>/* Лоадер-сообщение */}
      {items.map((item) => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  );
}
