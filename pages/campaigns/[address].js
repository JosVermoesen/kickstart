import React from 'react';
import Layout from '../../components/layout';
import Campaign from '../../code/campaign';

const CampaignShow = ({
  address,
  minimumContribution,
  balance,
  requestCount,
  approversCount,
  manager,
}) => {
  return (
    <Layout>
      <h1>Campaign Details</h1>
      <h4>Adress: {address}</h4>
      <h5>Minimum: {minimumContribution}</h5>
      <h5>Balance: {balance}</h5>
      <h5>RequestCount: {requestCount}</h5>
      <h5>ApproversCount: {approversCount}</h5>
      <h5>Manager: {manager}</h5>
    </Layout>
  );
};

//uses server side rendering to call the campaign contracts (so good for slow devices)
CampaignShow.getInitialProps = async (props) => {
  const campaignDetails = Campaign(props.query.address);
  const summary = await campaignDetails.methods.getSummary().call();

  return {
    address: props.query.address,
    minimumContribution: summary[0],
    balance: summary[1],
    requestCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
};

export default CampaignShow;
/* import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/layout';
import Campaign from '../../code/campaign';

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

export default CampaignShow; */
