import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ agregarAlCarrito, product }) => {
  return (
  <div>
    <img src={product.imagen1} alt="" />
    <h1>{product.marca}</h1>
    <h2>{product.descripcion}</h2>
    <h3>{product.color}</h3>
    <h3>{product.edad}</h3>
    <h3>{product.genero}</h3>
    <h3>{product.rodado}</h3>
    <h4>{product.precio}</h4>
    <CounterContainer agregarAlCarrito={agregarAlCarrito} />;
  </div>
)};

export default ItemDetail;
