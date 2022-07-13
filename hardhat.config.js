require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",

  networks: {
    bsctestnet: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      chainId: 97,
      accounts: [
        "9d61a12553a2bb89beb4192d5f72099c1280971d217a2cb332954bb6e05108d2",
      ],
    },
  },
};
