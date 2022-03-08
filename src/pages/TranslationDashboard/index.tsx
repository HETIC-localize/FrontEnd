import { Layout } from 'antd';
import TraductionTable from '../../components/TraductionTable';
import Header from '../../components/Header';
import SiderDashboard from '../../components/SiderDashboard';

const TranslationDashboard = () =>  {
  return (
    <Layout>
      <SiderDashboard />
      <Layout style={{height:"100vh"}}>    
        <Header />
        <TraductionTable />
      </Layout>    
    </Layout>
  );
}

export default TranslationDashboard;