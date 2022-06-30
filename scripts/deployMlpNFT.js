const { ethers, upgrades } = require("hardhat");

async function main() {
  const YourNFTContract = await ethers.getContractFactory("YourNFTContract");
  //token name, token symbol, mint price, max supply,  qty per wallet,revenue share percentage 2%, royalty owner, url
  const yourNFTContract = await upgrades.deployProxy(YourNFTContract, 
    ["MLP_Name", "MLP",
     100, 5000, 5, 
     "0xdC965981B5C30da2d13D23Ff4B8f9dC6a775c735", 
     "https://raw.githubusercontent.com/crissi/mlp/main/",
     200, 
     300,
     "0x78b10c0791b87c9Df107E6Ace0Ae00CCE4407f45"
    ], {
    initializer:"initialize",
  });
await YourNFTContract.deployed();

  console.log("YourNFTContract deployed to:", yourNFTContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
