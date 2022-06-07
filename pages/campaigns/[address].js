import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/layout';

const CampaignShow = () => {
  const router = useRouter();
  const { address } = router.query;
  // console.log(router);

  return (
    <Layout>
      <p>Campaign: {address} </p>
    </Layout>
  );
};

export default CampaignShow;
