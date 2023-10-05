// import React, { useState } from "react";
import { BgLines } from "../svg";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

const Login = () => {
  // const [show, setShow] = useState("password");
  // const [showText, setShowText] = useState("Göstər");

  const navigate = useNavigate();

  // const showHide = () => {
  //   if (show === "password") {
  //     setShow("text");
  //     setShowText("Gizlət");
  //   } else {
  //     setShow("password");
  //     setShowText("Göstər");
  //   }
  // };
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
            <Input type="email" placeholder="dima@omnitech.az" />
          </div>
          <div className="w-full mt-8 mb-4">
            <div className="mb-1">
              <Label htmlFor="message">Şifrə</Label>
            </div>
            <Input type="password" placeholder="*********" />
          </div>
          <div className="loginBtn">
            <Button
              onClick={() => navigate("/home")}
              variant="mybtn"
              width="400px"
            >
              <Label htmlFor="message">Daxil ol</Label>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
