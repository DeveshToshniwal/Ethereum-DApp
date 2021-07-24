/* eslint-disable */
import web3 from '../web3';

const address = '0x069daed8f1fEd915a970654b93D762B879CE3e52';
const abi = [
    
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "causeAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "cause_type",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "desciption",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "goal",
                    "type": "uint256"
                }
            ],
            "name": "CauseCreated",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "cause_type",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "goal",
                    "type": "uint256"
                }
            ],
            "name": "startCause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getAllCauses",
            "outputs": [
                {
                    "internalType": "contract Cause[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    
];
const TheCrowdChainInstance = new web3.eth.Contract(abi, address);
console.log(TheCrowdChainInstance.methods);
export default TheCrowdChainInstance;

/*export default (address) => {
    const instance = new web3.eth.Contract(abi, address);
    return instance;
};*/
