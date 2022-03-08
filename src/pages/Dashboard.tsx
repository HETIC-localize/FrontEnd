import React from 'react';

import TraductionTable from '../components/TraductionTable';
import Header from '../components/Header';

function Dashboard() {
  return (
    <React.Fragment>
      <Header />
      <TraductionTable />     
    </React.Fragment>
  );
}

export default Dashboard;