import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token != null) {
      jwt_decode(token);
      setUser(true);
    }
  }, [user]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Login setUser={setUser} />}
        />
        <Route
          path="/home"
          element={
            user ? (
              <Home setUser={setUser} />
            ) : (
              <Navigate to="/" setUser={setUser} />
            )
          }
        />
        <Route
          path="/reports"
          element={user ? <Reports setUser={setUser} /> : <Navigate to="/" />}
        />
        <Route
          path="/FAQ"
          element={user ? <FAQ setUser={setUser} /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
