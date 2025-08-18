import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./NavBar.css";
import { useEffect, useState } from "react";
function NavBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed-navbar">
      <div className="div-negro">
        <Link to="/productos">
          ¡Envío gratis a partir de $130.000 y 6 cuotas sin interés! - ¡10$OFF
          abonando con transferencia!
        </Link>
      </div>

      <Navbar
        expand="lg"
        bg="none"
        className={`barra ${scrolled ? "scrolled" : ""} flex-nowrap`}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="sabrina">
            S A B R I N A
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="flex-grow-1">
            <Nav
              className="me-auto my-2 my-lg-0 barra2"
              style={{ maxHeight: "50px" }}
              navbarScroll
            >
              <Nav.Link
                as={Link}
                to={"/"}
                className={`${location.pathname === "/" ? "active" : ""}`}
              >
                INICIO
              </Nav.Link>
              <NavDropdown
                title="COLECCION"
                id="navbarScrollingDropdown"
                show={show}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                className="coleccion"
              >
                <NavDropdown.Item as={Link} to="/productos">
                  ABRIGOS & SACOS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  CAMPERAS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  SASTRERIA
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  TEJIDOS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  SWEATERS & BUZOS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  CAMISAS & BLUSAS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  REMERAS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  PANTALONES
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  JEANS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  VESTIDOS & MONOS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  SPORTSWEAR
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  FALDAS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  ACCESORIOS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos">
                  GIFT CARDS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  HOME
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to={"/club-sabrina"}
                className={`${
                  location.pathname === "/club-sabrina" ? "active" : ""
                }`}
              >
                CLUB SABRINA
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/locales"}
                className={`${
                  location.pathname === "/locales" ? "active" : ""
                }`}
              >
                LOCALES
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/preguntasfrecuentes"}
                className={`${
                  location.pathname === "/preguntasfrecuentes" ? "active" : ""
                }`}
              >
                INFO & TALLES
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/quienes-somos"}
                className={`${
                  location.pathname === "/quienes-somos" ? "active" : ""
                }`}
              >
                QUIÉNES SOMOS
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/contacto"}
                className={`${
                  location.pathname === "/contacto" ? "active" : ""
                }`}
              >
                CONTACTO
              </Nav.Link>
            </Nav>
            <Form className="derecha">
              <div className="input-busqueda">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="" className="boton-busqueda">
                  <IoSearch />
                </Button>
              </div>
            </Form>
            <div className="botones-derecha">
              <div>
                <Dropdown
                  show={show2}
                  id="navbarScrollingDropdown2"
                  onMouseEnter={() => setShow2(true)}
                  onMouseLeave={() => setShow2(false)}
                >
                  <Dropdown.Toggle variant="" id="">
                    <FaRegUser className="user-icon" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="sesion-menu">
                    <Dropdown.Item
                      href="#/action-1"
                      as={Link}
                      to={"/account/register"}
                    >
                      CREAR CUENTA
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      as={Link}
                      to={"/account/login"}
                    >
                      INICIAR SESIÓN
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="">
                <Button variant="" className="boton-carrito">
                  <MdOutlineShoppingCart />
                </Button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
