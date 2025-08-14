import { GrSend } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaMixcloud } from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="blanco">
        <div className="blanco envio">
          <div className="blanco-icon1">
            <CiDeliveryTruck size="40px" margin="0" />
          </div>
          <div>
            <h6>ENVÍOS GRATIS</h6>
            <p>Para compras de más de $160.000</p>
          </div>
        </div>
        <div className="blanco cuotas">
          <div className="blanco-icon2-3">
            <CiCreditCard1 size="40px" />
          </div>
          <div>
            <h6>CUOTAS SIN INTERÉS</h6>
            <p>
              Podés pagar con cualquier tarjeta en hasta 3 sin interés en tienda
              online!
            </p>
          </div>
        </div>
        <div className="blanco seguro">
          <div className="blanco-icon2-3">
            <IoLockClosedOutline size="40px" />
          </div>
          <div>
            <h6>SITIO SEGURO</h6>
            <p>
              Protegemos tus datos, comprá tranquila desde cualquier punto del
              país.
            </p>
          </div>
        </div>
      </div>
      <div className="negro">
        <div className="izq">
          <ul>
            <li className="nav">
              <h6>NAVEGACIÓN</h6>
            </li>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/productos"}>Colección</Link>
            </li>
            <li>
              {" "}
              <Link to={"/club-sabrina"}>Club Sabrina</Link>
            </li>
            <li>
              <Link to={"/locales"}>Locales</Link>
            </li>
            <li>
              <Link to={"/preguntasfrecuentes"}>Info & Talles</Link>
            </li>
            <li>
              <Link to={"/quienes-somos"}>Quiénes Somos</Link>
            </li>
            <li>
              <Link to={"/contacto"}>Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="medio">
          <h6>MEDIOS DE PAGO</h6>
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/link@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/nativa@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cencosud@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/argencard@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabaldebit@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/provincianet@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/maestro@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visadebit@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png"
            alt=""
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png"
            alt=""
          />
          <h6>FORMAS DE ENVÍO</h6>
          <div className="oca">
            <img
              src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/ar/oca@2x.png"
              alt="oca"
            />
          </div>
        </div>
        <div className="contacto">
          <ul>
            <li>
              <h6>CONTACTANOS</h6>
            </li>
            <li>
              <MdOutlinePhoneEnabled />
              <span> 4554-2680</span>
            </li>
            <li>
              <MdOutlineAlternateEmail />
              <span> consultas@sabrina.com.ar</span>
            </li>
            <li>
              <MdPlace />
              <span> Av. Forest 371</span>
            </li>
          </ul>
        </div>
        <div className="redes">
          <h6>REDES SOCIALES</h6>
          <div className="redes-sociales">
            <div className="insta">
              <FaInstagram size="15px" color="black" />
            </div>
            <div className="face">
              <FaFacebookF size="15px" color="black" />
            </div>
          </div>
          <h6>CLUB SABRINA</h6>
          <div className="input">
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <button>
              <div className="send">
                <GrSend size="25px" color="black" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="creado">
          <a
            href="https://www.tiendanube.com/?utm_source=store&utm_medium=referral&utm_campaign=footerSlogan"
            target="_blank"
          >
            creado con <FaMixcloud size="30px" color="black" />
            <span className="tiendanube"> tiendanube</span>
          </a>
        </div>
        <div className="copyright-text">
          <p>
            Copyright SABRINA - 2025. Todos los derechos reservados. Defensa de
            las y los consumidores. Para reclamos{" "}
            <a
              href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario"
              target="_blank"
            >
              ingresá acá.
            </a>
            {""} / <a href="">Botón de arrepentimiento</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
