import React from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import factory from '../code/factory';
import Layout from '../components/layout';

function CampaignIndex({ campaigns }) {
  const router = useRouter();
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
      style: { overflowWrap: 'break-word' },
      fluid: true,
    };
  });

  return (
    <Layout>
      <>
        <h1>Campaigns</h1>
        <Button
          icon
          floated='right'
          color='teal'
          size='large'
          onClick={() => router.push('/campaigns/new')}
          style={{ marginBottom: '20px' }}
        >
          <Icon name='add circle' />
          {'   '}Create New Campaign
        </Button>
      </>
      <Card.Group items={items} centered />
    </Layout>
  );
}

export default CampaignIndex;

//uses server side rendering to call the campaign contracts
export const getServerSideProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { props: { campaigns } };
};
