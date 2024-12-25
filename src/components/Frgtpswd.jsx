import { TextField } from "@mui/material";
import React, { useState } from "react";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import styled from "styled-components";

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
  font-size: 24px;
  font-weight: 400;
  padding: 2px;
  margin-bottom: 12px;
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
  width: 80%;
  margin: 12px 0;
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
const Frgtpswd = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    console.log("Form Submitted");
    console.log("Email: ", email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <Container>
      <Wrapper>
        <Icon>
          <BlurOnIcon fontSize="large" />
        </Icon>
        <Title>Forgot Password</Title>
        <Form onSubmit={handleSubmit}>
          <Input>
            <TextField
              name="email"
              id="email"
              label="Email address"
              type="email"
              variant="outlined"
              value={email}
              onChange={handleChange}
            />
          </Input>
          <Button>Send OTP</Button>
        </Form>
        <Subtitle>
          Do you have an account?
          <Link> Sign in</Link>
        </Subtitle>
      </Wrapper>
    </Container>
  );
};

export default Frgtpswd;
