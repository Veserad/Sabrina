import CarouselHome from "../../CarouselHome";
import styles from "./home.module.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Home() {
  return (
    <div>
      <CarouselHome />
      <div className={styles.homeImages}>
        <div>
          <button>
            <Link to={"/abrigos-sacos"}>
              <img
                src="https://acdn-us.mitiendanube.com/stores/915/088/themes/new_linkedman/1-img-2056557664-1741794533-39397890acdfdb099b088a82f17986fc1741794533-480-0.jpg?721963621"
                alt="programacion"
                width={"365px"}
                height={"360px"}
              />
            </Link>
          </button>
        </div>
        <div className={styles.homeImages2}>
          <button>
            <Link to={"/tejidos"}>
              <img
                src="https://acdn-us.mitiendanube.com/stores/915/088/themes/new_linkedman/1-img-196832069-1741741731-cca029e37c497536e38e8d547da898b81741741732-480-0.jpg?721963621"
                alt="programacion"
                width={"365px"}
                height={"360px"}
              />
            </Link>
          </button>
        </div>
        <div>
          <button>
            <Link to={"/camperas"}>
              <img
                src="https://acdn-us.mitiendanube.com/stores/915/088/themes/new_linkedman/1-img-81181632-1741794533-242d434a0f2792aaeb8f2c21153b0e8c1741794534-480-0.jpg?721963621"
                alt="programacion"
                width={"365px"}
                height={"360px"}
              />
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.homeFinal}>
        <div className={styles.homeCategories}>
          <ul>
            <li>
              <h6 style={{ fontWeight: "bold", marginBottom: "20px" }}>
                Categorías principales
              </h6>
            </li>
            <li>
              <Link>Abrigos & Sacos</Link>
            </li>
            <li>
              <Link>Camperas</Link>
            </li>
            <li>
              <Link>Sastrería</Link>
            </li>
            <li>
              <Link>Tejidos</Link>
            </li>
            <li>
              <Link to={"/"}> Sweaters & BUZOS</Link>
            </li>
            <li>
              <Link>Camisas & Blusas</Link>
            </li>
            <li>
              <Link>Remeras</Link>
            </li>
            <li>
              <Link>Pantalones</Link>
            </li>
            <li>
              <Link>Jeans</Link>
            </li>
            <li>
              <Link>Pantalones</Link>
            </li>
            <li>
              <Link>Jeans</Link>
            </li>
            <li>
              <Link>Vestidos & Monos</Link>
            </li>
            <li>
              <Link>Sportswear</Link>
            </li>
            <li>
              <Link>Faldas</Link>
            </li>
            <li>
              <Link>Accesorios</Link>
            </li>
            <li>
              <Link>Gift Cards</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
          </ul>
        </div>
        <div className={styles.homeDestacadosContainer}>
          <div className={styles.homeDestacados}>
            <CardGroup>
              <Card style={{ marginLeft: "25px", height: "auto" }}>
                <Card.Img
                  variant="top"
                  src="https://acdn-us.mitiendanube.com/stores/915/088/products/sabrina-fw25-ecom0234-1-68a02a4da7ebbbabaf17416259745132-640-0.webp"
                />
                <Card.Body>
                  <Card.Title style={{ height: "auto" }}>
                    <Link>TAPADO BENITA</Link>
                  </Card.Title>
                  <Card.Text>$109.990</Card.Text>
                </Card.Body>
                <Card.Footer>3 cuotas sin interés de $36.663,33</Card.Footer>
              </Card>
              <Card style={{ marginLeft: "25px" }}>
                <Card.Img
                  variant="top"
                  src="https://acdn-us.mitiendanube.com/stores/915/088/products/sabrina-fw25-ecom0663-1b1779d8c0cd124d6417416229486652-640-0.webp"
                />
                <Card.Body>
                  <Card.Title>TAPADO AMATISTA</Card.Title>
                  <Card.Text>$119.990</Card.Text>
                </Card.Body>
                <Card.Footer>3 cuotas sin interés de $39.996,67</Card.Footer>
              </Card>
              <Card style={{ marginLeft: "25px" }}>
                <Card.Img
                  variant="top"
                  src="https://acdn-us.mitiendanube.com/stores/915/088/products/sabrina-fw25-ecom0298-ca4e3ba7dd24206d5217416236722817-640-0.webp"
                />
                <Card.Body>
                  <Card.Title>TAPADO HELEN</Card.Title>
                  <Card.Text>$99.990 $79.990</Card.Text>
                </Card.Body>
                <Card.Footer>3 cuotas sin interés de $26.663,33</Card.Footer>
              </Card>
            </CardGroup>
          </div>
          <div className={styles.homeButtonContainer}>
            <button className={styles.homeButton}>
              <Link
                to={"/productos"}
                style={{ color: "white", textDecoration: "none" }}
              >
                VER TODOS LOS PRODUCTOS
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
        <Link to={"/club-sabrina"}>
          <img
            src="https://acdn-us.mitiendanube.com/stores/915/088/themes/new_linkedman/1-img-1269857575-1584128092-5c742fc8ed0117c287ef72633a601dac1584128092-1920-1920.webp?459518919"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
export default Home;
