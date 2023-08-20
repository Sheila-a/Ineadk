async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the account:", deployer.address);

  // Get the contract Factory
  const escrowcontract = await ethers.getContractFactory("Escrow");
  const gignexuscontract = await ethers.getContractFactory("GIGNexusToken");

  // Depoly the contract
  this.gignexus = await gignexuscontract.deploy();
  this.escrow = await escrowcontract.deploy();
  console.log("Deloyed contract address:", this.gignexus.address);
  console.log("Deloyed contract address:", this.escrow.address);

  // Save copies of each contracts abi and address to the frontend.
  saveFrontendFiles(this.escrow, "Escrow");
  saveFrontendFiles(this.gignexus, "GIGNexusToken");
}

function saveFrontendFiles(contract, name) {
  const path = require("path");
  const fs = require("fs");
  const newPath = path.join(__dirname, "../../");

  const contractsDir = newPath + "src/abis/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }
  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
