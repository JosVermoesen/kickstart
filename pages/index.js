import React, { Component } from 'react';

import { Button, Card, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

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
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          {this.renderCampaigns()}
          <Button primary icon labelPosition='left'>
            <Icon name='add circle' />
            Create Campaign
          </Button>
        </div>
      </Layout>
    );
  }
}
export default CampaignIndex;
