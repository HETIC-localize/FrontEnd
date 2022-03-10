import { Form } from "antd";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledInput = styled(Form.Item)`
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  .ant-form-item-control {
    width: 100%;
    text-align: left;
  }
`;
