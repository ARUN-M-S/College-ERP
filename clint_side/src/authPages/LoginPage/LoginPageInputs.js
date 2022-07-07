import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel'

function LoginPageInputs({mail,setMail,password,setPassword}) {
  return (
    <>
      <InputWithLabel 

          value={mail}
          setValue={setMail}
          label='E-mail'
          type='text'
          placeHolder='Enter the E-mail Addres'
      />
        <InputWithLabel 

value={password}
setValue={setPassword}
label='Password'
type='password'
placeHolder='Enter the Password'
/>
    </>
  )
}

export default LoginPageInputs
