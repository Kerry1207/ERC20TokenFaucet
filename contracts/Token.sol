// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/*
*   @title MyToken
*   @author Kerry99
*   @notice Creation a ERC20 Token Faucet for unit testing about smart contract developing that handle ERC20 Token
*/

contract MyToken is ERC20 {
    uint unitToken = 1*(10**18);

    constructor(uint _initialSupply) ERC20("KerryToken", "KTK") {
        _mint(msg.sender, _initialSupply);
    }

    function mintToken() public {
        _mint(msg.sender, unitToken);
    }
}