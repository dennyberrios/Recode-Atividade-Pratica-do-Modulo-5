import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #191970;
  max-width: 350px;
  padding: 20px;
  border-radius: 15px;
`;

export const LogoSignin = styled.div`
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #eee;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #eee;
    font-size: 1.2rem;
  }

  a:hover {
    transition: .3s;
    color: #b0c7d7;
  }
`;
