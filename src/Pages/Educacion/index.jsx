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
        src="/Sabrina/pdfs/Certificado Angular.pdf"
        width="100%"
        height="650px"
      /> */}
      <embed
        className={styles.pdf}
        src="/Sabrina/pdfs/Certificado ReactJS.pdf"
        width="100%"
        height="650px"
      />
      <embed
        className={styles.pdf}
        src="/Sabrina/pdfs/Certificados NodeJs.pdf"
        width="100%"
        height="650px"
      />
      <embed
        className={styles.pdf}
        src="/Sabrina/pdfs/Certificado Professional Full-Stack Developer.pdf"
        width="100%"
        height="650px"
      />
      <embed
        className={styles.pdf}
        src="/Sabrina/pdfs/Certificados full stack con react.pdf"
        width="100%"
        height="650px"
      />
    </>
  );
}
export default Educacion;
