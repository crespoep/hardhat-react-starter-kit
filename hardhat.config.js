require("@nomiclabs/hardhat-waffle");
// require("hardhat-watcher");
// require('./scripts/accounts');
require("./tasks/faucet");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
  watcher: {
    compilation: {
      tasks: ["compile"],
      files: ["./contracts"],
      verbose: true,
    },
    test: {
      tasks: ["test"],
      files: ["./test/**/*", "./contracts"],
      verbose: true,
    },
  },
};
