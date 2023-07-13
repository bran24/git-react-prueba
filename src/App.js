import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<h1>No Encontrado</h1>} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/usuarios" element={<Navigate to="/users"></Navigate>} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<p>Bienvenido Muchacho</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
