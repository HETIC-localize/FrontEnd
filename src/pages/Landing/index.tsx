import styled from "styled-components";
import { Link } from 'react-router-dom'

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

const StyledLandingLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
`;

const Login = () => {
    return (
        <StyledWrapper>
            <StyledLandingTitle>Hetic</StyledLandingTitle>
            <StyledLandingLink to="/login">Connectez-vous</StyledLandingLink>
        </StyledWrapper>
    );
};

export default Login;
