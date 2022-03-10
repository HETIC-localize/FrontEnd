import styled from "styled-components";

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  align-items: baseline;
`;

export const StyledLink = styled.div`
  color: white;
  margin-left: 20px;
  margin-bottom: 50px;
  a {
    color: #FFFFFF;
  }
  .is-active {
    color: #40a9ff;
  }
  .anticon {
    margin-right: 0.5rem;
  }
`;
