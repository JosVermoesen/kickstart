import React from 'react';
import { Card } from 'semantic-ui-react';
import factory from '../code/factory';
import Layout from '../components/layout';
import Link from 'next/link';

function CampaignIndex({ campaigns }) {
  // console.log('campaigns', campaigns);

  const items = campaigns.map((address) => {
    // console.log(address);
    return {
      header: address,
      description: (
        <Link href={`/campaigns/${address}`}>
          <a>View campaign</a>
        </Link>
      ),
      fluid: true,
    };
  });

  return (
    <Layout>
      <>
        <h1>Campaigns</h1>
        {/* <Button
          icon
          floated='right'
          color='teal'
          size='large'
          onClick={() => router.push('/campaigns/new')}
          style={{ marginBottom: '20px' }}
        >
          <Icon name='add circle' />
          {'   '}Create New Campaign
        </Button> */}
      </>
      <Card.Group items={items} centered />
    </Layout>
  );
}

//uses server side rendering to call the campaign contracts (so good for slow devices)
CampaignIndex.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default CampaignIndex;
