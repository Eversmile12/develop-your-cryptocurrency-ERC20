const hre = require("hardhat");

async function main() {
  const DevToken = await hre.ethers.getContractFactory("DevToken");
  const devToken = await DevToken.deploy("1000000000000000000000000000");

  await devToken.deployed();

  console.log("Token deployed to:", devToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
