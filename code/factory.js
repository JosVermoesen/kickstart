import web3 from './web3';
import CampaignFacotry from '../bc-campaign/build/CampaignFactory.json';

const address = '0xf098FD39ddb0904d17E916c2972551b3fe27EDDe';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFacotry.interface),
  address
);

export default instance;
