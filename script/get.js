// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const ryzwanFactory = await hre.ethers.getContractFactory("Ryzwan");
  const rzwn = await ryzwanFactory.attach("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0");

  const pemilik = await rzwn.getPemilik()
  const textRaw = await rzwn.textRaw()

  console.log(pemilik);
  console.log(`text = ${textRaw}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});