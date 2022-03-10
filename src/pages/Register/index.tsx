import { useState } from "react";
import { Input, Button, Select, Form, notification } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { StyledInput, StyledWrapper } from "styles/globals";
import { StyledRegister, StyledRegisterTitle } from "./styled";

const toto: any = process.env.REACT_APP_API_URL;

type RegisterData = {
  email: string;
  countries?: string[];
  company?: string;
};

const Register = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate()
  const onFinish = (values: RegisterData) => {
    setLoading(true);
    (async () => {
      const rawResponse = await fetch(`${toto}/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          countries: values.countries,
          company: values.company,
        }),
      });
      const content = await rawResponse.json();

      if (rawResponse.status === 500) {
        notification.error({
          message: content.title,
          description: content.detail,
        });
      } else if (rawResponse.status === 200) {
        localStorage.setItem("tokenID", content.id);
        navigate('/')
      }
      setLoading(false)
    })();
  };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };

  // const validateForm = (
  //   email: string,
  //   countries: Array<string>,
  //   companie?: string
  // ) => {
  //   (async () => {
  //     const rawResponse = await fetch(`${toto}/register`, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         countries: countries,
  //         company: companie,
  //       }),
  //     });
  //     const content = await rawResponse.json();
  //     console.log(content);
  //   })();
  // };

  return (
    <StyledWrapper>
      <StyledRegister>
        <StyledRegisterTitle>Register</StyledRegisterTitle>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          style={{ width: "100%" }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <StyledInput
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email required" }]}
          >
            <Input placeholder="Please enter an email" />
          </StyledInput>

          <StyledInput
            label="Countries"
            name="countries"
            rules={[{ required: false, message: "Pouet" }]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select a country"
            >
              <Select.Option value="fr">FR</Select.Option>
              <Select.Option value="en">EN</Select.Option>
            </Select>
          </StyledInput>
          <StyledInput
            label="Company"
            name="company"
            rules={[{ required: false, message: "Pouet" }]}
          >
            <Input placeholder="Please enter your company" />
          </StyledInput>
          <Form.Item
            wrapperCol={{ span: 16 }}
            style={{ justifyContent: "center" }}
          >
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </Form.Item>
          <NavLink to="/login">Already have an account</NavLink>
        </Form>
      </StyledRegister>
    </StyledWrapper>
  );
};

export default Register;
