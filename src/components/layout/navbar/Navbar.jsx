import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div className="navContainer">
      <h4>Logo</h4>
      <ul className="containerCategories">
        <li>Home</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <ShoppingCartIcon color="secondary" />
    </div>
  );
};

export default Navbar;
