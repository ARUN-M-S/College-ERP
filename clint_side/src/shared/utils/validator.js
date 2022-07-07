export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ mail, username,password }) => {
  return (
    
    validatePassword(password) &&
    validateMail(mail) && validateUserName(username) 
  );
};

const validatePassword = (password) => {
  return password.length > 6 && password.length < 12;
};
const validateMail = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};
const validateUserName = (username) => {
    return username.length > 2 && username.length < 13;
  };