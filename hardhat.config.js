require("@nomiclabs/hardhat-ethers")
require("@openzeppelin/hardhat-upgrades")
require("@nomiclabs/hardhat-etherscan")
const dotenv = require("dotenv");

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity:  {
    version : "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1
    }
  }
},
  networks: {
    rinkeby: {
      url: process.env.REACT_APP_RINKEBY_RPC_URL,
      accounts: {mnemonic: process.env.REACT_APP_SECRET},
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY,
  },
};
