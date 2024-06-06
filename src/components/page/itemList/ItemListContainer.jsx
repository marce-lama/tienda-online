import { useEffect, useState } from "react";
import ItemList from "./ItemList";
//import axios from "axios";
import "../../productsMock"
import { products } from "../../productsMock";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    const tarea = new Promise((resolve, reject)=>{
      resolve(products)
      reject("No se cargaron los datos")
  
    })
    tarea.then((respuesta)=>setItems(respuesta))
         .catch((error)=>console.log(error))
  }, [])
  

  
  /*useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => setItems(resp.data))
      .catch((error) => console.log("Error de conexion:", error));
  }, []);*/

  return <ItemList items={items} />;
};

export default ItemListContainer;
