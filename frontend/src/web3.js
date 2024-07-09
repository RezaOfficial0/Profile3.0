import Web3 from 'web3';

// Check if MetaMask is installed
if (window.ethereum) {
  var web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.error("User denied account access:", error);
  }
} else {
  // Fallback to Alchemy or Infura if MetaMask is not available
  web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/WE9j_lR34sP40zXWZPXsVInv5_w0xrEz");
}

export default web3;

