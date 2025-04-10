import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/Navbar.css";
import CartWidgetReactIcons from "./CartWidgetReactIcons";
import logo from "../assets/coffee-beans-filled-roast-brew-svgrepo-com.svg";

function NavbarReactBootstrap() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cafe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Packs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Metodos</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">Suscripcion</Nav.Link>

            <Nav.Link href="#home">Tiendas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetReactIcons />
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;
