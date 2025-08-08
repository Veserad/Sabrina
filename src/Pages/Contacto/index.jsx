import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import styles from "./contacto.module.css";
import { Link } from "react-router-dom";
function Contacto() {
  return (
    <>
      <div>
        <p style={{ fontSize: "20px" }}>
          <Link>Inicio</Link> /{" "}
          <span style={{ fontWeight: "bold" }}>Contacto</span>
        </p>
      </div>
      <div className={styles.contactoPage}>
        <div className={styles.contactos}>
          <div className={styles.contacto1}>
            <div>
              <FaPhone className={styles.icons} />
              4554-2680
            </div>
            <div>
              <MdEmail className={styles.icons} />
              consultas@sabrina.com.ar
            </div>
            <div>
              <MdPlace className={styles.icons} />
              Av. Forest 371
            </div>
          </div>
          <div className={styles.contacto2}>
            <div>
              <FaInstagram className={styles.icons} />
              Siguenos en Instagram
            </div>
            <div>
              <FaFacebookF className={styles.icons} />
              Siguenos en Facebook
            </div>
          </div>
        </div>

        <div className={styles.formulario}>
          <div>
            <label htmlFor="">NOMBRE</label>
            <div>
              <input type="text" />
            </div>
          </div>

          <div>
            <label htmlFor="">EMAIL</label>
            <div>
              <input type="email" />
            </div>
          </div>
          <div>
            <label htmlFor="">TELÉFONO (OPCIONAL)</label>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>
            <label htmlFor="">MENSAJE (OPCIONAL)</label>
            <div>
              <textarea name="" id=""></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contacto;
