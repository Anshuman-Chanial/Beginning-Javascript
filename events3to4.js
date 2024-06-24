/*const Web3 = require('web3');

// Define your contract ABI (replace with your actual ABI)
let abi_json = [
   {
       "constant": true,
       "inputs": [],
       "name": "transfer",
       "outputs": [],
       "payable": false,
       "stateMutability": "nonpayable",
       "type": "function"
   }
];

// Replace with your contract address
const contractAddress = "0x98...";

// Initialize web3 with WebSocket provider (Infura example)
const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/YOUR_INFURA_PROJECT_ID'));

// Create contract instance
let EventTestContract = new web3.eth.Contract(abi_json, contractAddress);

// Example function call
EventTestContract.methods.transfer().call(function(err, data) {
   if (err) {
      console.error('Error calling transfer:', err);
   } else {
      console.log('Transfer successful:', data);
   }
});
*/

const Web3 = require('web3');
console.log(Web3.version);
let contract_abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "messLog",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "messLog2",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "test",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


let EventTest = Web3.eth.contract(contract_abi);
let EventTestContract = ClientReceipt.at("0xd9145CCE52D386f254917e481eB44e9943F39138");

EventTestContract.transfer(function(err, data) {
   if (!err)
   console.log(data);
});