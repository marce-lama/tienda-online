import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
  console.log(
    "Este Console.log viene de ItemLists =>",
    "Estan llegando los items",
    items
  );
  return (
    <div className="productCardContainer">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
