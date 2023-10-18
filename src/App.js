import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import { useEffect } from "react";
import AdminHome from "./pages/AdminHome";
// import Users from "./pages/Users";

function App() {
  const navigate = useNavigate();
  const code = {
    username: "kenanakperov@omnitech.az",
    password: "kenan2004",
    access: "salamsalam",
  };
  useEffect(() => {
    if (localStorage.getItem("token") === code.access) {
    } else {
      navigate("/");
    }
  },[]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/adminHome" element={<AdminHome />} />
        {/* <Route path="/users" element={<Users />} /> */}
      </Routes>
    </div>
  );
}

export default App;
