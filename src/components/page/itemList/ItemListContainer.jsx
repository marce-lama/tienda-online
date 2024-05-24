import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => setItems(data));
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
