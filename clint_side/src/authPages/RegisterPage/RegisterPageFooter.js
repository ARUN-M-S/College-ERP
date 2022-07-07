import React from "react";
import CustomPrimaryButton from "../../shared/components/customPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const getFormNotValidMessage = () => {
  return "Username should contain between 3 to 12 characters,Password Should Contain 6 to 12 Characters also correct Email address should be Provided";
};
const getFormValidMessage = () => {
  return "Press to register!";
};

function RegisterPageFooter({ handleRegister, isFormValid }) {
  let navigate = useNavigate();
  const handlePushtoLoginPage = () => {
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Already have an Account ?"
        redirectText="Login"
        additionalStyles={{ marginTop: "5px" }}
        rediectHandler={ handlePushtoLoginPage}
      />
    </>
  );
}

export default RegisterPageFooter;
