import React, { useState, useEffect } from "react";

import { Typography } from "@mui/material";

import AuthBox from "../../shared/components/AuthBox";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validator";




export default function RegisterPage() {
  const [mail, setMail] = useState();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState('');


  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }));
  }, [mail, password, username, setIsFormValid]);


  const handleRegister = () => {
    console.log(mail);
    console.log(password);
    console.log(username);

    console.log("Login in");
  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an Account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
}
