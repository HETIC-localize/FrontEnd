import { Layout } from "antd";
import { StyledLinkWrapper, StyledLink } from "./styled";

const { Sider } = Layout;

const SiderDashboard = () => {
  return (
    <Sider>
      <StyledLinkWrapper>
        <StyledLink>Gestion de traduction</StyledLink>
        <StyledLink>Gestion de compte</StyledLink>
      </StyledLinkWrapper>
    </Sider>
  );
};

export default SiderDashboard;
