import { TranslationOutlined, UserOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import { StyledLinkWrapper, StyledLink } from "./styled";

const { Sider } = Layout;

const SiderDashboard = () => {
  return (
    <Sider>
      <StyledLinkWrapper>
        <StyledLink>
          <NavLink to="/" className={({ isActive }) => isActive ? "is-active" : ""}>
            <TranslationOutlined />
            Gestion de traduction
          </NavLink>
        </StyledLink>
        <StyledLink>
          <NavLink to="/account" className={({ isActive }) => isActive ? "is-active" : ""}>
            <UserOutlined /> 
            Gestion de compte
          </NavLink>
        </StyledLink>
      </StyledLinkWrapper>
    </Sider>
  );
};

export default SiderDashboard;
