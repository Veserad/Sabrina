import { CiDeliveryTruck } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="blanco">
        <div className="blanco envio">
          <CiDeliveryTruck />
          <div>
            <h5>Envíos gratis</h5>
            <p>Para compras de más de $160.000</p>
          </div>
        </div>
        <div className="blanco cuotas">
          <CiCreditCard1 />
          <div>
            <h6>CUOTAS SIN INTERÉS</h6>
            <p>
              Podés pagar con cualquier tarjeta en hasta 3 sin interés en tienda
              online!
            </p>
          </div>
        </div>
        <div className="blanco seguro">
          <IoLockClosedOutline />
          <div>
            <h6>Sitio seguro</h6>
            <p>
              Protegemos tus datos, comprá tranquila desde cualquier punto del
              país.
            </p>
          </div>
        </div>
      </div>
      <div className="negro">
        <div>
          <h6>NAVEGACIÓN</h6>
          <ul>
            <li>Inicio</li>
            <li>Colección</li>
            <li>Club Sabrina</li>
            <li>Locales</li>
            <li>Info & Talles</li>
            <li>Quiénes Somos</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div>
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
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/ar/oca@2x.png"
            alt="oca"
          />
        </div>
        <div>
          <h6>CONTACTANOS</h6>
          <p>4554-2680</p>
          <p>consultas@sabrina.com.ar</p>
          <p>Av. Forest 371</p>
        </div>
        <div>
          <h6>REDES SOCIALES</h6>
          <h6>CLUB SABRINA</h6>
          <input type="text" placeholder="Email" />
        </div>
      </div>
    </>
  );
}
export default Footer;
