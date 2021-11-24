require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: { enabled: false },
    }
  },
  networks: {
    hardhat: {
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 100000
  }
};
