// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GIGNexusToken is ERC20 {
    address public owner;

    constructor() ERC20("GIGNexus Token", "GIGN") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        if (msg.sender != owner) revert("ONLY_OWNER");
        _;
    }

    function mint(address account, uint256 amount) external onlyOwner {
        super._mint(account, amount);
    }

    function burn(address account, uint256 amount) external onlyOwner {
        super._burn(account, amount);
    }
}
