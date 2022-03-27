import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Context } from "./LoginContext";

const drop__down = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  transform: "translateY(0%)",
  opacity: 1,
  pointerEvents: "visible",
  width: "100vw",
  height: "100vh",
  left: 0,
  top: 0,
  background: "rgba(24, 126, 95, 0.98)",
  transition: "all 0.5s ease-in-out",
  zIndex: 1500,
};
const flip__up = {
  transform: "translateY(-50%)",
  opacity: 0,
  pointerEvents: "none",
  alignItems: "center",
  overflow: "hidden",
  height: "0vh",
};

const register__styles = {
  display: "flex",
  opacity: 1,
  transform: "translateX(-50%) translateY(0%)",
};

const Login = () => {
  const [loginDropDown, setLoginDropDown] = useContext(Context);
  const [changeText, setChangeText] = useState(false);
  const LoginFrm = useRef();
  const RegisterFrm = useRef();

  const switchDisplay = () => {
    if (changeText) {
      setTimeout(() => {
        LoginFrm.current.style.opacity = 1;
      }, 200);
      RegisterFrm.current.style = true;
    } else {
      LoginFrm.current.style.opacity = 0;
      RegisterFrm.current.style.display = register__styles.display;
      RegisterFrm.current.style.transform = register__styles.transform;
      RegisterFrm.current.style.opacity = register__styles.opacity;
    }
    setChangeText(!changeText);
  };

  return (
    <LoginMain style={!loginDropDown ? flip__up : drop__down}>
      <LoginContent>
        <Spink>
          Spink{" "}
          <a
            href={!changeText ? "#login" : "#register"}
            onClick={switchDisplay}
          >
            {!changeText ? "Register" : "Login"}
          </a>
        </Spink>
        <LoginForm ref={LoginFrm}>
          <LoginGreeting>Welcome Back to Spink</LoginGreeting>
          <LoginInfo>Please, login with your google mail address...</LoginInfo>
          <input type="email" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <div className="check">
            <label className="container">
              <input type="checkbox" name="stay__logged__in" />
              <span className="checkmark"></span>
              Stay logged in
            </label>
            <span>
              <a href="#">I've forgotten my password</a>
            </span>
          </div>
          <button type="submit">Login</button>
        </LoginForm>
        <RegisterForm ref={RegisterFrm}>
          <LoginGreeting>Welcome to Spink</LoginGreeting>
          <LoginInfo>
            Please fill in the information below to Get Started
          </LoginInfo>
          <input type="text" name="first-name" placeholder="First Name" />
          <input type="text" name="last-name" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email Adress" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
          />
          <div className="check">
            <label className="container">
              <input type="checkbox" name="stay__logged__in" />
              <span className="checkmark"></span>
              Stay logged in
            </label>
            <span>
              <a href="#">Sign in to your account</a>
            </span>
          </div>
          <button type="submit">Register</button>
        </RegisterForm>
      </LoginContent>
      <AiOutlineCloseCircle
        style={{
          fill: "#f8ecd6",
          fontSize: "1.5rem",
          position: "absolute",
          top: "2%",
          right: "2%",
        }}
        onClick={() => {
          setLoginDropDown(!loginDropDown);
        }}
      />
    </LoginMain>
  );
};

export default Login;
const LoginMain = styled.div``;

const LoginContent = styled.div`
  position: relative;
  min-width: 300px;
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  /* border: 1px solid #f8ecd6; */
  padding: 2rem 2%;
`;
const Spink = styled.h3`
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  display: flex;
  gap: 1rem;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 600;
  color: #f8ecd6;
  font-size: 2rem;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 2rem;
  a {
    background-color: transparent;
    color: #f8ecd6;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    border: 1px solid #f8ecd6;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #f8ecd6;
      color: rgba(24, 126, 95, 0.98);
    }
  }
`;
const LoginGreeting = styled.h3`
  font-weight: 300;
  font-size: 1.5rem;
  color: #f8ecd6;
  text-align: center;
`;

const LoginInfo = styled.h4`
  font-weight: 300;
  font-size: 0.8rem;
  color: #f8ecd6;
  text-align: center;
  letter-spacing: 1px;
`;

const LoginForm = styled.form`
  position: absolute;
  display: flex;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  min-width: 100%;
  flex-flow: column;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
  @media (max-width: 550px) {
    width: 90%;
  }
  button {
    width: max-content;
    padding: 0.4rem 1rem;
    margin: 0 auto;
    background: transparent;
    border: 1px solid #f8ecd6;
    color: #f8ecd6;
    margin-top: 0.5rem;
  }
  input:not([type="checkbox"]) {
    width: 100%;
    padding: 0.3rem;
    height: 2.5rem;
    background-color: transparent;
    border: 1px solid #f8ecd6;
    outline: none;
    color: #f8ecd6;
    ::placeholder {
      color: #f8ecd6;
    }
  }
  input[type="checkbox"] {
    background-color: transparent;
    /* width: 50px; */
  }
  .check {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .container {
      display: flex;
      position: relative;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      font-weight: 400;
      color: #f8ecd6;
      font-size: 0.7rem;
      padding-left: 1.3rem;
    }
    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 15px;
      width: 15px;
      background-color: transparent;
      border: 1px solid #f8ecd6;
      border-radius: 3px;
    }

    .container:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
      background-color: #f8ecd6;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
      left: 4px;
      top: 0px;
      width: 3px;
      height: 8px;
      border: solid green;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    span {
      a {
        text-decoration: none;
        color: #f8ecd6;
        font-weight: 400;
        font-size: 0.8rem;
      }
    }
  }
`;

const RegisterForm = styled(LoginForm)`
  display: flex;
  opacity: 0;
  transform: translateX(-50%) translateY(100%);
  transition: all 0.4s ease-in-out;
`;
