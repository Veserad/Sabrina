import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import styles from "./contacto.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonSpinner from "../../Components/spinner";
import AlertNavigation from "../../Components/AlertNavigation";
function Contacto() {
  const [loading, setLoading] = useState(false);
  const [alertNavigation, setAlertNavigation] = useState({
    message: "",
    variant: "",
  });
  const onsubmit = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const response = await contacto; // servicio por crear
      setLoading(false);
      setAlertNavigation({
        message:
          "Nos pondremos en contacto en la brevedad, gracias por comunicarte con nosotros.",
        variant: "success",
        duration: 3300,
        link: "/account/login",
      });
      console.log(response);
    } catch (e) {
      setAlertNavigation({
        message: registroErrorMEssage[e.code] || "Ha ocurrido un error",
        variant: "danger",
      });
      setLoading(false);
      console.log(e);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm("mode:onChange");
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

        <form className={styles.formulario} onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label htmlFor="">NOMBRE</label>
            <div>
              <input type="text" {...register("nombre", { required: true })} />
            </div>
          </div>

          <div>
            <label htmlFor="">EMAIL</label>
            <div>
              <input type="email" {...register("email", { required: true })} />
            </div>
          </div>
          <div>
            <label htmlFor="">TELÉFONO (OPCIONAL)</label>
            <div>
              <input type="text" {...register("telefono")} />
            </div>
          </div>
          <div>
            <label htmlFor="">MENSAJE (OPCIONAL)</label>
            <div>
              <textarea name="" id="" {...register("mensaje")}></textarea>
            </div>
          </div>
          <div className="d-grid gap-2">
            <ButtonSpinner
              size="lg"
              label="Enviar"
              type="submit"
              variant="dark"
              loading={loading}
            />
          </div>
          <AlertNavigation {...alertNavigation} />
        </form>
      </div>
    </>
  );
}
export default Contacto;
