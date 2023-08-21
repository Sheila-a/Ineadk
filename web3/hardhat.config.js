require("@nomiclabs/hardhat-waffle");
// require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    linea: {
      url: `https://rpc.goerli.linea.build/`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
