import { BgLines } from "../svg";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useState } from "react";
import axios from "axios";

const Login = ({ setUser,id }) => {
  const navigate = useNavigate();
  const [errormessage, setErrormessage] = useState("");

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const sendLogin = (e) => {
    axios
      .post(`http://165.22.81.197:8000/api/token/`, loginData)
      .then((res) => {
        if ((res.status = 200)) {
          setUser(true);
          navigate("/home");
          localStorage.setItem("access", res.data.access);
        }
      })
      .catch((error) => {
        if (error.response.request.status === 401) {
          setErrormessage("Login və ya şifrə yanlışdır!");
        }
      });
  };
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setLoginData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  return (
    <div className="loginPage">
      <div className="bgImg"></div>
      <div className="loginForm">
        <div className="loginFormBG">
          <div className="bgLines">
            <BgLines />
          </div>
        </div>
        <div className="loginInputs">
          <h2>Tiket sistemə giriş</h2>
          <div className="w-full">
            <div className="mb-1">
              <Label>Email</Label>
            </div>
            <Input
              onChange={handleChange}
              name="username"
              type="email"
              placeholder="kenanakperov@omnitech.az"
            />
          </div>
          <div className="w-full mt-8 mb-4">
            <div className="mb-1">
              <Label>Şifrə</Label>
            </div>
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="*********"
            />
          </div>
          <span className="errormessage">{errormessage}</span>
          <div className="loginBtn">
            <Button
              onClick={() => {
                sendLogin();
              }}
              variant="mybtn"
              width="400px"
            >
              <Label>Daxil ol</Label>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
