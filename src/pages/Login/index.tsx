import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";
import { StyledInput, StyledWrapper } from "styles/globals";
import { StyledLogin, StyledLoginTitle } from "./styled";
import { loginUser } from "api/auth";

const Login = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const onFinish = (values: { email: string }) => {
    setLoading(true);
    (async () => {
      const rawResponse = await loginUser(values.email)
      const content = await rawResponse.json();

      if (rawResponse.status === 200) {
        localStorage.setItem("tokenID", content.token);
        navigate('/')
      } else {
        notification.error({
          message: content.title,
          description: content.detail,
        });
      } 
      setLoading(false);
    })();
  };

  return (
    <StyledWrapper>
      <StyledLogin>
        <StyledLoginTitle>Login</StyledLoginTitle>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          style={{ width: "100%" }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <StyledInput
            style={{ width: "100%" }}
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email required" }]}
          >
            <Input placeholder="Please enter an email" />
          </StyledInput>
          <Form.Item
            wrapperCol={{ span: 16 }}
            style={{ justifyContent: "center" }}
          >
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </Form.Item>
          <NavLink to="/register">Create an account</NavLink>
        </Form>
      </StyledLogin>
    </StyledWrapper>
  );
};

export default Login;
