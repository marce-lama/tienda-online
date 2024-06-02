import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div>    
      <div className="navContainer">
        <Link to="/">
          <h4>Logo</h4>
        </Link>
        <ul className="containerCategories">
          <li>Home</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
        <Link to="/Cart">
          <CartWidget />
        </Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>

  );
};

export default Navbar;
