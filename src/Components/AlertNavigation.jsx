import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
function AlertNavigation({ variant, message, duration, link }) {
  const navigate = useNavigate();
  if (duration !== 0 && link) {
    setTimeout(() => {
      navigate(link);
    }, duration);
  }
  return (
    <Alert variant={variant}>
      <Alert.Heading>{message}</Alert.Heading>
    </Alert>
  );
}
export default AlertNavigation;
