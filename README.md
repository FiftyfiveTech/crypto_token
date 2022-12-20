<img src="https://www.fiftyfivetech.io/wp-content/uploads/2021/05/logo.png">

# Crypto token Sample

This project is build up for ERC-20 token where token count and valued is defined by contract creator.

# Prerequisite
You should have following installed on your system:
- `Node`
- `Ganche`
- `Truffle`
- `Metamask`
- `Solidity`

# How to use this package

To use this package, enter this simple command on your `Terminal` or any other tool that can run `npm` commands.

To install package dependencies
```sh
npm install
```

To compile the project
```sh
truffle compile
```

To migrate/deploy contract
```sh
truffle migrate
```

To start unit testing
```sh
truffle test
```

`Use Truffle Cli to intract with deployed contract` 

# Project structure

```
├───contracts/
│   ├───Migrations.sol
│   └───TestCoin.sol
├───migrations/
│   ├───1_initial_migration.js
│   └───2_Test_Coin.js
├───src/
│   └───abis/
│       ├───Context.json
│       ├───ERC20.json
│       ├───ERC20Burnable.json
│       ├───IERC20.json
│       ├───IERC20Metadata.json
│       ├───Migrations.json
│       └───TestCoin.json
├───test/
│   └───test_coin.js
└───truffle-config.js

```
**contracts** - Contains the solidity contract for crypto test token which holds up the Ether in exchange of TTC with its exchange rate and existing limitations .

**src/abis** - It contain json file generated on compiling contract which help us to intract with contract's methods.

**migrations** - Migration file is for deploying and migrating contract to configured web3 network.

**test** - Using `chai` as testing framework for writing test cases and run test suit for the contract that are generated in `contracts` directory with help of abis on the respective contracts.

**truffle-config.js** - It consist on network configration where we need to deploy out our contract.

## Author

Fiftyfive Technologies
