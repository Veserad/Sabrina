import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { logIn } from "../../Utils/authServices";
import { useContext } from "react";
import ButtonSpinner from "../../Components/spinner";
import { AuthContext } from "../../Context/authContext";
import AlertNavigation from "../../Components/AlertNavigation";
import "../Register/register.css"; // Assuming you have some styles in this file
import { Link } from "react-router-dom";
import Input from "../Register/input";

function Login() {
  const [loading, setLoading] = useState(false);
  const [verClave, setVerClave] = useState(false);
  const [alertNavigation, setAlertNavigation] = useState({
    message: "",
    variant: "",
  });
  const { handleLogin } = useContext(AuthContext);
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const token = await logIn(data);
      console.log("token: ", token);
      setLoading(false);
      setAlertNavigation({
        message: "Inicio de sesión exitoso.",
        variant: "success",
        duration: 2000,
        link: "/",
      });
      handleLogin(token);
    } catch (error) {
      console.log("error: ", error);
      setLoading(false);
      setAlertNavigation({
        message: "Error al iniciar sesión, por favor intente nuevamente.",
        variant: "danger",
      });
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <p style={{ margin: "0" }}>
        <Link to={"/"}>Inicio</Link> / {""}
        <Link to={"/account"}>Mi Cuenta</Link> {"/ "}
        <span className="negrita">Crear Cuenta</span>
      </p>
      <div className="fondo">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            title="EMAIL"
            placeholder="Ingrese su correo electrónico"
            type="email"
            register={{ ...register("email", { required: true }) }}
            errrors={errors}
            name="email"
          />
          <Input
            title="CONTRASEÑA"
            placeholder="Ingrese su contraseña"
            type={verClave ? "text" : "password"}
            register={{ ...register("contraseña", { required: true }) }}
            errors={errors}
            name="contraseña"
            style={{ position: "relative" }}
          >
            <span
              onClick={() => setVerClave(!verClave)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "0.9rem",
                color: "#555",
              }}
            >
              {verClave ? "🙈" : "👁️"}
            </span>
          </Input>
          <p>¿Olvidaste tu contraseña?</p>
          <div className="d-grid gap-2">
            <ButtonSpinner
              size="lg"
              label="Conectarse"
              type="submit"
              variant="dark"
              loading={loading}
            />
          </div>
          <p>
            ¿No tenés una cuenta? <span>Crear cuenta</span>
          </p>
          <AlertNavigation {...alertNavigation} />
        </Form>
      </div>
    </>
  );
}

export default Login;
