import ItemDetailContainer from "./src/components/ItemDetailContainer.jsx";
import ItemListContainer from "./src/components/ItemListContainer.jsx";
import SignIn from "./src/pages/SignIn.jsx";

import NavBar from  "./src/components/NavBar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./src/components/Footer.jsx";
import Regulation from "./src/components/Regulation.jsx";

function App(){
  return(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/> }/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/electrodomesticos" element={<ItemListContainer/> }/>
        <Route path="/electrodomesticos/:category" element={<ItemListContainer/> }/>
        <Route path="/signin" element={<SignIn />}/>
      </Routes>
      <Regulation />
      <Footer />
    </BrowserRouter>
  )
}

export default App;