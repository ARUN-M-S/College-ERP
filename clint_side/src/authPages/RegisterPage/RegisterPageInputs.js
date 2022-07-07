import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

export default function RegisterPageInputs(props) {
  const { mail, setMail, username, setUserName, password, setPassword } = props;
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="mail"
        placeHolder="Enter  Email Address"
      />
        <InputWithLabel
        value={username}
        setValue={setUserName}
        label="UserName"
        type="text"
        placeHolder="Enter User Name"
      />
        <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Enter Password"
        type="password"
        placeHolder="Enter password"
      />
    </>
  );
}
