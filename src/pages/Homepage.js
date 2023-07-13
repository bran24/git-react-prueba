import { FaGithubAlt, FaFaceGrinSquintTears } from "react-icons/fa6";

export default function Homepage() {
  let imprimir = () => {
    console.log("hola mundooo");
  };

  return (
    <div>
      <h1>
        Pagina Principal
        <FaFaceGrinSquintTears />
      </h1>

      <button onClick={imprimir}>
        Aceptar <FaGithubAlt />
      </button>
    </div>
  );
}
