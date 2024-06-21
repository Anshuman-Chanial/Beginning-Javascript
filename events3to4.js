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
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "event1",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "event2",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "event3",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "triggerEvents",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


let EventTest = web3.eth.contract(contract_abi);
let EventTestContract = ClientReceipt.at("0xc4d5177E415a5f5116Dc07Db14273f2755Ef7aAe");

EventTestContract.transfer(function(err, data) {
   if (!err)
   console.log(data);
});