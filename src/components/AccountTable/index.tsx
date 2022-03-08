import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import columns from "./columns";
import { StyledButtonWrapper } from "./styled";

const dataSource = [
  {
    id: "1",
    email: "foo.bar@gmail.com",
    country: "FR",
  },
  {
    id: "2",
    email: "foo.bar@gmail.com",
    country: "FR",
  },
];

const AccountTable = () => {
  return (
    <React.Fragment>
      <StyledButtonWrapper></StyledButtonWrapper>
      <Table dataSource={dataSource} columns={columns} rowKey="id" />
    </React.Fragment>
  );
};

export default AccountTable;
