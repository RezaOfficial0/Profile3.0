async function main() {
      const [deployer] = await ethers.getSigners();
    
      console.log("Deploying contracts with the account:", deployer.address);
      console.log("Account balance:", (await deployer.getBalance()).toString());
    
      const Identity = await ethers.getContractFactory("Identity");
      const identity = await Identity.deploy();
    
      console.log("Identity contract address:", identity.address);
    }
    
    main()
      .then(() => process.exit(0))
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });