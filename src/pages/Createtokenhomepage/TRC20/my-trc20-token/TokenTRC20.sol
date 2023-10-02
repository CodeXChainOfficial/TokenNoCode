

pragma solidity 0.5.4;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract TestCoin is ERC20 {
    string memory _name,
    string memory _symbol,
    uint256 _initialSupply,
                uint8 _decimals

    constructor() public {
        _mint(msg.sender, _initialSupply * (10**uint256(_decimals)));
    }
}