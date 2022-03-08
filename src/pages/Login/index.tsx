import { Layout } from "antd";
import styled from "styled-components";
import { Input, Button } from "antd";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  width: 350px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const StyledLoginTitle = styled.p`
  font-size: 36px;
`;
const Login = () => {
  return (
    <StyledWrapper>
      <StyledLogin>
        <StyledLoginTitle>Login</StyledLoginTitle>
        <Input style={{ width: 300 }} placeholder="Email" />
        <StyledButton type="primary">Submit</StyledButton>
      </StyledLogin>
    </StyledWrapper>
  );
};

export default Login;
