/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
module.exports = {
  solidity: "0.8.24",
     // Example network configuration
     networks: {
      ropsten: {
        url:process.env.INFURA_ROPSTEN_URL,
        accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY}`],
      },
    },
};
