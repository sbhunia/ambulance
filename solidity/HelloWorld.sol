pragma solidity >=0.5.0 <0.9.0;


contract HelloWorld{
  string greeting;
  constructor() public {
    greeting = 'Hello World';
  }
    function greet() public view returns (string memory) {
      return greeting;
    }
}