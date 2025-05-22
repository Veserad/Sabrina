import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("correo")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>CONTRASEÑA</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("clave")}
        />
      </Form.Group>
      <p>¿Olvidaste tu contraseña?</p>
      <div className="d-grid gap-2">
        <Button variant="dark" size="lg">
          Block level button
        </Button>
      </div>
      <p>
        ¿No tenés una cuenta? <span>Crear cuenta</span>
      </p>
    </Form>
  );
}

export default Login;
