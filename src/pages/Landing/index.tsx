import styled from "styled-components";
import { Anchor } from "antd";

const { Link } = Anchor;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledLandingTitle = styled.h1`
  font-size: 56px;
`;
const Login = () => {
    return (
        <StyledWrapper>
            <StyledLandingTitle>Hetic</StyledLandingTitle>
            <Anchor>
                <Link href="/login" title="Connectez-vous" />
            </Anchor>
        </StyledWrapper>
    );
};

export default Login;
