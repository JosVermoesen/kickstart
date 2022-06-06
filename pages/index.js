import React, { Component } from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';
import Link from 'next/link';

import Layout from '../components/layout';
import factory from '../code/factory';

class CampaignIndex extends Component {
  // typical for nextjs!
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link href={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Open Campaigns</h3>

        {this.renderCampaigns()}
      </Layout>
    );
  }
}
export default CampaignIndex;

/* 
<Button floated='right' href='/campaigns/new' primary icon labelPosition='left'>
  <Icon name='add circle' />
  Create Campaign
</Button>;
 */
