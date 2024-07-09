import web3 from './web3';
import Identity from './contracts/Identity.json';

// Replace with your contract's deployed address
const contractAddress = '0xBF613D1780a0846c42fEA62CD80cB2810cD97427';

const identityContract = new web3.eth.Contract(Identity.abi, contractAddress);

export default identityContract;