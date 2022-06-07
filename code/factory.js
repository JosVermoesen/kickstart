import web3 from './web3';
import CampaignFacotry from '../bc-campaign/build/CampaignFactory.json';

const address = '0xbF6AF5C8bc5dCb4ac45EB578A32f9ef5950F6C08';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFacotry.interface),
  address
);

export default instance;
