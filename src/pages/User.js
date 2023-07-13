import { Link, useParams } from "react-router-dom";

export default function User() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Usuarios</h1>
      <Link to={"/about"}>About</Link>
      <h1>{params.id}</h1>
    </>
  );
}
