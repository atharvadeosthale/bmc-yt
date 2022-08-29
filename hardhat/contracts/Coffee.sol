//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Coffee is Ownable {
  function buyCoffee() public payable returns(string memory message) {
    return "Thanks for buying me a coffee!";
  }

  function withdraw() public onlyOwner payable {
    payable(msg.sender).transfer(address(this).balance);
  }
}