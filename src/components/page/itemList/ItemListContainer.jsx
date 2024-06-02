import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") //Primer promesa
      .then((resp) => resp.json())             // El resp.json() devuelve otra promesa
      .then((data) => setItems(data))
      .catch((error) => console.log(error) );
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
