import { Layout } from "antd";
import AccountTable from "../../components/AccountTable";
import Header from "../../components/Header";
import SiderDashboard from "../../components/SiderDashboard";
import {useEffect} from "react";
import { userAccount } from "api/auth";

const AccountDashboard = () => {
  useEffect(() => {
    const getProfile = async() => await userAccount()
    console.log(getProfile())
  }, [])
  return (
    <Layout>
      <SiderDashboard />
      <Layout style={{ height: "100vh" }}>
        <Header />
        <AccountTable />
      </Layout>
    </Layout>
  );
};

export default AccountDashboard;
