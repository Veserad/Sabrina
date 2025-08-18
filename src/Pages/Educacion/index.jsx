import styles from "./educacion.module.css";
function Educacion() {
  return (
    <>
      <p>
        Poseo conocimiento tanto en front end (React) como en back end (NodeJs,
        express, mongodb)
      </p>
      <p>
        A continuación presento mis certificados, obtenidos en mi formación como
        desarrollador:
      </p>
      {/* <embed
        className={styles.pdf}
        src="/Sabrina/src/Pages/Educacion/Certificado Angular.pdf"
        width="100%"
        height="650px"
      /> */}
      <embed
        className={styles.pdf}
        src="/Sabrina/src/Pages/Educacion/Certificado ReactJs.pdf"
        width="100%"
        height="650px"
      />
      <embed
        className={styles.pdf}
        src="/Sabrina/src/Pages/Educacion/Certificados NodeJs.pdf"
        width="100%"
        height="650px"
      />
      <embed
        className={styles.pdf}
        src="/Sabrina/src/Pages/Educacion/Certificado Professional Full-Stack Developer.pdf"
        width="100%"
        height="650px"
      />
      <embed
        className={styles.pdf}
        src="/Sabrina/src/Pages/Educacion/Certificados full stack con react.pdf"
        width="100%"
        height="650px"
      />
    </>
  );
}
export default Educacion;
