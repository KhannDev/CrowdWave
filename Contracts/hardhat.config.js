/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    network:{
      "mantle-testnet":{
        url : "https://rpc.testnet.mantle.xyz",
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },

  },
}
}
