import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { create } from "../../Utils/authServices";
import "./register.css";
import { Link } from "react-router-dom";
import Input from "./input";
import { useState } from "react";
import AlertNavigation from "../../Components/AlertNavigation";
import ButtonSpinner from "../../Components/spinner";

function Registro() {
  const [loading, setLoading] = useState(false);
  const [verClave, setVerClave] = useState(false);
  const [alertNavigation, setAlertNavigation] = useState({
    message: "",
    variant: "",
  });
  const onsubmit = async (data) => {
    setLoading(true);
    try {
      const response = await create(data);
      setLoading(false);
      setAlertNavigation({
        message: "Tu usuario ha sido registrado, serás redirigiado al Login",
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
  const clave = watch("password");
  return (
    <>
      <p style={{ margin: "0" }}>
        <Link to={"/"}>Inicio</Link> / {""}
        <Link to={"/account"}>Mi Cuenta</Link> {"/ "}
        <span className="negrita">Crear Cuenta</span>
      </p>
      <div className="fondo">
        <Form onSubmit={handleSubmit(onsubmit)} className="formulario">
          <p>
            Comprá más rápido y llevá el control de tus pedidos, ¡en un solo
            lugar!
          </p>
          <Input
            title="NOMBRE"
            placeholder="ej: Sergio Adrian"
            register={{ ...register("name", { required: true }) }}
            errors={errors}
            name="apellido"
          />
          <Input
            title="APELLIDO"
            placeholder="ej: Ruiz Diaz"
            register={{ ...register("lastName", { required: true }) }}
            errors={errors}
            name="nombre"
          />
          <Input
            title="EMAIL"
            placeholder="ej: tunombre@email.com"
            register={{ ...register("email", { required: true }) }}
            errors={errors}
            name="email"
          />
          <Input
            title="TELÉFONO (OPCIONAL)"
            placeholder="ej 1234567890"
            register={{ ...register("phone", { required: false }) }}
            errors={errors}
            name="telefono"
          />
          <Input
            title="CONTRASEÑA"
            type={verClave ? "text" : "password"}
            placeholder=""
            register={{
              ...register("password", {
                required: true,
                maxLength: 18,
                minLength: 6,
              }),
            }}
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
            {errors?.contraseña?.type === "required" && (
              <span>La contraseña es obligatoria</span>
            )}
            {errors?.contraseña?.type === "minLength" && (
              <span>La contraseña debe tener al menos 6 caracteres</span>
            )}
            {errors?.contraseña?.type === "maxLength" && (
              <span>La contraseña no debe tener más de 18 caracteres</span>
            )}
          </Input>
          <Input
            title="CONFIRMAR CONTRASEÑA"
            placeholder=""
            type="password"
            register={{
              ...register("contraseña2", {
                required: true,
                minLength: 6,
                maxLength: 18,
                validate: (value) => value === clave,
              }),
            }}
          >
            {errors?.contraseña2?.type === "required" && (
              <span>La contraseña es obligatoria</span>
            )}
            {errors?.contraseña2?.type === "minLength" && (
              <span>La contraseña debe tener al menos 6 caracteres</span>
            )}
            {errors?.contraseña2?.type === "maxLength" && (
              <span>La contraseñaa no debe tener mas de 18 caracteres</span>
            )}
            {errors?.contraseña2?.type === "validate" && (
              <span>Las contraseñas no coinciden</span>
            )}
          </Input>
          <div className="d-grid gap-2">
            <ButtonSpinner
              size="lg"
              label="CREAR CUENTA"
              type="submit"
              variant="dark"
              loading={loading}
            />
          </div>
          <AlertNavigation {...alertNavigation} />
          <p className="centrar">
            ¿Ya tenés una cuenta?{""}
            <span className="negrita">
              <Link to={"/account/login"}>Iniciá sesión</Link>
            </span>
          </p>
        </Form>
      </div>
    </>
  );
}

export default Registro;
