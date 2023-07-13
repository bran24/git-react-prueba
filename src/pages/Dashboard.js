import { useNavigate, Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      {/* hola mundo */}
      <h1>Dasboard</h1>
      <button onClick={handleClick}>Logout</button>
      <br />
      <Link to="welcome">Welcome</Link>
      <Outlet></Outlet>
    </div>
  );
}
