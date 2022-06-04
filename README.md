# Kickstart

## Development Tools used for this app

- [NodeJS](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

First follow steps for coding, compiling, testing and deploying contracts.

Secondly, follow the instructions to add next.js and building the client frontend.

## 1. Blockchain Coding, compiling, testing and deploying contracts

Generate the project with npm.
Make directory and run `npm init` inside the project root, give it a name, accept most proposals, only where asking for test script, answer with `mocha`

```json
"name": "kickstart",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
```

### NPM packages used for this project

All in one command:
`npm i ganache-cli mocha solc@0.4.26 fs-extra web3 @truffle/hdwallet-provider`

- [web3](https://github.com/ChainSafe/web3.js#readme) => `npm i web3`
- [solc](https://github.com/ethereum/solc-js#readme)
- [mocha](https://mochajs.org/)
- [ganache-cli](https://github.com/trufflesuite/ganache#readme)
- [fs-extra](https://github.com/jprichardson/node-fs-extra)
- [hdwallet-provider](https://github.com/trufflesuite/truffle/tree/master/packages/hdwallet-provider#readme)

### Compiling

- Move into directory
- `node compile.js`

### Testing

- Be sure to be in main directory
- Be sure using mocha for test scripts in package.json file.
- `npm run test`

### Rinkeby

https://faucets.chain.link/rinkeby

https://rinkeby.etherscan.io/

### Infura API

Getting access to the Rinkeby network
https://infura.io

### Your secrets for deploy.js

Add your personal secrets key and account to secrets.js

```js
const metamask = 'put here the string with your 12 secrets words';

const rinkeby = 'your rinkeby.infura.io https string';

module.exports = { metamask, rinkeby };
```

### Varia

https://andersbrownworth.com/blockchain/hash

https://eth-converter.com/

https://iancoleman.io/bip39/

## 2. Install next.js and React

- `npm install next react react-dom`
- Add in package.json a second script: "dev": "next dev"

```json
"scripts": {
    "test": "mocha",
    "dev": "next dev"
  },
```

- Add a pages folder in the main root for all the pages
- `npm run dev` and nextjs does the job

### Install UI package for React

- `npm i semantic-ui-react`
- `npm i semantic-ui-css`
