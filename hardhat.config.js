/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async() =>{
  const accounts = await ethers.getSigners();

  for(const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    tests: "./tests/smartcontract"
  }
};