import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { create } from "../../Utils/authServices";
import { GoogleReCaptchaCheckbox } from "@google-recaptcha/react";
import "./register.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Registro() {
  // const [captchaVerificado, setCaptchaVerificado] = useState(false);
  const onsubmit = async (data) => {
    try {
      const response = await create(data);
      // setCaptchaVerificado(false);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm("mode:onChange");
  const clave = watch("contraseña");
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
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="ej: Sergio Ruiz Diaz"
              {...register("nombre", { required: true })}
            />
            {errors?.nombre?.type === "required" && (
              <span>Este campo es obligatorio</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>EMAIL</Form.Label>
            <Form.Control
              type="email"
              placeholder="ej: tunombre@email.com"
              {...register("email", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPhone">
            <Form.Label>TELÉFONO (OPCIONAL)</Form.Label>
            <Form.Control
              type="text"
              placeholder="ej: 1123445567"
              {...register("telefono", { maxLength: "10" })}
            />
            {errors?.telefono?.type === "maxLength" && (
              <span>El número de teléfono no debe exceder los 10 dígitos</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>CONTRASEÑA</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              {...register("contraseña", {
                required: true,
                maxLength: "18",
                minLength: "6",
              })}
            />
            {errors?.contraseña?.type === "required" && (
              <span>La contraseña es obligatoria</span>
            )}
            {errors?.contraseña?.type === "minLength" && (
              <span>La contraseña debe tener al menos 6 caracteres</span>
            )}
            {errors?.contraseña?.type === "maxLength" && (
              <span>La contraseñaa no debe tener mas de 18 caracteres</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword2">
            <Form.Label>CONFIRMAR CONTRASEÑA</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              {...register("contraseña2", {
                required: true,
                maxLength: "18",
                minLength: "6",
                validate: (value) => value === clave,
              })}
            />
            {errors?.contraseña2?.type === "required" && (
              <span>La contraseña es obligatoria</span>
            )}
            {errors?.clave2?.type === "minLength" && (
              <span>La contraseña debe tener al menos 6 caracteres</span>
            )}
            {errors?.contraseña2?.type === "maxLength" && (
              <span>La contraseñaa no debe tener mas de 18 caracteres</span>
            )}
            {errors?.contraseña2?.type === "validate" && (
              <span>Las contraseñas no coinciden</span>
            )}
          </Form.Group>

          {/* <GoogleReCaptchaCheckbox
            className="centrar"
            onChange={() => setCaptchaVerificado(true)}
          /> */}

          <div className="d-grid gap-2">
            <Button
              variant="dark"
              size="lg"
              type="submit"
              // disabled={!captchaVerificado}
            >
              CREAR CUENTA
            </Button>
          </div>
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
