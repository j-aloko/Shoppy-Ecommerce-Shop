import React from "react";
import styled from "styled-components";
import { mobile } from "./../Responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "100%" })}
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 50%;

  ${mobile({ width: "70%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  border-radius: 15px 50px 30px 5px;
  background-color: white;
  color: black;
  width: 300px;

  ${mobile({ fontSize: "20px", marginTop: "5px", width: "250px" })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin: 20px 0px;
  color: white;
`;

const Button = styled.button`
  padding: 10px 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 10px;
  box-shadow: 0 9px #999;

  &:active {
    background-color: gray;
    box-shadow: 0 3px #666;
    transform: translateY(4px);
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the{" "}
            <b>
              <u>PRIVACY POLICY</u>
            </b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
