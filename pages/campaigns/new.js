import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button, Input, Message } from 'semantic-ui-react';

import Layout from '../../components/layout';
import factory from '../../code/factory';
import web3 from '../../code/web3';

function CampaignNew(props) {
  const [minimumContribution, setMinimumContribution] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage('');
    try {
      const accounts = await web3.eth.getAccounts();

      await factory.methods
        .createCampaign(minimumContribution)
        .send({ from: accounts[0] });

      router.push('/');
    } catch (err) {
      setErrorMessage(err.message);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <h3>Create a Campaign</h3>
      <Form error={!!errorMessage} onSubmit={onSubmit}>
        <Form.Field>
          <label>Minimum contribution</label>
          <Input
            label='wei'
            labelPosition='right'
            value={minimumContribution}
            onChange={(event) => setMinimumContribution(event.target.value)}
          />
        </Form.Field>
        <Message error header='Oops!' content={errorMessage} />
        <Button primary loading={loading}>
          Create!
        </Button>
      </Form>
    </Layout>
  );
}

export default CampaignNew;

/* import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/layout';
import factory from '../../code/factory';
import web3 from '../../code/web3';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: '',
    loading: false,
  };

  onSubmit = async (event) => {
    //  const router = useRouter();
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
          // Metamask calculates gas automatically.
          // So unlike in tests, we do not have to specify gas here
        });
    } catch (err) {
      // console.log(err.message);
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <Message error header='Oops!' content={this.state.errorMessage} />
            <label>Minimum Contribution</label>
            <Input
              label='wei'
              labelPosition='right'
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}
export default CampaignNew;
 */
