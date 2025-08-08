import { Link } from "react-router-dom";
function QuienesSomos() {
  return (
    <div>
      <div>
        <p style={{ fontSize: "20px" }}>
          <Link>Inicio</Link> /{" "}
          <span style={{ fontWeight: "bold" }}>Quiénes somos</span>
        </p>
      </div>
      <h2 style={{ fontWeight: "bold" }}>LA HISTORIA</h2>
      <div>
        Olivos, pcia. de Buenos Aires. Junio de 1965. Un garage de 20 m2. Una
        familia dedicada a la fabricación de indumentaria y la admiración por la
        bella actriz Audrey Hepburn dieron el origen a SABRINA.
      </div>
      <div>
        Hoy, manteniendo el espítitu original junto al profesionalismo ganado
        con el tiempo, la empresa crece día a día, con una fábrica modelo y
        numerosos locales en todo el país.
      </div>
      <h2 style={{ fontWeight: "bold" }}>EL ESPÍRITU</h2>
      <p>
        Acompañamos a todas las mujeres en su vida cotidiana. Diseñamos prendas
        cálidas, diversas, cómodas, versátiles como cada mujer que nos inspira.
      </p>
      <h6>
        Originales, emprendedoras, espontáneas, activas y luchadoras, profundas
        y simples. Mujeres de hoy, que se re-inventan una y otra vez.
      </h6>
      <img
        src="https://d26lpennugtm8s.cloudfront.net/stores/915/088/rte/historia%20sabrina%20collage-32.png"
        alt=""
        width="100%"
      />
    </div>
  );
}
export default QuienesSomos;
