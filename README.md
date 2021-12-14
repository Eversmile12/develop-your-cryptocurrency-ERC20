# Create Your Cryptocurrency Tutorial
![image](https://user-images.githubusercontent.com/72762629/146063511-59d75107-927a-4633-af3f-38ba2a9b4fdf.png)


This repository is related to the [How To Develop a Cryptocurrency - The Complete Guide (2022)](https://vitto.cc/how-to-develop-a-cryptocurrency-the-complete-2022-guide/) tutorial. It contains the boilerplates code for a functioning ERC20 Token - Crypto.

## Prerequisites
- VSCode
- MetaMask

## Installation

Install the node packages:

```bash
yarn install
```

Compile the Smart Contracts:
```bash
npx hardhat compile
```

You have two ways to interact with the NFT Marketplace:
- Locally using Hardhat
- Deploying the contracts on Polygon Mumbai-testnet

## Deploy the Token on Polygon Mumbai
Everything explained above is extensively explained in the [How To Develop a Cryptocurrency - The Complete Guide (2022)](https://vitto.cc/how-to-develop-a-cryptocurrency-the-complete-2022-guide/) 

1. Create a new file called ".env" in the root folder of the project.
2. Create a new variable in the .env file, and name it: **PRIVATE_KEY**
3. Retrieve your wallet's private key and assign it to the PRIVATE_KEY variable 

![image](https://user-images.githubusercontent.com/72762629/144294242-be8c53d2-c927-427a-8a14-ca4e90e1641e.png)

4. Grab you Polygon Mumbai Testnet URL on Alchemy.com 
5. Substitute "YOUR ALCHEMY POLYGON MUMBAI ENDPOINT" with your URL
6. Get some test MATIC from an online faucet such as [this one](https://faucet.polygon.technology/)

Once everything is read, run the following code in your terminal:
```bash
npx hardhat run ./scripts/deploy.js --network mumbai
```
This will log the address of the newly deployed Ttoken.

7. Go to Metamask and add the newly deployed token


### Disclaimer

All the work contained in this repository is provided ​“AS IS”. Developer makes no other warranties, express or implied, and hereby disclaims all implied warranties, including any warranty of merchantability and warranty of fitness for a particular purpose. The code should not be used in a production environment.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
