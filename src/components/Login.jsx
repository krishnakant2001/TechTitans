import React, { useState } from "react";
import styled from "styled-components";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import { TextField } from "@mui/material";
import googleLogo from "../assets/google.png";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  border: 2px solid #ccc;
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  padding: 4px;
`;
const Icon = styled.div`
  margin-top: 12px;
  padding: 4px;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 400;
  padding: 2px;
`;
const Subtitle = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #545454;
  margin-bottom: 12px;
`;
const Google = styled.button`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  background-color: transparent;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 50px;
  &:hover {
    background-color: #dbdbdb;
    cursor: pointer;
    border: 1px solid #9a9a9a;
  }
`;
const Img = styled.img`
  width: 24px;
`;
const LineSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 8px 0;
`;
const Line = styled.hr`
  width: 32%;
  margin-top: 2px;
  border: 1px solid #e9e9e9;
`;
const OR = styled.div`
  color: #c2c2c2;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 80%;
  /* border: 1px solid black; */
`;
const FrgtPassword = styled.div`
  width: 80%;
  display: flex;
  justify-content: end;
  color: #33333398;
  &:hover {
    color: #333333e9;
    cursor: pointer;
  }
`;
const Button = styled.button`
  width: 36%;
  font-size: 16px;
  font-weight: 400;
  background-color: transparent;
  color: #333;
  padding: 12px;
  border-radius: 50px;
  border: 1px solid #ccc;
  outline: none;
  transition: all 0.3s ease;
  margin-top: 12px;
  &:hover {
    background-color: #dbdbdb;
    cursor: pointer;
    border: 1px solid #9a9a9a;
  }
`;
const Link = styled.div`
  color: #333;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Login = () => {
  const [cred, setCred] = useState({
    email: "",
    pswd: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setCred((prev) => {
      console.log(prev);
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);

    console.log("Form Submitted");
    console.log("Email: ", cred.email);
    console.log("Password: ", cred.pswd);
  };
  return (
    <Container>
      <Wrapper>
        <Icon>
          <BlurOnIcon fontSize="large" />
        </Icon>
        <Title>Sign In</Title>
        {/* <Subtitle></Subtitle> */}
        <Google>
          <Img src={googleLogo} /> Sign in with Google
        </Google>
        <LineSection>
          <Line></Line>
          <OR>or</OR>
          <Line></Line>
        </LineSection>
        <Form onSubmit={handleSubmit}>
          <Input>
            <TextField
              name="email"
              id="email"
              label="Email address"
              type="email"
              variant="outlined"
              value={cred.email}
              onChange={handleChange}
            />
            <TextField
              name="pswd"
              id="pswd"
              label="Password"
              type="password"
              variant="outlined"
              value={cred.pswd}
              onChange={handleChange}
            />
          </Input>
          <FrgtPassword>forgot password?</FrgtPassword>
          <Button>Login</Button>
        </Form>
        <Subtitle>
          Don't have an account?
          <Link> Sign up</Link>
        </Subtitle>
      </Wrapper>
    </Container>
  );
};

export default Login;
