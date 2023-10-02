// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/TRC20/extensions/TRC20Burnable.sol";

contract MyTRC20Token is TRC20Burnable {
    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _initialSupply,
                uint8 _decimals
    ) TRC20(_name, _symbol) {
        _mint(msg.sender, _initialSupply * (10**uint256(_decimals)));
    }
}
