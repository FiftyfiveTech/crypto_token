const TestCoin = artifacts.require("TestCoin");

module.exports = async function (deployer) {
  await deployer.deploy(TestCoin)
  const testCoin = await TestCoin.deployed()
  console.log("contract address --->",testCoin.address)

};
