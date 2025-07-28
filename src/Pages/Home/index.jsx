import CarouselHome from "../../CarouselHome";
import "./home.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <CarouselHome />
      <div className="home-images">
        <div>
          <button>
            <img
              src="https://acdn-us.mitiendanube.com/stores/915/088/themes/new_linkedman/1-img-2056557664-1741794533-39397890acdfdb099b088a82f17986fc1741794533-480-0.jpg?721963621"
              alt="programacion"
              width={"365px"}
              height={"360px"}
            />
          </button>
        </div>
        <div className="home-image-2">
          <button>
            <img
              src="https://acdn-us.mitiendanube.com/stores/915/088/themes/new_linkedman/1-img-196832069-1741741731-cca029e37c497536e38e8d547da898b81741741732-480-0.jpg?721963621"
              alt="programacion"
              width={"365px"}
              height={"360px"}
            />
          </button>
        </div>
        <div>
          <button>
            <img
              src="https://acdn-us.mitiendanube.com/stores/915/088/themes/new_linkedman/1-img-81181632-1741794533-242d434a0f2792aaeb8f2c21153b0e8c1741794534-480-0.jpg?721963621"
              alt="programacion"
              width={"365px"}
              height={"360px"}
            />
          </button>
        </div>
      </div>
      <div>
        <div className="home-categories">
          <ul>
            <li>
              <h6>Categorías principales</h6>
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
        <div className="home-destacados"></div>
      </div>
    </div>
  );
}
export default Home;
