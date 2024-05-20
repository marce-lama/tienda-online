import { useState } from "react"
import Counter from "./Counter"

const CounterContainer = ({agregarAlCarrito}) => {
    const [counter, setCounter] = useState(0)

  return (
    <Counter counter={counter} setCounter={setCounter} agregarAlCarrito={agregarAlCarrito}/>
  )
}

export default CounterContainer