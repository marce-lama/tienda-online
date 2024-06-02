import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/page/itemList/ItemListContainer"
import ItemDetailContainer from "./components/page/itemDetail/ItemDetailContainer"
import CartContainer from "./components/page/cart/CartContainer"
import Navbar from "./components/layout/navbar/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<CartContainer />}/>
        </Route>
          <Route path="*" element={<h1>Error 404 Not Found</h1>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
