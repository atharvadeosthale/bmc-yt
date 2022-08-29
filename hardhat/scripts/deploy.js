const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const Coffee = await hre.ethers.getContractFactory("Coffee");
  const coffee = await Coffee.deploy();

  await coffee.deployed();

  console.log("Greeter deployed to:", coffee.address);

  const buy = await coffee.functions.buyCoffee({
    value: ethers.utils.parseEther("1.0"),
  });

  console.log(buy);
  await buy.wait();
  console.log(await coffee.provider.getBalance(coffee.address));

  const withdraw = await coffee.functions.withdraw();
  console.log(withdraw);
  await withdraw.wait();
  console.log(await coffee.provider.getBalance(coffee.address));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
