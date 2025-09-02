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
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowLeftSLine } from "react-icons/ri";

import { MdOutlineMenu } from "react-icons/md";
import OffCanvas from "../Components/canvas.jsx";
function NavBar() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showColeccion, setShowColeccion] = useState(false);

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
    <div className={styles.fixedNavbar}>
      <div className={styles.divNegro}>
        <Link to="/productos">
          ¡Envío gratis a partir de $130.000 y 6 cuotas sin interés! - ¡10%OFF
          abonando con transferencia!
        </Link>
      </div>
      <div
        className={`${styles.menuMobile} ${scrolled ? styles.scrolled : ""}`}
      >
        <h1>
          <Link to={"/"} className={styles.sabrina}>
            S A B R I N A
          </Link>
        </h1>
        <div className={styles.menuMobileButtons}>
          <Button
            variant=""
            className={styles.botonCarrito}
            onClick={() => setShowFirst(true)}
          >
            <MdOutlineShoppingCart size={25} />
          </Button>
          <Button
            variant="none"
            className={`me-2 ${styles.me2}`}
            onClick={() => setShowSecond(true)}
          >
            <MdOutlineMenu size={25} />
            MENÚ
          </Button>
        </div>

        <OffCanvas
          show={showFirst}
          handleClose={() => setShowFirst(false)}
          title="Carrito de compras"
          placement="end"
          className={styles.offCanvas}
        >
          EL CARRITO DE COMPRAS ESTA VACÍO
        </OffCanvas>

        <OffCanvas
          className={styles.offCanvas}
          show={showSecond}
          handleClose={() => setShowSecond(false)}
          title=""
          placement="end"
        >
          <div className={styles.offcanvasContent}>
            <div>
              <div className={styles.offcanvasLinks}>
                <hr />
                <Link to={"/"} onClick={() => setShowSecond(false)}>
                  Inicio
                </Link>
                <hr />
                <button
                  to={"/"}
                  onClick={() => setShowColeccion(!showColeccion)}
                  className={styles.coleccionButton}
                >
                  Colección{" "}
                  <div>
                    <IoIosArrowDown
                      className={
                        showColeccion
                          ? styles.coleccionInvisible
                          : styles.coleccionVisible
                      }
                    />
                    <RiArrowLeftSLine
                      className={
                        showColeccion
                          ? styles.coleccionVisible
                          : styles.coleccionInvisible
                      }
                    />
                  </div>
                </button>
                <div
                  className={
                    showColeccion
                      ? styles.coleccionVisible
                      : styles.coleccionInvisible
                  }
                >
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Ver todos los productos
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Abrigos & Sacos
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Camperas
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Sastrería
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Tejidos
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Sweaters & Buzos
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Camisas & Blusas
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Remeras
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Pantalones
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Jeans
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Vestidos & Monos
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Sportswear
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Faldas
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Accesorios
                  </Link>
                  <hr />
                  <Link to={"/productos"} onClick={() => setShowSecond(false)}>
                    Gift Cards
                  </Link>
                  <hr />
                  <Link to={"/"} onClick={() => setShowSecond(false)}>
                    Home
                  </Link>
                </div>
                <hr />
                <Link to={"/club-sabrina"} onClick={() => setShowSecond(false)}>
                  Club Sabrina
                </Link>
                <hr />
                <Link to={"/locales"} onClick={() => setShowSecond(false)}>
                  Locales
                </Link>
                <hr />
                <Link
                  to={"/preguntasfrecuentes"}
                  onClick={() => setShowSecond(false)}
                >
                  Info & Talles
                </Link>
                <hr />
                <Link
                  to={"/quienes-somos"}
                  onClick={() => setShowSecond(false)}
                >
                  Quiénes Somos
                </Link>
                <hr />
                <Link to={"/contacto"} onClick={() => setShowSecond(false)}>
                  Contacto
                </Link>
                <hr />
              </div>
              <div className={styles.menuFondo}>
                <div className={styles.userMobile}>
                  <FaRegUser
                    className={styles.userIcon}
                    size={15}
                    color="white"
                  />
                </div>
                <div>
                  <Link
                    to={"/account/register"}
                    onClick={() => setShowSecond(false)}
                  >
                    Crear Cuenta
                  </Link>{" "}
                  |{" "}
                  <Link
                    to={"/account/login"}
                    onClick={() => setShowSecond(false)}
                  >
                    Iniciar Sesión
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </OffCanvas>
      </div>
      <Navbar
        expand="lg"
        bg="none"
        className={`${styles.barra} ${
          scrolled ? styles.scrolled : ""
        } flex-nowrap`}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className={styles.sabrina}>
            S A B R I N A
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="flex-grow-1">
            <Nav
              className={`me-auto my-2 my-lg-0 ${styles.barra2}`}
              style={{ maxHeight: "50px" }}
              navbarScroll
            >
              <Nav.Link
                as={Link}
                to={"/"}
                className={`${location.pathname === "/" ? styles.active : ""}`}
              >
                INICIO
              </Nav.Link>
              <NavDropdown
                title="COLECCION"
                id="navbarScrollingDropdown"
                show={show}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                className={styles.coleccio}
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
                  location.pathname === "/club-sabrina" ? styles.active : ""
                }`}
              >
                CLUB SABRINA
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/locales"}
                className={`${
                  location.pathname === "/locales" ? styles.active : ""
                }`}
              >
                LOCALES
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/preguntasfrecuentes"}
                className={`${
                  location.pathname === "/preguntasfrecuentes"
                    ? styles.active
                    : ""
                }`}
              >
                INFO & TALLES
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/quienes-somos"}
                className={`${
                  location.pathname === "/quienes-somos" ? styles.active : ""
                }`}
              >
                QUIÉNES SOMOS
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/contacto"}
                className={`${
                  location.pathname === "/contacto" ? styles.active : ""
                }`}
              >
                CONTACTO
              </Nav.Link>
            </Nav>
            <Form className={styles.derecha}>
              <div className={styles.inputBusqueda}>
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className={`me-2 ${styles.m2}`}
                  aria-label="Search"
                />
                <Button variant="" className={styles.botonBusqueda}>
                  <IoSearch />
                </Button>
              </div>
            </Form>
            <div className={styles.botonesDerecha}>
              <div>
                <Dropdown
                  show={show2}
                  id="navbarScrollingDropdown2"
                  onMouseEnter={() => setShow2(true)}
                  onMouseLeave={() => setShow2(false)}
                >
                  <Dropdown.Toggle variant="" id="">
                    <FaRegUser className={styles.userIcon} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={styles.sesionMenu}>
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
              <div>
                <Button variant="" className={styles.botonCarrito}>
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
