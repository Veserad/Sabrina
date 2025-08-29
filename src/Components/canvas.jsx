import Offcanvas from "react-bootstrap/Offcanvas";

function OffCanvas({ show, handleClose, title, children, ...props }) {
  return (
    <Offcanvas show={show} onHide={handleClose} {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffCanvas;
