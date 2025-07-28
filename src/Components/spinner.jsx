import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
function ButtonSpinner({ variant, type, loading, label }) {
  return (
    <>
      {/* <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button> */}
      <Button type={type} variant={variant} disabled={loading} size="lg">
        {loading && (
          <Spinner
            as="span"
            animation="grow"
            size="lg"
            role="status"
            aria-hidden="true"
          />
        )}
        {label}
      </Button>
    </>
  );
}
export default ButtonSpinner;
