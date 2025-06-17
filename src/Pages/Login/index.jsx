import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { logIn } from "../../Utils/authServices";
import { useContext } from "react";
import ButtonSpinner from "../../Components/spinner";
import { AuthContext } from "../../Context/authContext";
import AlertNavigation from "../../Components/AlertNavigation";

function Login() {
  const [loading, setLoading] = useState(false);
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>CONTRASEÑA</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("contraseña")}
        />
      </Form.Group>
      <p>¿Olvidaste tu contraseña?</p>
      <div className="d-grid gap-2">
        <Button variant="dark" size="lg" type="submit">
          Conectarse
        </Button>
      </div>
      <p>
        ¿No tenés una cuenta? <span>Crear cuenta</span>
      </p>
      <ButtonSpinner
        label="Ingresar"
        type="submit"
        variant="primary"
        loading={loading}
      />
      <AlertNavigation {...alertNavigation} />
    </Form>
  );
}

export default Login;
