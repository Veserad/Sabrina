import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router";
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">SABRINA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">INICIO</Nav.Link>
            <NavDropdown title="COLECCION" id="navbarScrollingDropdown">
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
            <Nav.Link as={Link} to={"/club-sabrina"}>
              CLUB SABRINA
            </Nav.Link>
            <Nav.Link as={Link} to={"/locales"}>
              LOCALES
            </Nav.Link>
            <Nav.Link as={Link} to={"/preguntasfrecuentes"}>
              INFO & TALLES
            </Nav.Link>
            <Nav.Link as={Link} to={"/quienes-somos"}>
              QUIÉNES SOMOS
            </Nav.Link>
            <Nav.Link as={Link} to={"/contacto"}>
              CONTACTO
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
