const { expect } = require('chai');

var INITIAL_SUPPLY = "1000000000000000000";
var EXPECTED_TOKEN_NAME = "KerryToken";
var EXPECTED_TOKEN_DECIMALS = 18;
var EXPECTED_TOKEN_SYMBOL = "KTK";
var EXPECTED_NEW_TOKEN_SUPPLY = "2000000000000000000";

describe("testing out functionalities Token smart contract", function() {
    var myToken; 

    before(async() => {
      const tokenArtifact = await ethers.getContractFactory("MyToken");
      myToken = await tokenArtifact.deploy(INITIAL_SUPPLY);
      await myToken.deployed();
    })

    it("Displaying token name", async() => {
      var tokenName = await myToken.name();
      expect(tokenName).to.equal(EXPECTED_TOKEN_NAME);
    });

    it("Displaying token decimals", async() => {
      var tokenDecimals = await myToken.decimals();
      expect(tokenDecimals).to.equal(EXPECTED_TOKEN_DECIMALS);
    });

    it("Displaying token symbol", async() => {
      var tokenSymbol = await myToken.symbol();
      expect(tokenSymbol).to.equal(EXPECTED_TOKEN_SYMBOL);
    });

    it("Deployment should assign the total supply of tokens to the owner", async() => {
      const [owner] = await ethers.getSigners();
      const ownerBalance = await myToken.balanceOf(owner.address);
      const tokenTotalSupply = await myToken.totalSupply();
      expect(tokenTotalSupply).to.equal(ownerBalance);
    });

    it("Mint a unit of token and displaying the token amount about user interacting with smart contract", async() => {
      await myToken.mintToken();
      var tokenSupply = await myToken.totalSupply(); 
      expect(tokenSupply).to.equal(EXPECTED_NEW_TOKEN_SUPPLY);
    });
});