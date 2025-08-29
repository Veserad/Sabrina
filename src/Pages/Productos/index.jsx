import styles from "./productos.module.css";
import { FaExclamationTriangle } from "react-icons/fa"; // icono de advertencia
function Productos() {
  return (
    // <div className={styles.container}>
    //   <h2>Productos</h2>
    //   <div className={styles.messageBox}>
    //     <p>
    //       Esta sección aún no está disponible. Los productos estarán visibles
    //       una vez que la base de datos esté conectada.
    //     </p>
    //   </div>
    // </div>
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <h2>Productos</h2>
      <div className={styles.messageBox}>
        <FaExclamationTriangle className={styles.icon} />
        <p>
          Esta sección aún no está disponible. Los productos se mostrarán una
          vez que la base de datos esté conectada.
        </p>
      </div>
    </div>
  );
}
export default Productos;
