import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./About/About";
import Contact from './Contact/Contact';
import Menu from "./Menu";
import Service from "./Service/Service";
import PetShop from "./PetShop/PetShop";
import "./App.css"
import Pro from "./Product/Pro";
function App() {
  return (
    <>
      <div className="App">
      
        <BrowserRouter>
          <Menu/>
          <Routes>
          <Route exact path="/"  element={<About name="About" />} />
          <Route path="/service" element={<Service name="Service" />} />
          <Route path="/product" element={<Pro name="Product"/>}/>
          <Route path="/pet-shop" element={<PetShop name="pet-shop" />} />
        <Route path="/contact" element={<Contact name="Contact"/>} />
      </Routes>
        </BrowserRouter>
        </div>
      </>

  );
}

export default App;
