import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

let id = 2; 

useEffect(() => {
  let promesa = new Promise((resolve, reject)=>{
    let productSelected = products.find((product)=> product.id === id)
    resolve(productSelected)
  })
  promesa.then((resp)=> setProduct(resp)).catch((err)=> console.log(err))

}, [id])

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    console.log(data);
  };

  return <ItemDetail agregarAlCarrito={agregarAlCarrito} product={product} />;
};

export default ItemDetailContainer;
