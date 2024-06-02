import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => setItems(resp.data))
      .catch((error) => console.log("Error de conexion:", error));
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
