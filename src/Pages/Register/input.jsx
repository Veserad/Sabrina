import Form from "react-bootstrap/Form";
function Input({
  title,
  placeholder,
  type = "text",
  register,
  errors,
  children,
  name,
  style = {},
}) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>{title}</Form.Label>
        <div style={style}>
          <Form.Control type={type} placeholder={placeholder} {...register} />
          {errors && errors?.[name]?.type === "required" && (
            <span>Este campo es obligatorio</span>
          )}
          {children && children}
        </div>
      </Form.Group>
    </div>
  );
}
export default Input;
