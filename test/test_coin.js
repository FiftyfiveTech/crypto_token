const TestCoin = artifacts.require("TestCoin");

require('chai')
  .use(require('chai-as-promised'))
  .should()


function tokens(n) {
  return web3.utils.toWei(n, 'ether');
}


contract('Test Coin', ([owner, investor]) => {
  let testCoin

  before(async () => {
    // Load Contracts
    testCoin = await TestCoin.new()
  })

  describe('Mock TTC deployment', async () => {
    it('has a name', async () => {
      const name = await testCoin.name()
      assert.equal(name, 'Test Coin')
    }),

      it('total coin balance', async () => {
        const balance = await testCoin.coinsLeft()
        assert.equal(balance, 10000)
      })
  })

  describe('Buy And Sell', async () => {
    it('check owner account balance after buying coins of 1 eth', async () => {
      //Buy coin
      await testCoin.mint(owner,{ value: tokens('1') })

      const balance = await testCoin.balanceOf(owner)
      assert.equal(balance.toString(), 10)
    })

    it('check updated total supply ', async () => {
        const balance = await testCoin.coinsLeft()
        assert.equal((balance.toString()), 9990)
    })
  })
})
