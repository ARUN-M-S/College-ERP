import React from "react";
import CustomPrimaryButton from "../../shared/components/customPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const getFormNotValidMessage = () => {
  return "Enter correct E-mail address and password should Contain between 6 and 12 Characters";
};
const getFormValidMessage = () => {
  return "Press to Login!";
};

function LoginPageFooter({ handleLogin, isFormValid }) {
  let navigate = useNavigate();
  const handlePushtoRegisterPage = () => {
    navigate("/register", { replace: true });
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Log In"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an Account?"
        redirectText="Create A Account"
        additionalStyles={{ marginTop: "5px" }}
        rediectHandler={handlePushtoRegisterPage}
      />
    </>
  );
}

export default LoginPageFooter;
