import web3 from './web3';
import CampaignFacotry from '../bc-campaign/build/CampaignFactory.json';

const address = '0x6d0f2B27d4141769bfb329e77fBc4ACD47544F4d';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFacotry.interface),
  address
);

export default instance;
