import { Button } from "@mui/material"


const Counter = ({counter, setCounter, agregarAlCarrito}) => {
  return (
    <div>
      <div style={{display:"flex", gap:20, alignItems:"center", marginTop:30}}>
          <Button variant="contained" onClick={()=>setCounter(counter-1)}>-</Button>
          <h3>{counter}</h3>
          <Button variant="contained" onClick={()=>setCounter(counter+1)}>+</Button>
      </div>
      <div style={{marginTop:10}}>
        <Button variant="contained" color="secondary" onClick={()=> agregarAlCarrito(counter)}>Agregar al Carrito</Button>
      </div>
    </div>
  )
}

export default Counter