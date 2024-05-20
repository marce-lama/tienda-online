import Navbar from "./components/layout/navbar/Navbar"
import ItemDetailContainer from "./components/page/itemDetail/ItemDetailContainer"
import ItemListContainer from "./components/page/itemList/ItemListContainer"

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  )
}

export default App
