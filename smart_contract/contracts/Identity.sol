// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.7;

contract Identity {
     
   struct User {
        string name;
        string  email;
        bool isRegistered;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed userAddress, string name, string email);

    // Function to register a new user
    function registerUser(string memory _name, string memory _email) public {

        users[msg.sender] = User(_name, _email, true);
        emit UserRegistered(msg.sender, _name, _email);
        
    }

    // Function to get a user's details
    function getUser(address _userAddress) public view returns (string memory, string memory, bool) {
        User memory user = users[_userAddress];
        return (user.name, user.email, user.isRegistered);
    }
}