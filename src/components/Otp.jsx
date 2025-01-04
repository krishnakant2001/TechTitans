import React, { useEffect, useRef, useState } from "react";
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
  color: #8c8c8c;

  margin: 12px 0;
  &:hover {
    cursor: not-allowed;
  }
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
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 12px;
  margin-bottom: 24px;
`;
const InputText = styled.input`
  width: 24px;
  padding: 12px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 18px;
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
  font-size: 14px;
  color: #333333;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Otp = () => {
  const inputRefs = useRef([]);
  const [otpValue, setOtpValue] = useState("");
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `0${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const newOtpValue = [...otpValue];
    newOtpValue[index] = value;
    setOtpValue(newOtpValue);

    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendOtp = () => {
    setTimer(60);
    setResendDisabled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otpValue.join(""));
    setTimer(60);
    setResendDisabled(true);
  };

  return (
    <Container>
      <Wrapper>
        <Icon>
          <BlurOnIcon fontSize="large" />
        </Icon>
        <Title>Enter the OTP</Title>
        <Form onSubmit={handleSubmit}>
          <Input>
            {[...Array(6)].map((_, index) => (
              <InputText
                key={index}
                type="text"
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </Input>
          <Button>Submit</Button>
        </Form>
        <Subtitle>
          {resendDisabled ? (
            <span>Resend OTP in {formatTime()}</span>
          ) : (
            <Link onClick={handleResendOtp} disabled={resendDisabled}>
              Resend OTP
            </Link>
          )}
        </Subtitle>
      </Wrapper>
    </Container>
  );
};

export default Otp;
