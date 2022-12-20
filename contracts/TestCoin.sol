// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract TestCoin is ERC20, ERC20Burnable {
    constructor() ERC20("Test Coin", "TTC") {}

    uint256 totalAvailableCoin = 10000;
    uint256 oneCoinToEther = 10;

    function mint(address to) public payable {
        require(msg.value > 0, "there should be some value");
        uint256 amount = (msg.value / 1000000000000000000) * oneCoinToEther;
        require(totalAvailableCoin >= amount, "Coins not available");
        _mint(to, amount);
        totalAvailableCoin -= amount;
    }

    function coinsLeft() public view returns (uint256) {
        return totalAvailableCoin;
    }
}
