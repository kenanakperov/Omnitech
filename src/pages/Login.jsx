import { BgLines } from "../svg";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useState } from "react";

const Login = () => {
  let [loginData, setLoginData] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

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
              <Label htmlFor="message">Email</Label>
            </div>
            <Input
              onChange={handleChange}
              name="mail"
              type="email"
              placeholder="kenanakperov@omnitech.az"
            />
          </div>
          <div className="w-full mt-8 mb-4">
            <div className="mb-1">
              <Label htmlFor="message">Şifrə</Label>
            </div>
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="*********"
            />
          </div>
          <div className="loginBtn">
            <Link to={"/home"}>
              <Button onClick={()=>console.log(loginData)} variant="mybtn" width="400px">
                <Label htmlFor="message">Daxil ol</Label>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
