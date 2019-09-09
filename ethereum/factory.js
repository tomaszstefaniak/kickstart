import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xF1520D021094fe1249a75865FFcCfea516AbE3Ad'
	);

export default instance;