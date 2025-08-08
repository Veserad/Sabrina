import { Link } from "react-router-dom";
function ClubSabrina() {
  return (
    <>
      <div>
        <p style={{ fontSize: "20px" }}>
          <Link>Inicio</Link> /{" "}
          <span style={{ fontWeight: "bold" }}>Club Sabrina</span>
        </p>
      </div>
      <img
        src="https://d26lpennugtm8s.cloudfront.net/stores/915/088/rte/sabrina%20web%20tienda%20nube%20INVIERNO%2019-221.png"
        alt=""
        width="100%"
      />
    </>
  );
}
export default ClubSabrina;
