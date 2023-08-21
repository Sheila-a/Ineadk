// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

contract Escrow {
    address public admin;
    enum Status {
        Started,
        Paused,
        Completed,
        Rejected
    }
    struct serviceContract {
        uint256 id;
        address payable buyer;
        address payable seller;
        Status status;
        uint256 amount;
        uint256 timestamp;
    }

    mapping(uint256 => serviceContract) contracts;

    // add commission

    // Figure out the best way to get contracts by address

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        if (admin != msg.sender) revert("No an Admin");
        _;
    }

    function buy(
        uint256 id,
        address payable buyer,
        address payable seller,
        uint256 amount
    ) external payable returns (uint256) {
        require(address(buyer) != address(0), "Invalid Address of Buyer");
        require(address(seller) != address(0), "Invalid Address of Seller");

        serviceContract memory newContracts = serviceContract(
            id,
            buyer,
            seller,
            Status.Started,
            amount,
            block.timestamp
        );

        contracts[id] = newContracts;

        return id;
    }

    function withdraw(uint256 _id) external {
        serviceContract storage singleContract = contracts[_id];
        require(singleContract.buyer == msg.sender, "No Access");
        require(singleContract.status == Status.Started, "Cant Withdraw");

        singleContract.status = Status.Completed;

        uint256 amount = singleContract.amount;
        address payable seller = singleContract.seller;
        seller.transfer(amount);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    receive() external payable {}

    fallback() external payable {}
}
