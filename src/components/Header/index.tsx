import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Modal, Avatar, Button } from "antd";
import { useNavigate } from "react-router-dom";

import { StyledHeader, StyledProfileWrapper } from "./styled";

const Header = () => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false);
  const logout = () => {
    localStorage.removeItem('tokenID');
    navigate('/login')
  }

  return (
    <StyledHeader>
      <StyledProfileWrapper>
        {/* <a onClick={() => setModal(true)}>
          <Avatar size="large" icon={<UserOutlined />} />
        </a>
        <Modal
          title="Nom utilisateur"
          style={{ top: 20 }}
          visible={modal}
          onOk={() => setModal(false)}
          onCancel={() => setModal(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal> */}
        <Button size="large" onClick={logout}>Logout</Button>
      </StyledProfileWrapper>
    </StyledHeader>
  );
};

export default Header;
