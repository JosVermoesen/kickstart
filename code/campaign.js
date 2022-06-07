import web3 from './web3';
import Campaign from '../bc-campaign/build/Campaign.json';

export default (address) => {
  return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};
