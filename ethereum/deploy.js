const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
	'gesture dolphin chronic possible shoulder lazy confirm affair vault alter walk yellow',
	'https://ropsten.infura.io/v3/3bd1ee176cfd4cb8986dd162d2139645'
);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
	.deploy({ data: compiledFactory.bytecode })
	.send({ gas: '1000000', from: accounts[0] });

	console.log('Contract deployed to', result.options.address);
};
deploy();

// contract deployed to 0x176e56516c4D97206D05d9bBC032fCc6868b1E8F