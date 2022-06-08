import React from 'react';
import { Card } from 'semantic-ui-react';

import Layout from '../../components/layout';
import Campaign from '../../code/campaign';
import web3 from '../../code/web3';

const CampaignShow = ({
  address,
  minimumContribution,
  balance,
  requestCount,
  approversCount,
  manager,
}) => {
  const items = [
    {
      header: 'Manager Address',
      meta: manager,
      description:
        'The manager created this campaign and can create requests to withdraw this money',
      style: { overflowWrap: 'break-word' },
    },
    {
      header: 'Minimum Contribution',
      meta: `${minimumContribution} wei`,
      description:
        'The minimum amount to contribute to this campaign in wei to become an approver',
      style: { overflowWrap: 'break-word' },
    },
    {
      header: 'Camapaign Balance',
      meta: `${balance} wei = ${web3.utils.fromWei(balance, 'ether')} eth`,
      description: 'How much money this campaign has left to spend',
      style: { overflowWrap: 'break-word' },
    },
    {
      header: 'Number of requests',
      meta: requestCount,
      description:
        'A request tries to withdraw money from the account. Requests must be approved by a minimum 50% of approvers',
      style: { overflowWrap: 'break-word' },
    },
    {
      header: 'Number of Approvers',
      meta: approversCount,
      description:
        'The number of approvers that have already contributed to this campaign',
      style: { overflowWrap: 'break-word' },
    },
  ];

  return (
    <Layout>
      <h1>Campaign Details</h1>
      <Card.Group items={items}></Card.Group>
    </Layout>
  );
};

export default CampaignShow;

//uses server side rendering to call the campaign contracts (so good for slow devices)
export const getServerSideProps = async (props) => {
  const campaignDetails = Campaign(props.query.address);
  const summary = await campaignDetails.methods.getSummary().call();
  // console.log(props.query);
  // console.log(summary);

  return {
    props: {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    },
  };
};
