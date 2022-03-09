import { useState } from "react";
import styled from "styled-components";
import { Input, Button, Select, Form, Checkbox } from "antd";
const { API_URl } = process.env;

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

const { Option } = Select;

const handleChange = (value: any) => {
  console.log(`selected ${value}`);
};

const toto: any = process.env.REACT_APP_API_URL;
console.log(toto);

const Login = () => {
  const [email, setEmail] = useState("foo.bar@gmail.com");
  const [countries, setCountries] = useState(["fr", "en"]);
  const [company, setcompany] = useState("Hetic");

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const validateForm = (
    email: string,
    countries: Array<string>,
    companie?: string
  ) => {
    (async () => {
      const rawResponse = await fetch(`${toto}/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          countries: countries,
          company: companie,
        }),
      });
      const content = await rawResponse.json();
      console.log(content);
    })();
  };
  return (
    <StyledWrapper>
      <StyledLogin>
        <StyledLoginTitle>Register</StyledLoginTitle>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Countries"
            name="countries"
            rules={[{ required: false, message: "Pouet" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Companie"
            name="company"
            rules={[{ required: false, message: "Pouet" }]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={["en", "fr", "es"]}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => validateForm(email, countries, company)}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </StyledLogin>
    </StyledWrapper>
  );
};

export default Login;
