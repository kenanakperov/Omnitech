import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import FAQ from "./pages/FAQ";
import Users from "./pages/Users";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
