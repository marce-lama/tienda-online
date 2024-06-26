import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div style={{borderStyle:"solid"}}>
      <Card sx={{ width: 345 , maxHeight: 600}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={item.imagen1} style={{maxWidth:345, maxHeight:304, marginLeft:"auto", marginRight:"auto", marginTop: 20, objectFit:"contain"}}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{fontSize: "1em", textAlign: "center", fontWeight:"bold"}}>
              {item.marca}
            </Typography>
            <Typography style={{textAlign:"center", color:"red", fontWeight:"bold", fontSize:20}}>${item.precio}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/itemDetail/${item.id}`}>
            <Button size="small" color="secondary" variant="contained" style={{marginLeft:"auto", marginRight:"auto",}}>
              Ver Detalles
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
