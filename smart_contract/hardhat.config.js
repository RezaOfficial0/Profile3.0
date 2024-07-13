/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
     // Example network configuration
     networks: {
      ropsten: {
        url:process.env.INFURA_ROPSTEN_URL,
        accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY}`],
      },
    },
};
