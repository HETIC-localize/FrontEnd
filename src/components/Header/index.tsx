import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Modal, Avatar } from 'antd';

import { StyledHeader, StyledProfileWrapper } from './styled';

const Header = () => {
    const [modal, setModal] = useState(false)
    
    return (
        <StyledHeader>
            <StyledProfileWrapper>
                <a onClick={() => setModal(true)}>
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
                </Modal>
            </StyledProfileWrapper>
        </StyledHeader>
    )
}

export default Header;