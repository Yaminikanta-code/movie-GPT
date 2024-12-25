function checkValidateData(Email, Password) {
  const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const isEmailValid = emailRegex.test(Email);
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const isPasswordValid = passwordRegex.test(Password);
  if (isEmailValid && isPasswordValid) {
    return null;
  } else {
    return "Invalid email or password";
  }
}
