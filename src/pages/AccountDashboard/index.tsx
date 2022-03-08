import { Layout } from 'antd';
import AccountTable from '../../components/AccountTable';
import Header from '../../components/Header';
import SiderDashboard from '../../components/SiderDashboard';

const AccountDashboard = () =>  {
  return (
    <Layout>
      <SiderDashboard />
      <Layout style={{height:"100vh"}}>    
        <Header />
        <AccountTable />
      </Layout>    
    </Layout>
  );
}

export default AccountDashboard;