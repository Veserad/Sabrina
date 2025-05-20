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
        className={`barra ${scrolled ? "scrolled" : ""}`}
      >
        <Container fluid>
          <div className="sabrina">
            <Nav.Link as={Link} to={"/"}>
              S A B R I N A
            </Nav.Link>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
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
                <NavDropdown.Item href="#action3">
                  ABRIGOS & SACOS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">CAMPERAS</NavDropdown.Item>
                <NavDropdown.Item href="#action3">SASTRERIA</NavDropdown.Item>
                <NavDropdown.Item href="#action3">TEJIDOS</NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  SWEATERS & BUZOS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  CAMISAS & BLUSAS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">REMERAS</NavDropdown.Item>
                <NavDropdown.Item href="#action3">PANTALONES</NavDropdown.Item>
                <NavDropdown.Item href="#action3">JEANS</NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  VESTIDOS & MONOS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">SPORTSWEAR</NavDropdown.Item>
                <NavDropdown.Item href="#action3">FALDAS</NavDropdown.Item>
                <NavDropdown.Item href="#action3">ACCESORIOS</NavDropdown.Item>
                <NavDropdown.Item href="#action3">GIFT CARDS</NavDropdown.Item>
                <NavDropdown.Item href="#action3">HOME</NavDropdown.Item>
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
              <div className="botones-derecha">
                <div>
                  <Button variant="" className="boton-user user-icon">
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="">
                        <FaRegUser className="user-icon" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="sesion-menu">
                        <Dropdown.Item href="#/action-1" as={Link}>
                          CREAR CUENTE
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2" as={Link}>
                          INICIAR SESIÓN
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Button>
                </div>
                <div className="">
                  <Button variant="" className="boton-carrito">
                    <MdOutlineShoppingCart />
                  </Button>
                </div>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
