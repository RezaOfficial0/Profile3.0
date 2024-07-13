const { expect } = require("chai");

describe("Identity", function () {
  it("Should register and retrieve a user", async function () {
    const [owner, addr1] = await ethers.getSigners();

    const Identity = await ethers.getContractFactory("Identity");
    const identity = await Identity.deploy();
    await identity.deployed();

    // Register user
    await identity.connect(addr1).registerUser("Alice", "Alice@hello.com");

    // Retrieve user data
    const user = await identity.users(addr1.address);

    expect(user.name).to.equal("Alice");
    expect(user.email).to.equal("Alice@hello.com");
    expect(user.isRegistered).to.equal(true);
  });

  it("Should not allow duplicate registration", async function () {
    const [owner, addr1] = await ethers.getSigners();

    const Identity = await ethers.getContractFactory("Identity");
    const identity = await Identity.deploy();
    await identity.deployed();

    // Register user
    await identity.connect(addr1).registerUser("Alice", "Alice@hello.com");

    // Attempt to register the same user again
    await expect(identity.connect(addr1).registerUser("Alice","Alice@hello.com")).to.be.revertedWith("User is already registered");
  });
});
