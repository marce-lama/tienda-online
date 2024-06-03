import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../cartWidget/CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon color="" />
      </Badge>
    </div>
  );
};

export default CartWidget;
