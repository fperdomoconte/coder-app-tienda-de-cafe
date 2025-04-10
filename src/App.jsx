import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer.jsx";
import NavbarReactBootstrap from "./components/NavbarReactBootstrap";

function App() {
  return (
    <>
      <NavbarReactBootstrap />
      <ItemListContainer greeting="Tienda de cafe" />
    </>
  );
}

export default App;
