import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div>    
      <div className="navContainer">
        <Link to="/">
          <img style={{maxWidth: 60, maxHeight: 60, objectFit:"contain"}} src="public\_8d690a16-0a74-47a4-a22f-5936a74aaff1.jpg" alt="" />
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
