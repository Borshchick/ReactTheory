import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "../header/styles";
import {
  LogIn,
  LogInButton,
  LogInMenu,
  LoginForm,
  LoginFormWrapper,
} from "./styles";
import CustomInput from "../ui/input/CustomInput";
import PasswordInput from "../ui/input/password/PasswordInput";

const AuthLayout = ({ isRegister }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const newValues = { ...formValues, [name]: value };
    setFormValues(newValues);
  };

  const onSubmit = () => {
    console.log(formValues);
  };
  return (
    <>
      <Wrapper background="orange">
        <h1>Join Us</h1>
      </Wrapper>
      <LoginFormWrapper>
        <LoginForm>
          <LogIn>{isRegister ? "Register" : "Log In"}</LogIn>

          <CustomInput
            value={formValues.email}
            name={"email"}
            placeholder={"Your EMail"}
            onChange={handleChange}
          />
          <PasswordInput value={formValues.password} onChange={handleChange} />
          {isRegister && (
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          )}

          <LogInMenu>
            <LogInButton onClick={onSubmit}>
              {isRegister ? "Register" : "Log In" }
            </LogInButton>
            <h5>
              <NavLink to={isRegister ? "/login" : "/register"}>{isRegister ? "Already have account?" : "Join Us"}</NavLink>
            </h5>
          </LogInMenu>
        </LoginForm>
      </LoginFormWrapper>
    </>
  );
};

export default AuthLayout;
